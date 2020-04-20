import React from "react";
import "../App.css"
import { Link } from "react-router-dom";




class NavItems extends React.Component {



    render() {
        return (
            <nav className="nav_bar">
                <Link to="/" style={{textDecoration:"none"}}>
                    <div className="text-center items_parent">
                        <div className="nav_items bounce-in-top">
                            <i class="fa fa-home"></i>
                        </div>
                        {/* roll-in-left */}
                        <span>HOME</span>
                    </div>
                </Link>
                <Link to="/skills" style={{textDecoration:"none"}}>
                    <div className="text-center items_parent">
                        <div className="nav_items bounce-in-top">
                            <i class="fa fa-cogs"></i>
                        </div>
                        <span>SKILLS</span>
                    </div>
                </Link>
                <Link to="/social" style={{textDecoration:"none"}}>
                    <div className="text-center items_parent">
                        <div className="nav_items bounce-in-top">
                            <i class="fa fa-share-alt"></i>
                        </div>
                        <span>SOCIAL</span>
                    </div>
                </Link>
                <Link to="/AboutMe" style={{textDecoration:"none"}}>
                    <div className="text-center items_parent">
                        <div className="nav_items bounce-in-top">
                            <i class="fa fa-user-secret"></i>
                        </div>
                        {/* roll-in-right */}
                        <span>ABOUT ME</span>
                    </div>
                </Link>
                <Link to="/contactME" style={{textDecoration:"none"}}>
                    <div className="text-center items_parent">
                        <div className="nav_items bounce-in-top">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <span>CONTACT ME</span>
                    </div>
                </Link>
            </nav>
        )
    }
}



export default NavItems;