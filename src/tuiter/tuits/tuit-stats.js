import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "dislikes": 123,
            "disliked": false,
            // "turnred": false
        }
    }
) => {
    const dispatch = useDispatch();

    return(
        <div className="wd-post-g">
            <div className="wd-icon-num-pair">
                <div className="wd-icon"><i className="fas fa-comment"></i></div>
                <div>{tuit.replies}</div>
            </div>

            <div className="wd-icon-num-pair">
                <div className="wd-icon"><i className="fas fa-retweet"></i></div>
                <div>{tuit.retuits}</div>
            </div>

            <div className="wd-icon-num-pair wd-icon-selected">
                {/*{tuit.liked && <div className="wd-icon text-danger"><i className="bi bi-heart-fill"></i></div>}*/}
                {/*{!tuit.liked && <div className="wd-icon"><i className="bi bi-heart-fill"></i></div>}*/}

                {tuit.liked && <div className="wd-icon text-danger"><i className="bi bi-heart-fill"></i></div>}
                {!tuit.liked &&
                    <div>
                        <i onClick={() => {
                            dispatch(updateTuitThunk({
                                ...tuit,
                                likes: tuit.likes + 1,
                            }));
                        }} className="bi bi-heart-fill me-2"
                        onChange={(tuit) => {tuit.liked = true}}></i>
                    </div>
                }
                {tuit.likes}
            </div>

            <div className="wd-icon-num-pair wd-icon-selected">
                {tuit.disliked && <div className="wd-icon text-danger"><i className="bi bi-hand-thumbs-down-fill"></i></div>}
                {!tuit.disliked &&
                    <div>
                        <i onClick={() => {
                            dispatch(updateTuitThunk({
                                ...tuit,
                                dislikes: tuit.dislikes + 1
                            }));
                        }} className="bi bi-hand-thumbs-down-fill me-2"
                           onChange={(tuit) => {tuit.disliked = true}}></i>
                    </div>
                }
                {tuit.dislikes}
            </div>

            <div className="wd-icon-num-pair">
                <div className="wd-icon"><i className="far fa-share-square"></i></div>
            </div>
        </div>
    )
}
export default TuitStats;