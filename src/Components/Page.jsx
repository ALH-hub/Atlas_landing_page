import './Page.css'
import education from '../assets/education.png'
import User from '../assets/User-reviews.png'
import stars from '../assets/Stars.png'
import dots from '../assets/dots.png'
import bolt from '../assets/process-bolt.png'
import star from '../assets/process-star.png'
import cloud from '../assets/process-cloud.png'
import LmsInfo from './LmsInfo.jsx'
import Features from './Features.jsx'
import user from '../assets/user-solid.svg'

const Page = () => {
  return (
    <>
      <div className="entire">
        <div className="welcome">
            <div id="purpose">
                <div className="message">
                    <h1>Empower your education</h1>
                    <p>
                      Atlas offers a dynamic eLearning experience tailored for advanced level secondary school students in Cameroon, enhancing knowledge with technology
                    </p>
                    <form action="" className='form'>
                      <div className="in">
                        <input type="email" placeholder='Join waitlist' />
                        <label>Be the first to know when we launch</label>
                      </div>
                      <button>Get Started</button>
                    </form>
                    <img src={User} alt="" id='user-review'/>
                </div>
                <img src={education} alt="small boy studying image" id='boy-img'/>
            </div>
            <div className="experts">
              <h3>Trusted by educational experts</h3>
              <div className="logos">
                <div className="logo"></div>
                <div className="logo"></div>
                <div className="logo"></div>
                <div className="logo"></div>
                <div className="logo"></div>
              </div>
            </div>
        </div>
        <div className="aim">
          <h3>Atlas revolutionized the way we approach education, with its interactive platform making learning not just accessible but truly engaging.</h3>
          <div className='profile'>
            <img src={user} alt="supervisor image here" />
            <div className='info'>
              <h3>Bill Agha</h3>
              <p>Supervisor, Atlas</p>
              <img src={stars} alt="stars" />
            </div>
            <img src={dots} alt="dots" className='dots'/>
          </div>
        </div>
        <div className="procedure">
          <div className="procedure-head">
            <div className="proc-title">
              <h2>How ATLAS enhances learning</h2>
              <p>Our learning platform is engineered to provide a seamless education journey through four intruitive steps:</p>
            </div>
            <button>Get Started</button>
          </div>
          <div className="steps">
            <div className="step">
              <img src={bolt} alt="bolt icon" />
              <h4>Register & Personalize</h4>
              <p>sign up effortlessly and personalize your learning experience.</p>
            </div>
            <div className="step">
              <img src={cloud} alt="cloud icon" />
              <h4>Discover Resources</h4>
              <p>Get access to an extenssive library of notes and video tutorials.</p>
            </div>
            <div className="step">
              <img src={bolt} alt="bolt icon" />
              <h4>Test your Knowledge</h4>
              <p>Apply what you have learned by taking interractive quizzes</p>
            </div>
            <div className="step">
              <img src={star} alt="" />
              <h4>Achieve Excellence</h4>
              <p>with consistence practice and dedicated support, mastery of subjects become attainable.</p>
            </div>
          </div>
        </div>
        <LmsInfo />
        <Features />
      </div>
    </>
  )
}

export default Page
