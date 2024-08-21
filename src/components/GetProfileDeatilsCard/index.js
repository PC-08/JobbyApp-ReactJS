import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class GetProfileDeatilsCard extends Component {
  state = {apiStatus: apiConstants.initial, profileData: ''}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const formattedProfileDetails = {
      name: data.profile_details.name,
      profileImageUrl: data.profile_details.profile_image_url,
      bio: data.profile_details.short_bio,
    }

    if (response.ok === true) {
      this.setState({
        apiStatus: apiConstants.success,
        profileData: formattedProfileDetails,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getProfileDetails()
  }

  renderProfileLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileFailureView = () => (
    <div className="profile-failure-con">
      <button
        onClick={this.onClickRetryBtn}
        type="button"
        className="profile-failure-btn"
      >
        Retry
      </button>
    </div>
  )

  renderProfileSuccessView = () => {
    const {profileData} = this.state
    const {name, profileImageUrl, bio} = profileData

    return (
      <div className="profile-card">
        <img className="profile-card-img" alt="profile" src={profileImageUrl} />
        <h1 className="profile-card-head">{name}</h1>
        <p className="profile-card-para">{bio}</p>
      </div>
    )
  }

  rederProfileData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderProfileLoadingView()
      case apiConstants.failure:
        return this.renderProfileFailureView()
      case apiConstants.success:
        return this.renderProfileSuccessView()

      default:
        return null
    }
  }

  render() {
    return <div>{this.rederProfileData()}</div>
  }
}

export default GetProfileDeatilsCard
