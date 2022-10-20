import React from "react";
import postsArray from './posts.js';
import PostSummaryItem from "./post-summary-item.js";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;

