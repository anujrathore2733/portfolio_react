import React from "react";
import EachTech from "./eachtech";
import { Scrollbars } from 'react-custom-scrollbars';



class SkillTools extends React.Component {


    render() {

        return (
            <div className="show_tech">
                <div className="shw_tech_head rounded">
                    <strong>Tools</strong>
                </div>
                <Scrollbars style={{ height: "500px", width: "40%", backgroundColor: "rgb(0,0,0,0.4)" }}
                    renderThumbVertical={({ style, ...props }) =>
                        <div {...props}  style={{ ...style,width: '5px', borderRadius: '4px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)', backgroundColor: 'rgb(255, 74, 87)' }} />
                    }>
                    <div className="display_tech rounded">
                        <EachTech name={"Github"} img_src={"https://pngimg.com/uploads/github/github_PNG40.png"}></EachTech>
                        <EachTech name={"VScode"} img_src={"https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png"}></EachTech>
                        <EachTech name={"Zoom"} img_src={"https://cdn.clipart.email/67b7ec26148891e99db61be71577983e_zoom-zoom-call-hd-png-download-transparent-png-image-pngitem_860-779.png"}></EachTech>
                        <EachTech name={"Slack"} img_src={"https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"}></EachTech>
                        <EachTech name={"Trello"} img_src={"https://cdn.freebiesupply.com/logos/thumbs/2x/trello-logo.png"}></EachTech>
                        <EachTech name={"Postman"} img_src={"https://www.vippng.com/png/full/393-3932763_update-native-postman-on-ubuntu.png"}></EachTech>
                    </div>
                </Scrollbars>
            </div>
        )
    }
}

export default SkillTools