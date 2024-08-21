import {Link} from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import {MdLocationOn} from 'react-icons/md'
import {FaShoppingBag} from 'react-icons/fa'
import './index.css'

const JobItem = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    title,
    rating,
    id,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="jobitem-link">
      <li className="jobitem-con">
        <div className="top-sec-job-item">
          <img
            className="jobitem-logo"
            src={companyLogoUrl}
            alt="job details company logo"
          />
          <div>
            <h1 className="jobitem-head">{title}</h1>
            <div className="jobitem-star-con">
              <IoMdStar className="star-icon" />
              <p className="jobitem-rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="job-item-container-2">
          <div className="jobitem-loc-sl-con">
            <div className="jobitem-job-loc-con">
              <MdLocationOn className="loc-in-icon" />
              <p>{location}</p>
            </div>
            <div className="jobitem-job-loc-con">
              <FaShoppingBag className="loc-in-icon" />
              <p>{employmentType}</p>
            </div>
          </div>
          <div>{packagePerAnnum}</div>
        </div>

        <hr className="job-line" />
        <div>
          <h1 className="jobitem-desc-head">Description</h1>
          <p className="jobitem-desc-para">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobItem
