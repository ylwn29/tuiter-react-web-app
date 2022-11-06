import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import "./index.css";

const EditProfileComponent = () => {
    const currentProfile = useSelector((state) => state.profile)

    const [profile, setProfile] = useState(currentProfile)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)

    const editFirstName = (e) => {
        const newFirstName = e.target.value;
        setFirstName(newFirstName);
        const newProfile = {
            ...profile,
            firstName: newFirstName
        }
        setProfile(newProfile)
    }

    const editLastName = (e) => {
        const newLastName = e.target.value;
        setLastName(newLastName);
        const newProfile = {
            ...profile,
            lastName: newLastName
        }
        setProfile(newProfile)
    }

    const editBio = (e) => {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    const editLocation = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    const editWebSite = (e) => {
        const newWebsite = e.target.value;
        setWebsite(newWebsite)
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile)
    }

    const editDateOfBirth = (e) => {
        const newDateOfBirth = e.target.value;
        setDateOfBirth(newDateOfBirth)
        const newProfile = {
            ...profile,
            dateOfBirth: newDateOfBirth
        }
        setProfile(newProfile)
    }

    const dispatch = useDispatch();
    const editProfileHandler = (e) => {
        dispatch(updateProfile({
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }))
    }

    return(
        <div>
            <div className="flex-container mt-2">
                <Link to="/tuiter/profile">
                    <button className="bg-white border-0 ps-2">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </Link>
                <div className="ps-4">
                    <h4 className="mb-0">Edit profile</h4>
                </div>
            </div>

            <Link to="/tuiter/profile">
                <button onClick={(e) => {editProfileHandler(e)}}
                        className="wd-save-btn float-end rounded-pill btn ps-3 pe-3 fw-bold">Save</button>
            </Link>

            <div>
                <img src={`../images/${profile.bannerPicture}`} width={550} alt=""/>
            </div>

            <div className="avatar-div">
                <img width={150}
                     className="rounded-circle"
                     src={`../images/${profile.profilePicture}`} alt=""/>
            </div>

            <div className="mt-3">
                <label>First Name</label>
                <input onChange={editFirstName}
                       value={profile.firstName} className="form-control"/>
            </div>

            <div className="mt-3">
                <label>Last Name</label>
                <input onChange={editLastName}
                       value={profile.lastName} className="form-control"/>
            </div>

            <div className="mt-3">
                <label>Bio</label>
                <textarea onChange={editBio}
                          value={profile.bio} className="form-control"/>
            </div>

            <div className="mt-3">
                <label>Location</label>
                <input onChange={editLocation}
                       value={profile.location} className="form-control"/>
            </div>

            <div className="mt-3">
                <label>Website</label>
                <input onChange={editWebSite}
                       value={profile.website} className="form-control"/>
            </div>

            <div className="mt-3">
                <div>Birth date <button className="text-primary bg-white border-0">Edit</button></div>
                <input onChange={editDateOfBirth} type="date"
                    value={profile.dateOfBirth} className="border-0"/>
            </div>

            <div className="mt-5 mb-5">
                <span>Switch to professional</span>
                <i className="bi bi-arrow-right float-end"></i>
            </div>

        </div>
    )
}
export default EditProfileComponent;