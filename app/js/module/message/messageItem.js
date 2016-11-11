import React from "react";
let MessageItem = React.createClass({
    render(){
        return(
            <li><div className="box"><div className="pic"></div><div className="ico"></div><div className="content text"><p className="tagname">{this.props.yzName}</p><p className="tagcon">{this.props.yzCon}</p></div></div></li>
        )
    }
})
export default MessageItem
