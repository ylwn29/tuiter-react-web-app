const NavigationSidebar = () => {
    return(`
        <div class="list-group">
                <div class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </div>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-home"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Home</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-hashtag"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Explore</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-bell"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Notifications</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-envelope"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Messages</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-bookmark"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Bookmarks</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-list"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2"> Lists</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-user"></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">Profile</div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2"><i class="fas fa-ellipsis-h"></i></i></div>
                        <div class="d-none d-xl-block col-10 ps-2">More</div>
                    </div>
                </a>
            </div>
            <div class="pe-xl-3">
                <button class="ps-lg-0 pe-lg-0 btn btn-primary w-100 mt-2 rounded-pill">Tweet
                </button>
            </div>
    
    `)
}
export default NavigationSidebar;