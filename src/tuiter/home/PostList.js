import React from "react";
import posts from "./posts.js"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostItem
                    post={post}
                    key={post.id}/>
                )
            }
        </ul>
    )
}
export default PostList;