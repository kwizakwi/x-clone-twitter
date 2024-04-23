import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import { TweetContext } from "./contexts/tweets";
import json from "./data/initial-data.json";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

function App() {
  const { data:tweets} = useFetch('http://localhost:3000/tweets')
const {data:user} = useFetch('http://localhost:3000/current-user')
// const [datatweets,setDatatweets]=useState(tweets)
// useEffect(()=>{ setDatatweets(datatweets)},[datatweets])
// console.log(setDatatweets)
console.log(tweets);
console.log(user);
  return (
    <>
      <TweetContext.Provider value={{tweets,user}}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="timeline">
          <Outlet />
        </div>
        <div className="trends">
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  );
}

export default App;
