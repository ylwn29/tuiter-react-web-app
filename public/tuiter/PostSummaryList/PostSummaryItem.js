const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName}<i class="ps-1 fas fa-check-circle"></i><span style="font-weight:400" class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-3">
                    <img class="align-middle rounded float-end" src="${post.image}" height="100px">
                </div>
            </div>
        </li>
        
    `)
}
export default PostSummaryItem;