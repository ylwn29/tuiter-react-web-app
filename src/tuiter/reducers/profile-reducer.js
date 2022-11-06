import {createSlice} from "@reduxjs/toolkit";

const profile = {
    "firstName": "Yulun",
    "lastName": "Wang",
    "handle": "@yulunwang",
    "profilePicture": "woman.png",
    "bannerPicture": "profileBanner.png",
    "bio": "MSCS Align student at Northeastern University. Web development and algorithm enthusiast. Love coffee and dogs.",
    "website": "youtube.com/webdevtv",
    "location": "San Jose, CA",
    "dateOfBirth": "7/7/1996",
    "dateJoined": "4/2010",
    "followingCount": 234,
    "followersCount": 521,
    "tweetsCount": 532
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return state = action.payload;
        }
    }
})
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;