import React from "react";



class IntroBox extends React.Component {

    
    showmodal_facebook = () => {
        window.open("https://www.facebook.com/anujrathore2211")
    }
    showmodal_insta = () => {
        window.open("https://www.instagram.com/anujrathore/?hl=en")
    }

    showmodal_linkedin = () => {
        window.open("https://www.linkedin.com/in/anuj-rathore-974548151/")
    }

    showmodal_github = () => {
        window.open("https://github.com/anuj-rathore-au5")
    }

    render() {
        return (
            <div className="col-md-6 offset-3 intro_box rounded-lg">
                <h1>Hey,I am Anuj Rathore</h1>
                <p>A full stack web developer.<br></br>
                    Currently working on MERN stack.
                <ul>
                        <li>Fast learner</li>
                        <li>love to work in team</li>
                        <li>enjoys meaningfull conversation</li>
                    </ul>
                    Explore for more info.
                </p>
                <div className="social_links">
                    <div className="social_items"
                        onClick={this.showmodal_facebook}>
                        <i class="fa fa-facebook"></i>
                    </div>
                    <div className="social_items"
                        onClick={this.showmodal_insta}>
                        <i class="fa fa-instagram"></i>
                    </div>
                    <div className="social_items"
                        onClick={this.showmodal_linkedin}>
                        <i class="fa fa-linkedin"></i>
                    </div>
                    <div className="social_items"
                        onClick={this.showmodal_github}>
                        <i class="fa fa-github"></i>
                    </div>
                </div>
            </div>
        )
    }
}








export default IntroBox