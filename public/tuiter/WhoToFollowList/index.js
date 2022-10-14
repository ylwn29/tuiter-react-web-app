
import who from "./who.js"
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item fw-bolder">
                Who to follow
            </li>            
            ${
                who.map(who => whoToFollowListItem(who)).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;