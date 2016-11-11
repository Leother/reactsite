import React from "react";
import MessageItem from "./messageItem"
let MessageList = React.createClass({
    render(){
        var defaarr = this.props.arr;
        var quesarr = defaarr.map(function (key) {
            return <MessageItem
                    key={key.yzName}
                    yzName={key.yzName}
                    yzCon={key.yzCon}
            />
        })
        return(
            <ul id="messageList" className="list-unstyled">
                {quesarr}
            </ul>
        )
    }
})
export default MessageList
