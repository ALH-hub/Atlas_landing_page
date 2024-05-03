import Navigation from './Components/Navigation'
import Page from './Components/Page'
import './App.css'
import Action from './Components/Action'
import Faq from './Components/Faq'

const App = () => {
  return (
    <>
      <Navigation />
      <Page />
      <Action />
      <Faq />
      <footer className="footer-container">
        <h3>ATLAS</h3>
        <p>&copy; 2024 ATLAS. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
