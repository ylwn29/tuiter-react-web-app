import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <!-- search field and cog -->
        <div class="row">
            <div class="col-11">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i class="wd-magnifying-glass position-absolute fas fa-search"></i>
                </div>
            </div>
            <div class="ps-0 pe-0 pe-xl-2 col-1 d-flex align-items-center">
                <i class="fa-2x fas fa-cog text-primary"></i>
            </div>
        </div>
        
        <!-- tabs -->
        <ul class=" mt-2 nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">
                    For you
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">
                    Trending
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">
                    News
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">
                    Sports
                </a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">
                    Entertainment
                </a>
            </li>
        </ul>
        
        <!-- image with overlaid text -->
        <div class="position-relative">
            <img src="../../images/starship.png" width="100%">
            <h2 class="position-absolute bottom-0 left-0 mb-2 ps-2 text-black">SpaceX's Starship</h2>
        </div>
        
        <!-- posts -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
