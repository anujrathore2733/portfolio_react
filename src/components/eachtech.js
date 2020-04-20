import React from "react";


class EachTech extends React.Component {



    render() {


        return (
            <div className="each_tech">
                <div className="logo">
                    <img src={this.props.img_src} height="100%" width="100%" alt={this.props.name}></img>
                </div>
                <div className="name">
                    <span>{this.props.name}</span>
                </div>
            </div>
        )
    }
}

export default EachTech