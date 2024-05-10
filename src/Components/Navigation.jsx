import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="page-icon">
            <h1>ATLAS</h1>
        </div>
        <ul className="nav-links">
            <li><a href="#purpose">Home</a></li>
            <li><a href="#lms-info">LMS</a></li>
        </ul>
        <div className="auth">
            <button className='li'>Login</button>
            <button className='su'>Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
