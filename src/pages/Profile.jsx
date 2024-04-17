import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TweetContext } from "../contexts/tweets";
import profil from "/Avatars/Profile-Photo.png";
import Tweet from "../Components/tweets/Tweet";

export default function Profile() {
  const { userName } = useParams();
  
  const tweet = useContext(TweetContext);
  return (
    <div>
      <h1 className="my-[10vh] mx-auto text-center text-6xl">Profil</h1>
      <img src={profil} alt="" />
      {/* <h1 className=>
        Profil de @{userName}
      </h1> */}
      
      {tweet.tweets
        .filter((e) => e.user.userName == userName)
        .map((el, i) => (
          <Tweet key={i} data={el} />
        ))}
    </div>
  );
}
