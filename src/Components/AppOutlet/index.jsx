import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function AppOutlet () {
    return <div className="root-container">
                <Navbar />
    <div className="components-container">
        <Outlet />
    </div>
    </div> 
}