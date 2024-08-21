import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const HomeRoute = () => (
  <div className="home-contaner">
    <Header />
    <div className="home-info-con">
      <h1 className="home-head">Find The Job That Fits Your Life</h1>
      <p className="home-para">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button className="home-find-btn " type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default HomeRoute
