import React, {useEffect} from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {posts, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [dispatch])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                posts && //Fix "cannot read properties of undefined (reading map)" Uncaught TypeError
                posts.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

// const PostSummaryList = () => {
//     const postsArray = useSelector(state => state.tuits)
//
//     return(
//         <ul className="list-group">
//             {
//                 postsArray &&
//                 postsArray.map(post =>
//                     <PostSummaryItem
//                         key={post._id} post={post}/> )
//             }
//         </ul>
//     );
// };
export default PostSummaryList;

