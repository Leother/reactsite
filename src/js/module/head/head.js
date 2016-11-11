import React from "react";
import HeadListl from "./head_list";
let Head = React.createClass({

    render(){
        return(
            <div className="header" id="head">
                <div className="conter clearfix">
                    <div className="logo pull-left"><a href="index.html"><img src="./../../img/logo.png" alt="logo" /></a></div>
                    <div className="menu pull-left" ref="menu">
                        <HeadListl />

                    </div>
                </div>
            </div>
        )
    }
})

export default Head;
