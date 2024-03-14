import './App.css'
import Header from './Components/Header'
import TweetEditor from './Components/Tweet-Editor'
import Tweets from './Components/Tweets'
import SideBar from './Components/sidebar/sidebar'
import Trends from './Components/trends/trends'


function App() {
  return (
    <>
      <SideBar/>
      
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      
      <Trends/>

      
    </>
  )
}

export default App