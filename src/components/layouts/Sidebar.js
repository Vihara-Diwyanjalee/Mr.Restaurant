import { Link } from "react-router-dom";

const item=[
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"Menu Items",
        path:"/admin/items"
    },
    {
        id:3,
        name:"Orders",
        path:"/admin/orders"
    },
];

function Sidebar(){
    return(
        <div className="sidebar">
            {item.map((item) => (
                <Link to={item.path} key={item.id} className="sidebar-item">
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;