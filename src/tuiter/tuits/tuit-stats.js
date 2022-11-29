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
        }
    }
) => {
    const dispatch = useDispatch();

    const clickLikeHeartHandler = () => {
        const updateLike = {
            ...tuit,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
        };
        dispatch(updateTuitThunk(updateLike))
    }

    const clickDislikeHeartHandler = () => {
        const updateDislike = {
            ...tuit,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked
        }
        dispatch(updateTuitThunk(updateDislike))
    }

    return(
        <div className="row justify-content-evenly">
            <button className="text-secondary border-0 bg-transparent text-start col">
                <i className="bi bi-chat pe-1 pe-sm-2"></i>
                <span>{tuit.replies}</span>
            </button>

            <button className="text-secondary border-0 bg-transparent text-start col">
                <i className="bi bi-arrow-repeat pe-1 pe-sm-2"></i>
                <span>{tuit.retuits}</span>
            </button>

            <button className="text-secondary border-0 bg-transparent text-start col" onClick={clickLikeHeartHandler}>
                {tuit.liked && <i className="bi bi-heart-fill text-danger pe-1 pe-sm-2"></i>}
                {!tuit.liked && <i className="bi bi-heart pe-1 pe-sm-2"></i>}

                {/*{!tuit.liked &&*/}
                {/*    <div>*/}
                {/*        <i onClick={() => {*/}
                {/*            dispatch(updateTuitThunk({*/}
                {/*                ...tuit,*/}
                {/*                likes: tuit.likes + 1,*/}
                {/*            }));*/}
                {/*        }} className="bi bi-heart-fill me-2"*/}
                {/*        onChange={(tuit) => {tuit.liked = true}}></i>*/}
                {/*    </div>*/}
                {/*}*/}
                {tuit.likes}
            </button>

            <button className="text-secondary border-0 bg-transparent text-start col" onClick={clickDislikeHeartHandler}>
                {tuit.disliked && <i className="bi bi-hand-thumbs-down-fill pe-1 pe-sm-2"></i>}
                {!tuit.disliked && <i className="bi bi-hand-thumbs-down pe-1 pe-sm-2"></i>}

                {/*{!tuit.disliked &&*/}
                {/*    <div>*/}
                {/*        <i onClick={() => {*/}
                {/*            dispatch(updateTuitThunk({*/}
                {/*                ...tuit,*/}
                {/*                dislikes: tuit.dislikes + 1*/}
                {/*            }));*/}
                {/*        }} className="bi bi-hand-thumbs-down-fill me-2"*/}
                {/*           onChange={(tuit) => {tuit.disliked = true}}></i>*/}
                {/*    </div>*/}
                {/*}*/}
                {tuit.dislikes}
            </button>

            <button className=" text-secondary border-0 bg-transparent text-start col">
                <i className="far fa-share-square pe-1 pe-sm-2"></i>
            </button>
        </div>
    )
}
export default TuitStats;