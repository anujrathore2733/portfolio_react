import React from "react"
import EachTech from "./eachtech";
import { Scrollbars } from 'react-custom-scrollbars';




class SkillTech extends React.Component {


    render() {

        return (
            <div className="show_tech">
                <div className="shw_tech_head rounded">
                    <strong>Technologies</strong>
                </div>
                <Scrollbars style={{ height: "500px", width: "40%", backgroundColor: "rgb(0,0,0,0.4)" }}
                    renderThumbVertical={({ style, ...props }) =>
                        <div {...props}  style={{ ...style,width: '5px', borderRadius: '4px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)', backgroundColor: 'rgb(255, 74, 87)' }} />
                    }>
                    <div className="display_tech rounded">
                        <EachTech name={"Express.js"} img_src={"https://b7.pngbarn.com/png/925/447/express-js-node-js-javascript-mongodb-node-js-png-clip-art.png"}></EachTech>
                        <EachTech name={"Node.js"} img_src={"https://pluspng.com/img-png/nodejs-logo-png-node-js-development-296.png"}></EachTech>
                        <EachTech name={"React.js"} img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}></EachTech>
                        <EachTech name={"MongoDb"} img_src={"https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png"}></EachTech>
                        <EachTech name={"Postgres"} img_src={"https://dyltqmyl993wv.cloudfront.net/assets/stacks/postgresql/img/postgresql-stack-220x234.png"}></EachTech>
                        <EachTech name={"Bootstrap"} img_src={"https://cdn4.iconfinder.com/data/icons/logos-3/504/Bootstrap-512.png"}></EachTech>
                        <EachTech name={"CSS3"} img_src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"}></EachTech>
                        <EachTech name={"HTML5"} img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"}></EachTech>
                        <EachTech name={"Sequelize"} img_src={"https://cdn.worldvectorlogo.com/logos/sequelize.svg"}></EachTech>
                        <EachTech name={"Mongoose"} img_src={"https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png"}></EachTech>
                        <EachTech name={"Javascript"} img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"}></EachTech>
                        <EachTech name={"Jquery"} img_src={"https://i.dlpng.com/static/png/348405_preview.png"}></EachTech>
                        <EachTech name={"Python"} img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"}></EachTech>
                    </div>
                </Scrollbars>
            </div>
        )
    }
}

export default SkillTech