import "./trends.css"
import search from "/iconblanc/Search.svg"
import Settings from "/iconblanc/Settings.svg"
import More from "/iconblanc/More-2.svg"
import Profile6 from '/Tweet-Avatar/Profile-Photo6.png'
import Verified from "/iconblanc/Verified.svg";
import posts from "./data"
import Twitterfooter from "../../../public/Twitter-Footer.png"

const trendsPosts = posts.map((el, i) => {
    return {
        id: i,
        name: el.user.name,
        userName: el.user.userName,
        src: el.user.src,
    }
}).filter(el => el.id <= 2);

// console.log(trendsPosts)

function Posts({ name, userName, src }) {
    return (
        <>
            <h1>{userName}</h1>
            <h1>{name}</h1>
            <img src={src} alt="" />
        </>
    )
}


export default function Trends() {
    return (
        <div className="trends">
            <div className="search-twitter">
                <img src={search} alt="" />
                <input type="text" placeholder="Search Twitter" />

            </div>
            <div className="trends-for-you">
                <div className="trends-title">
                    <h3>Trends for you</h3>
                    <img src={Settings} alt="" />
                </div><div className="squid">
                    <div className="squid-content">
                        <p>Trending in Turkey</p>
                        <h3>#SQUID</h3>
                        <p>2,066 Tweets</p>
                    </div>
                    <img src={More} alt="" />
                </div>
                <div className="squid">
                    <div className="squid-content">
                        <p>Trending in Turkey</p>
                        <h3>#SQUID</h3>
                        <p>2,066 Tweets</p>
                    </div>
                    <img src={More} alt="" />
                </div>
                <div className="squid">
                    <div className="squid-content">
                        <p>Trending in Turkey</p>
                        <h3>#SQUID</h3>
                        <p>2,066 Tweets</p>
                    </div>
                    <img src={More} alt="" />
                </div>
                <div className="squid">
                    <div className="squid-content">
                        <p>Trending in Turkey</p>
                        <h3>#SQUID</h3>
                        <p>2,066 Tweets</p>
                    </div>
                    <img src={More} alt="" />
                </div>
                <div className="show-more">
                    <h3>Show more</h3>
                </div>
            </div>
            <div className="follow">
                <div className="follow-title">
                    <p>Who to follow</p>
                </div>
                <div className="follow-content">
                    {
                        trendsPosts.map(item => {
                            return <Posts
                                name={item.name}
                                userName={item.userName}
                                src={item.src}

                            />
                        })
                    }
                </div>
            </div>
            <div className='info-content'>
                <p className='info'>Terms of Service Privacy Policy Cookie Policy Imprint Ads info More ... ©2021 Twitter, Inc.</p>
            </div>
        </div>
    )
}