import "./AdminLayout.css";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";

function AdminLayout({children}){
    return(
        <div className="layout-container">
            <AdminNavbar />
            <div className="inner-layout">
                <Sidebar />
                {children}
            </div>    
        </div>
    );
}

export default AdminLayout;