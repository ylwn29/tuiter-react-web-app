import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <div className="list-group-item"><i className="fab fa-twitter"></i></div>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-home"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Home</div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-hashtag"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Explore</div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>

            <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-bell"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Notifications</div>
                </div>
            </div>
            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-envelope"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Messages</div>
                </div>
            </div>
            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-bookmark"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Bookmarks</div>
                </div>
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-list"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2"> Lists</div>
                </div>
            </div>
            <div className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-user"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">Profile</div>
                </div>
            </div>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
                    <div className="d-none d-xl-block col-10 ps-2">More</div>
                </div>
            </div>

            <div className="pe-xl-3">
                <button className="ps-lg-0 pe-lg-0 btn btn-primary w-100 mt-2 rounded-pill">Tweet
                </button>
            </div>
        </div>
    );
};
export default NavigationSidebar;
