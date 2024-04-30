import './LmsInfo.css'
import Container from '../assets/Container.png'

const LmsInfo = () => {
  return (
    <div className='lms-info'>
      <h5>The ATLAS LMS</h5>
      <div className="info-container">
        <div className="lms-purpose">
            <p>We leverage the the power of our Advanced Learining Management System to delever the resources you need to Excel.</p>
            <button>Get Started</button>
        </div>
        <img src={Container} alt="" />
      </div>
    </div>
  )
}

export default LmsInfo
