import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
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
            "disliked": false
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="wd-post">
            <div>
                <img className="wd-avatar" src={`/images/${tuit.image}`} alt=""/>
            </div>

            <div className="wd-main-post w-100">
                <div className="wd-post-c">
                    <p><b>{tuit.username}</b><i className="ps-1 fas fa-check-circle text-primary"></i><span> {tuit.handle} · {tuit.time}</span></p>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>

                <div className="wd-post-d">
                    <p className="wd-p-title">{tuit.tuit}</p>
                </div>

                <TuitStats tuit={tuit}/>
            </div>
        </div>
    );
};
export default TuitItem;

