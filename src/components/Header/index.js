import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoMdHome} from 'react-icons/io'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ul className="header-container">
      <Link to="/">
        <li>
          <img
            className="header-logo"
            alt="website logos"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          />
        </li>
      </Link>
      <div className="hl">
        <li>
          <Link className="header-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="header-links" to="/jobs">
            Jobs
          </Link>
        </li>

        <div className="header-iconCon">
          <li>
            <Link className="header-icons" to="/">
              <IoMdHome />
            </Link>
          </li>
          <li>
            <Link className="header-icons" to="/jobs">
              <BsBriefcaseFill />
            </Link>
          </li>
        </div>
      </div>
      <div>
        <button
          onClick={onClickLogout}
          type="button"
          className="LogoutRoute-btn"
        >
          Logout
        </button>
        <button onClick={onClickLogout} type="button" className="logout-icon">
          <FiLogOut /> LogOut
        </button>
      </div>
    </ul>
  )
}

export default withRouter(Header)
