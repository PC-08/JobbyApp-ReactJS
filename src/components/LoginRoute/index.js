import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginRoute extends Component {
  state = {userUserName: '', userPassword: '', iserror: false, errorMsg: ''}

  onUserNameChange = event => {
    this.setState({userUserName: event.target.value})
  }

  onUserPassChange = event => {
    this.setState({userPassword: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({iserror: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {userUserName, userPassword} = this.state
    const userDetails = {username: userUserName, password: userPassword}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userUserName, userPassword, iserror, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="LoginRoute-bg">
        <div className="LoginRoute-card">
          <div className="LoginRoute-img-con">
            <img
              alt="website logos"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            />
          </div>
          <form className="LoginRoute-form">
            <div className="LoginRoute-input-con">
              <label className="LoginRoute-label" htmlFor="userName">
                USERNAME
              </label>
              <input
                value={userUserName}
                onChange={this.onUserNameChange}
                className="LoginRoute-input"
                id="userName"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="LoginRoute-input-con">
              <label className="LoginRoute-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                value={userPassword}
                onChange={this.onUserPassChange}
                className="LoginRoute-input"
                id="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="LoginRoute-btn-con">
              <button
                onClick={this.onClickLogin}
                className="LoginRoute-btn"
                type="submit"
              >
                Login
              </button>
              {iserror && <p className="error-message">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
