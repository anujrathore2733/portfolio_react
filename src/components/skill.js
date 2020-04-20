import React from "react";
import { Link } from "react-router-dom";


class MainBox extends React.Component {


    render() {

        return (
            <div>
                <div className="skill_main_div">
                    <Link to="/skills/technologies" className="links">
                        <div className="inner_skill_div rounded">
                            <strong>Technologies</strong>
                        </div>
                    </Link>
                    <Link to="/skills/tools" className="links">
                        <div className="inner_skill_div rounded">
                            <strong>Tools</strong>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default MainBox