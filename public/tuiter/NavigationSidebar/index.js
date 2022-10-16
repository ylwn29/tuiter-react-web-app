import sidebars from "./sidebars.js";
import NavSidebarItem from "./NavSidebarItem.js";

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <div class="list-group-item">
                <i class="fab fa-twitter"></i>
            </div>
            
            ${sidebars.map(sidebar => {
                return(`
                    ${NavSidebarItem(sidebar, active)}
                `)
            }).join('')}       
        </div>
        
        <div class="pe-xl-3">
            <button class="ps-lg-0 pe-lg-0 btn btn-primary w-100 mt-2 rounded-pill">Tweet
            </button>
        </div>
    
    `)
}
export default NavigationSidebar;