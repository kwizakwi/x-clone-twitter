import { Link } from "react-router-dom"
import Tweeter from "../../../public/iconblanc/Twitter.svg"
import HomeFill from "../../../public/iconblanc/Home-Fill.svg"
import Explore from "../../../public/iconblanc/Explore.svg"
import Notifications from "../../../public/iconblanc/Notifications.svg"
import Message from "../../../public/iconblanc/Messages.svg"
import Bookmarks from "../../../public/iconblanc/Bookmarks.svg"
import Lists from "../../../public/iconblanc/Lists.svg"
import Profile from "../../../public/iconblanc/Profile.svg"
import More from "../../../public/iconblanc/More.svg"
import Private from "../../../public/iconblanc/Private.svg"
import ProfilePhoto from "../../../public//iconblanc/Profile-Photo.svg"

import "./sidebar.css"


export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">

                <Link to="">
                    <img src={Tweeter} alt="" />
                </Link>
                <Link to="">
                    <div className="side-nav">
                        <img src={HomeFill} alt="" />
                        <h1 className="page-title-sidebare">Home</h1>
                    </div>
                </Link>



                <Link to="">
                    <div className="side-nav">
                        <img src={Explore} alt="" />
                        <h1 className="page-title-sidebare">Explore</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Notifications} alt="" />
                        <h1 className="page-title-sidebare">Notifications</h1>
                    </div>
                </Link>



                <Link to="">
                    <div className="side-nav">
                        <img src={Message} alt="" />
                        <h1 className="page-title-sidebare">Messages</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Bookmarks} alt="" />
                        <h1 className="page-title-sidebare">Bookmarks</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Lists} alt="" />
                        <h1 className="page-title-sidebare">Lists</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Profile} alt="" />
                        <h1 className="page-title-sidebare">Profile</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={More} alt="" />
                        <h1 className="page-title-sidebare">More</h1>
                    </div>
                </Link>

                <button style={{ width: "90%" }} className="button">Tweet</button>
            </div>
            <div className="user-footer">
                <img src={ProfilePhoto} alt="" />
                <div className="contenu-footer">
                    Bradley Ortiz <span><img src={Private} alt="" /></span>
                    <p>@Bradley_</p>
                </div>
            </div>

        </div>
    )
}
