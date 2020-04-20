import React from "react";
import axios from "axios";


const Resume = () => {

    const download = () => {
        axios.get('https://portfolio-anuj.herokuapp.com/users/resume')
    }





    return (
        <div>
            <button className="btn btn-sm text-light shadow heartbeat"
                style={{ background: "rgb(255, 74, 87)", fontSize: '14px' }}
                onClick={()=>download()}>Download Resume<i class="fa fa-download mx-2"></i></button>
        </div>
    )
}

export default Resume