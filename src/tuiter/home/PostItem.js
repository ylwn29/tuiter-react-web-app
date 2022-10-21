import React from "react";

const PostItem = (
    {
        post = {
            id: 1,
            avatar: 'NASA.png',
            userName: 'Elon Musk',
            handle: 'elonmusk',
            time: '23h',
            glance: 'Amazing show about @Inspiration4x mission!',
            // glance: 'Amazing show about <span style="color: #0b5ed7">@Inspiration4x</span> mission!',
            markText: '@Inspiration4x',
            image: 'astro.png',
            title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            text: 'From training to launch to landing, this all-access docuseries rides along with ' +
                'the Inspiration4 crew on the first all-civilian orbital space...',
            link: 'netflix.com',
            commentNumber: '4.2K',
            tweetNumber: '3.5K',
            likeNumber: '37.5K',
        }
    }

) => {
    // change the color of partial text
    let glances = post.glance;
    let newGlance = glances;
    if (post.markText) {
        newGlance = glances.replace(post.markText, '<span style={{color: #0b5ed7}}>' + post.markText + '</span>');
    }

    // hide the empty space when there is no post and make image rounded corner
    let postImageClass = "rounded-4";
    let postBodyClass = "d-none";
    if (post.title || post.text) {
        postImageClass = "wd-rounded-top";
        postBodyClass = "";
    }

    // const markKeyword = (glance, markText) => {
    //     return (
    //         glance.replace(markText, '<span class="text-primary">' + markText + '</span>')
    //     )
    // }

    return (
        <div className="wd-post">

            <div>
                <img className="wd-avatar" src={`/images/${post.avatar}`} alt=""/>
            </div>
        
            <div className="wd-main-post">
                <div className="wd-post-c">
                    <p><b>{post.userName}</b><i className="ps-1 fas fa-check-circle"></i><span> @{post.handle} · ${post.time}</span></p>
                    <div className="wd-3-dots">&#8943;</div>
                </div>

                <div className="wd-post-d">
                    <p dangerouslySetInnerHTML={{__html: newGlance}}></p>
                </div>
                <div>

                    <div>
                        <img className={`wd-bookmarks-img ${postImageClass}`} src={`/images/${post.image}`} alt=""/>
                    </div>

                    <div className={postBodyClass}>
                        <p className="wd-p-title">{post.title}</p>
                        <p className="wd-p-text">{post.text}</p>
                        <p className="wd-p-text">{post.link}</p>
                    </div>
                </div>

                <div className="wd-post-g">
                    <div className="wd-icon-num-pair">
                        <div className="wd-icon"><i className="fas fa-comment"></i></div>
                        <div>{post.commentNumber}</div>
                    </div>
                    <div className="wd-icon-num-pair">
                        <div className="wd-icon"><i className="fas fa-retweet"></i></div>
                        <div>{post.tweetNumber}</div>
                    </div>
                    <div className="wd-icon-num-pair wd-icon-selected">
                        <div className="wd-icon"><i className="far fa-heart"></i></div>
                        <div>{post.likeNumber}</div>
                    </div>
                    <div className="wd-icon-num-pair">
                        <div className="wd-icon"><i className="far fa-share-square"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;