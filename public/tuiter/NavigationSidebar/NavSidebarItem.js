
const NavSidebarItem = (sidebar, active) => {
    return (`        
        <a href="${sidebar.link}" class="list-group-item list-group-item-action ${active===sidebar.name ? "active":""}">
            <div class="row">
                <div class="col-2"><i class="${sidebar.icon}"></i></div>
                <div class="d-none d-xl-block col-10 ps-2">${sidebar.name}</div>
            </div>
        </a>    
    `)
}
export default NavSidebarItem;



