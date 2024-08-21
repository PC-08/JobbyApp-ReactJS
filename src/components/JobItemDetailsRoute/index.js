import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'
import {GoLinkExternal} from 'react-icons/go'
import {FaShoppingBag} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const GetSkill = props => {
  const {eachSkill} = props
  return (
    <li className="skill-li">
      <img
        className="skill-img"
        alt={eachSkill.name}
        src={eachSkill.image_url}
      />
      <p>{eachSkill.name}</p>
    </li>
  )
}

const GetSimilarJob = props => {
  const {eachJob} = props

  return (
    <Link to={`/jobs/${eachJob.id}`} className="jobitem-link-similar">
      <li className="jobitem-con-skill">
        <div className="top-sec-job-item">
          <img
            className="jobitem-logo"
            src={eachJob.company_logo_url}
            alt="similar job company logo"
          />
          <div>
            <h1 className="jobitem-head">{eachJob.title}</h1>
            <div className="jobitem-star-con">
              <IoMdStar className="star-icon" />
              <p className="jobitem-rating">{eachJob.rating}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="jobitem-desc-head">Description</p>
          <p className="jobitem-desc-para">{eachJob.job_description}</p>
        </div>
        <hr className="job-line" />
        <div className="job-item-container-2">
          <div className="jobitem-loc-sl-con">
            <div className="jobitem-job-loc-con">
              <MdLocationOn className="loc-in-icon" />
              <p>{eachJob.location}</p>
            </div>
            <div className="jobitem-job-loc-con">
              <FaShoppingBag className="loc-in-icon" />
              <p>{eachJob.employment_type}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

const apiConstants = {
  initialj: 'INITIALJob',
  successj: 'SUCCESSJob',
  failurej: 'FAILUREJob',
  loadingj: 'LOADINGJob',
}

class JobItemDetailsRoute extends Component {
  state = {
    apiStatus: apiConstants.initial,
    jobItemData: '',
    similarJobs: '',
    lifeAtComapany: '',
  }

  componentDidMount() {
    this.getJobItemData()
  }

  getJobItemData = async () => {
    this.setState({apiStatus: apiConstants.loadingj})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.setState({
        apiStatus: apiConstants.successj,
        jobItemData: data.job_details,
        similarJobs: data.similar_jobs,
        lifeAtComapany: data.job_details.life_at_company,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failurej})
    }
  }

  onClickRetryBtnJobsItem = () => {
    this.getJobItemData()
  }

  renderJobItemLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobItemFailureView = () => (
    <div className="jobs-failue-con">
      <img
        className="failue-img-jobs"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png "
        alt="failure view"
      />
      <h1 className="job-failure-head">Oops! Something Went Wrong</h1>
      <p className="job-failure-para">
        We cannot seem to find the page you are looking for
      </p>
      <button
        onClick={this.onClickRetryBtnJobsItem}
        type="button"
        className="job-failure-btn"
      >
        Retry
      </button>
    </div>
  )

  renderJobItemSuccessView = () => {
    const {jobItemData, similarJobs, lifeAtComapany} = this.state

    const {skills} = jobItemData

    return (
      <>
        <div className="jobs-item-bg">
          <li className="jobitem-con">
            <div className="top-sec-job-item">
              <img
                className="jobitem-logo"
                src={jobItemData.company_logo_url}
                alt="job details company logo"
              />
              <div>
                <h1 className="jobitem-head">{jobItemData.title}</h1>
                <div className="jobitem-star-con">
                  <IoMdStar className="star-icon" />
                  <p className="jobitem-rating">{jobItemData.rating}</p>
                </div>
              </div>
            </div>
            <div className="job-item-container-2">
              <div className="jobitem-loc-sl-con">
                <div className="jobitem-job-loc-con">
                  <MdLocationOn className="loc-in-icon" />
                  <p>{jobItemData.location}</p>
                </div>
                <div className="jobitem-job-loc-con">
                  <FaShoppingBag className="loc-in-icon" />
                  <p>{jobItemData.employment_type}</p>
                </div>
              </div>
              <div>{jobItemData.package_per_annum}</div>
            </div>

            <hr className="job-line" />
            <div>
              <div className="Visit-lik-con">
                <p className="jobitem-desc-head">Description</p>
                <a
                  className="visit-link"
                  href={jobItemData.company_website_url}
                  target="blank"
                >
                  Visit
                  <GoLinkExternal />
                </a>
              </div>
              <p className="jobitem-desc-para">{jobItemData.job_description}</p>
            </div>

            <div>
              <h1 className="skilss-head">Skills</h1>
              <ul className="ul-skill-con">
                {skills.map(eachSkill => (
                  <GetSkill key={eachSkill.name} eachSkill={eachSkill} />
                ))}
              </ul>
            </div>

            <div>
              <h1 className="skilss-head">Life at Company</h1>
              <div className="life-at-com-con">
                <p>{lifeAtComapany.description}</p>
                <img
                  className="life-img"
                  src={lifeAtComapany.image_url}
                  alt="life at company"
                />
              </div>
            </div>
          </li>

          <div>
            <h1 className="skilss-head">Similar Jobs</h1>
            <ul className="ul-skill-con">
              {similarJobs.map(eachJob => (
                <GetSimilarJob key={eachJob.id} eachJob={eachJob} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  rederJobItemData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.loadingj:
        return this.renderJobItemLoadingView()
      case apiConstants.failurej:
        return this.renderJobItemFailureView()
      case apiConstants.successj:
        return this.renderJobItemSuccessView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        {' '}
        <Header />
        <div className="jobs-item-bg">{this.rederJobItemData()}</div>
      </>
    )
  }
}

export default JobItemDetailsRoute
