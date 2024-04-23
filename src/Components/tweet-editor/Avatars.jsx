import { useContext } from "react";
import { Link } from "react-router-dom";
import { TweetContext } from "../../contexts/tweets";

export default function Avatars() {
  const {user}= useContext(TweetContext)
  // console.log(user);
  
  return (user&&
    <Link to={`/${user.userName}`} className="avatar">
      <img src={user.src} alt="Profil d'utilisateur" />
    </Link>
  );
}
