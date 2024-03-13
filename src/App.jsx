import './App.css'
import Header from './Components/Header'
import TweetEditor from './Components/Tweet-Editor'
import Tweets from './Components/Tweets'
import SideBar from './Components/sidebar/sidebar'

function App() {
  return (
    <>
      <div>
        
      <SideBar/>

      </div>
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div>Trend</div>
    </>
  )
}

export default App