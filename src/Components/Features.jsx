import './Features.css'
import check from '../assets/feature.png'
import bolt from '../assets/feature-bolt.png'
import face from '../assets/feature-smile.png'
import chart from '../assets/feature-graph.png'
import arrow from '../assets/arrow-right.png'

const Features = () => {
  return (
    <div className='features-container'>
        <div className="feature-title">
            <img src={check} alt="checked circle" />
            <h2>Features that foster growth</h2>
            <p>Atlas is designed with cutting-edge features to enhance the educational experiences of our students.</p>
        </div>
        <div className="features">
            <div className="feature">
                <img src={bolt} className='f-img' alt="bolt icon" />
                <h4>Expert-curated Content</h4>
                <p>Each subject on Atlas has been meticulously structured by educational experts, ensuring that the content is accurate, up-to-date, and highly relevant to your syllabus</p>
                <a href="" className="integration">
                    <p>view integration</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
            </div>
            <div className="feature">
                <img src={chart} className='f-img' alt="" />
                <h4>Real-Time Analytics</h4>
                <p>Our real-time analytics allow you to monitor your progress with the precision, helping you identify strengths and areas where additional focus is needed</p>
                <a href="" className="integration">
                    <p>view integration</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
            </div>
            <div className="feature">
                <img src={face}  className='f-img' alt="smile face icon" />
                <h4>Quiz Mastery</h4>
                <p>Through our comprehensive quiz system, Atlas challenges our knowledge and cements concepts, propelling you towards master of complex subjects.</p>
                <a href="" className="integration">
                    <p>view integration</p>
                    <img src={arrow} alt="arrow icon" />
                </a>
            </div>
        </div>      
    </div>
  )
}

export default Features
