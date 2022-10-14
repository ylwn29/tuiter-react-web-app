

const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">        
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src="${who.avatarIcon}" height="50px">
                </div>
                <div class="pe-0 col-7">
                    <div class="fw-bolder">${who.userName}<i class="ps-1 fas fa-check-circle"></i></div>
                    <div class="text-secondary">@${who.handle}</div>
                </div>
                <div class="ps-0 pe-1 col-3 d-flex align-items-center">
                    <button class="w-100 btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
        
    `)
}
export default WhoToFollowListItem;