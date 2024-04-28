import './Page.css'
import education from '../assets/education.png'
import User from '../assets/User-reviews.png'
import stars from '../assets/Stars.png'
import dots from '../assets/dots.png'

const Page = () => {
  return (
    <>
      <div className="entire">
        <div className="welcome">
            <div className="purpose">
                <div className="message">
                    <h1>Empower your education</h1>
                    <p>
                      Atlas offers a dynamic eLearning experience tailored for advanced level secondary school students in Cameroon, enhancing knowledge with technology
                    </p>
                    <form action="" className='form'>
                      <div className="in">
                        <input type="email" placeholder='Join waitlist' />
                        <button>Get Started</button>
                      </div>
                      <label>Be the first to know when we launch</label>
                    </form>
                    <img src={User} alt="" />
                </div>
                <img src={education} alt="small boy studying image" />
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
            <img src={education} alt="supervisor image here" />
            <div className='info'>
              <h3>Bill Agha</h3>
              <p>Supervisor, Atlas</p>
              <img src={stars} alt="stars" />
            </div>
            <img src={dots} alt="dots" className='dots'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
