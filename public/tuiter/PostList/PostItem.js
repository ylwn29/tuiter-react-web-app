const PostItem = (post) => {
    // change the color of partial text
    let glance = post.glance;
    let newGlance = glance;
    if (post.markText) {
        newGlance = glance.replace(post.markText, '<span class="text-primary">' + post.markText + '</span>');
    }

    // hide the empty space when there is no post and make image rounded corner
    let postImageClass = "rounded-4";
    let postBodyClass = "d-none";
    if (post.title || post.text) {
        postImageClass = "wd-rounded-top";
        postBodyClass = "";
    }


    return (`
        <div class="wd-post">
            <!--B-->
            <div>
                <img class="wd-avatar" src="${post.avatar}">
            </div>
        
            <div class="wd-main-post">
                <!--C-->
                <div class="wd-post-c">
                    <p><b>${post.userName}</b><i class="ps-1 fas fa-check-circle"></i><span> @${post.handle} · ${post.time}</span></p>
                    <div class="wd-3-dots">&#8943;</div>        
                </div>
                <!--D-->
                <div class="wd-post-d">
                    <p>${newGlance}</p>
                </div>
                <div>
                    <!--E-->
                    <div>
                        <img class="wd-bookmarks-img ${postImageClass}" src="${post.image}">
                    </div>
                    <!--F-->
                    <div class="wd-post-f ${postBodyClass}">
                        <p class="wd-p-title">${post.title}</p>
                        <p class="wd-p-text">${post.text}</p>
                        <p class="wd-p-text">${post.link}</p>
                    </div>
                </div>
                <!--G-->
                <div class="wd-post-g">
                    <a class="wd-icon-num-pair" href="#">
                        <div class="wd-icon"><i class="fas fa-comment"></i></div>
                        <div>${post.commentNumber}</div>
                    </a>
                    <a class="wd-icon-num-pair" href="#">
                        <div class="wd-icon"><i class="fas fa-retweet"></i></div>
                        <div>${post.tweetNumber}</div>
                    </a>
                    <a class="wd-icon-num-pair wd-icon-selected" href="#">
                        <div class="wd-icon"><i class="far fa-heart"></i></div>
                        <div>${post.likeNumber}</div>
                    </a>
                    <a class="wd-icon-num-pair" href="#">
                        <div class="wd-icon"><i class="far fa-share-square"></i></div>
                    </a>
                </div>
            </div>
        </div>
    `)
}
export default PostItem;