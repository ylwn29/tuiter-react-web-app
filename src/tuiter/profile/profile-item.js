import React from "react";

const ProfileItem = (
    {
        profile = {
            firstName: 'Jose',
            lastName: 'Annunziato',
            handle: '@jannunzi',
            profilePicture: 'jose.png',
            bannerPicture: 'jose.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',
            dateOfBirth: '7/7/1968',
            dateJoined: '4/2009',
            followingCount: 340,
            followersCount: 223
        }
    }
) => {
    return(
        <div>
            <div className="flex-container">
                <div className="ps-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="ps-4">
                    <h4 className="mb-0">{profile.firstName} {profile.lastName}</h4>
                    <div>6,114 tweets</div>
                </div>
            </div>

            <div>
                <img src="../images/astro.png" width={550} alt=""/>
            </div>



        </div>
    )
}
export default ProfileItem;