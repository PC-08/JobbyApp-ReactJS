import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import GetProfileDeatilsCard from '../GetProfileDeatilsCard'

import JobItem from '../JobItem'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiConstants = {
  initialjrr: 'INITIALJH',
  successjrr: 'SUCCESSJH',
  failurejrr: 'FAILUREJH',
  loadingjrr: 'LOADINGJH',
}

const GetEmploymentType = props => {
  const {eachType, onCheckBoxReq} = props
  const {label, employmentTypeId} = eachType

  const onCheckBoxSel = () => {
    onCheckBoxReq(employmentTypeId)
  }

  return (
    <div className="checkbox-con">
      <input
        onChange={onCheckBoxSel}
        className="checkbox-input"
        type="checkbox"
        id={employmentTypeId}
        value={employmentTypeId}
      />
      <label htmlFor={employmentTypeId}>{label}</label>
    </div>
  )
}

const GetEmploymentSal = props => {
  const {eachSaltype, onSalopReq} = props
  const {label, salaryRangeId} = eachSaltype

  const onSalOpClick = () => {
    onSalopReq(salaryRangeId)
  }

  return (
    <div className="checkbox-con">
      <input
        onChange={onSalOpClick}
        name="group1"
        className="checkbox-input"
        type="radio"
        id={salaryRangeId}
        value={salaryRangeId}
      />
      <label htmlFor={salaryRangeId}>{label}</label>
    </div>
  )
}

class JobsRoute extends Component {
  state = {
    jobsArray: '',
    empType: [],
    empSal: '',
    search: '',
    apiStatus: apiConstants.initialjrr,
  }

  componentDidMount() {
    this.getJobsData()
  }

  onClickRetryBtnJobs = () => {
    this.getJobsData()
  }

  getJobsData = async () => {
    this.setState({apiStatus: apiConstants.loadingjrr})
    const jwtToken = Cookies.get('jwt_token')
    const {empType, empSal, search} = this.state
    console.log(empSal)
    const url = `https://apis.ccbp.in/jobs?employment_type=${empType.join()}&minimum_package=${empSal}&search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const formattedJobsArray = data.jobs.map(eachJob => ({
      companyLogoUrl: eachJob.company_logo_url,
      employmentType: eachJob.employment_type,
      jobDescription: eachJob.job_description,
      location: eachJob.location,
      packagePerAnnum: eachJob.package_per_annum,
      title: eachJob.title,
      rating: eachJob.rating,
      id: eachJob.id,
    }))

    if (response.ok === true) {
      this.setState({
        apiStatus: apiConstants.successjrr,
        jobsArray: formattedJobsArray,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failurejrr})
    }
  }

  renderJobsSuccessView = () => {
    const {jobsArray} = this.state

    if (jobsArray.length === 0) {
      return (
        <div className="jobs-failue-con">
          <img
            className="failue-img-jobs"
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
          />
          <h1 className="job-failure-head">No Jobs Found</h1>
          <p className="job-failure-para">
            We could not find any jobs. Try other filters
          </p>
        </div>
      )
    }
    return (
      <ul className="jobs-ul">
        {jobsArray.map(eachJob => (
          <JobItem key={eachJob.id} jobData={eachJob} />
        ))}
      </ul>
    )
  }

  getRenderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.loadingjrr:
        return this.renderJobsLoadingView()
      case apiConstants.failurejrr:
        return this.renderJobsFailureView()
      case apiConstants.successjrr:
        return this.renderJobsSuccessView()

      default:
        return null
    }
  }

  renderJobsLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobsFailureView = () => (
    <div className="jobs-failue-con">
      <img
        className="failue-img-jobs"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png "
        alt="failure view"
      />
      <h1 className="job-failure-head">Oups! Something Went Wrong</h1>
      <p className="job-failure-para">
        We cannot seem to led the page you are looking for
      </p>
      <button
        onClick={this.onClickRetryBtnJobs}
        type="button"
        className="job-failure-btn"
      >
        Retry
      </button>
    </div>
  )

  onClickSeacrButton = () => {
    this.componentDidMount()
  }

  onSalopReq = opt => {
    this.setState(
      prevState => ({
        empSal: opt,
      }),
      this.getJobsData,
    )
  }

  onCheckBoxReq = id => {
    const {empType} = this.state

    if (empType.includes(id)) {
      const filteredType = empType.filter(eacht => eacht !== id)

      this.setState(prevState => {}, this.getJobsData)
    } else {
      empType.push(id)

      this.setState(prevState => {}, this.getJobsData)
    }
  }

  render() {
    const {search} = this.state

    return (
      <>
        <Header />
        <div className="jobs-bg">
          <div>
            <GetProfileDeatilsCard />

            <hr className="jobs-lines" />
            <div>
              <h1 className="tye-head">Type of Employment</h1>
              {employmentTypesList.map(eachEmplType => (
                <GetEmploymentType
                  key={eachEmplType.employmentTypeId}
                  eachType={eachEmplType}
                  onCheckBoxReq={this.onCheckBoxReq}
                />
              ))}
            </div>
            <hr className="jobs-lines" />
            <div>
              <h1 className="tye-head">Salary Range</h1>

              {salaryRangesList.map(eachSaltype => (
                <GetEmploymentSal
                  key={eachSaltype.salaryRangeId}
                  eachSaltype={eachSaltype}
                  onSalopReq={this.onSalopReq}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="input-search-con">
              <input
                onChange={this.onInputChange}
                value={search}
                placeholder="Search"
                type="search"
                className="input-saerch"
              />
              <button
                onClick={this.onClickSeacrButton}
                className="saerch-btn"
                type="button"
                data-testid="searchButton"
              >
                <BsSearch className="search-icon" /> Search
              </button>
            </div>

            <div className="main-con">{this.getRenderView()}</div>
          </div>
        </div>
      </>
    )
  }
}

export default JobsRoute
