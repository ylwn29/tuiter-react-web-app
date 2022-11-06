import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile = useSelector((state) => state.profile);

    return(
        <div className="ps-2">
            <div className="flex-container">
                <div className="ps-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="ps-4">
                    <h4 className="mb-0">{profile.firstName} {profile.lastName}</h4>
                    <div className="text-secondary">{profile.tweetsCount} tweets</div>
                </div>
            </div>

            <div>
                <img src={`../images/${profile.bannerPicture}`} width={550} alt=""/>
            </div>

            <div className="avatar-div">
                <img width={150}
                     className="rounded-circle"
                     src={`../images/${profile.profilePicture}`} alt=""/>
                <Link to="/tuiter/edit-profile">
                    <button
                        className="edit-profile-btn mt-5 rounded-pill btn btn-light border-secondary float-end mt-2 ps-3 pe-3 fw-bold">Edit profile
                    </button>
                </Link>

            </div>

            <div>
                <h4 className="mb-0">{profile.firstName} {profile.lastName}</h4>
                <div className="text-secondary">{profile.handle}</div>
                <div className="text-secondary">Website: {profile.website}</div>
            </div>

            <div className="mt-3">
                {profile.bio}
            </div>

            <div className="mt-3 text-secondary">
                <i className="bi bi-geo-alt"></i>
                <span className="pe-3 ps-2">{profile.location}</span>
                <i className="bi bi-balloon"></i>
                <span className="pe-3 ps-2">Born: {profile.dateOfBirth}</span>
                <i className="bi bi-calendar3"></i>
                <span className="pe-3 ps-2">Joined {profile.dateJoined}</span>
            </div>

            <div className="mt-3">
                <span className="pe-3">{profile.followingCount} <span className="text-secondary">Following</span></span>
                <span>{profile.followersCount} <span className="text-secondary">Followed</span></span>
            </div>

        </div>
    )
}
export default ProfileItem;