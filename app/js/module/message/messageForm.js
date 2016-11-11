import React from "react";
import ReactDOM from "react-dom";
let MessageForm = React.createClass({
    hankClick(e){
        e.preventDefault();
        if(!ReactDOM.findDOMNode(this.refs.yfname).value || !ReactDOM.findDOMNode(this.refs.yfcon).value) return;
        var newarr = {
            yzName:ReactDOM.findDOMNode(this.refs.yfname).value,
            yzCon:ReactDOM.findDOMNode(this.refs.yfcon).value
        }
        this.refs.messageForm.reset();
        this.props.onNewqution(newarr)
    },
    render(){
        return(
            <form ref="messageForm" className="messageTable">
                <ul className="list-unstyled">
                    <li>
                        <span>姓名 : </span>
                        <input type="text" name="name" className="miaovInput yf-name" ref="yfname" />
                    </li>
                    <li>
                        <span>内容 : </span>
                        <textarea name="content" className="miaovInput yf-con" ref="yfcon" required=""></textarea>
                    </li>
                    <li>

                        <input className="sub" type="button" value="发表留言" onClick={this.hankClick} />
                    </li>

                </ul>
            </form>
        )
    }
})
export default MessageForm
