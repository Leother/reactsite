
import React from "react";
import MessageList from "./messageList"
import MessageForm from "./messageForm"
let Message = React.createClass({
    getInitialState(){
        var arr = [
            {
                yzName:'游客1',
                yzCon:'哈哈'
            },
            {
                yzName:'游客2',
                yzCon:'呵呵'
            },
            {
                yzName:'游客3',
                yzCon:'纱纱'
            }
        ]
        return{
            arr:arr
        }
    },
    onNewqution(newarr){
        newarr.key = this.state.arr.length + 1;
        var newquestion = this.state.arr.concat(newarr);
        newquestion.shift();
        this.setState({
            arr: newquestion
        })
    },
    render(){
        return(
            <div id="message" className="message">
                <div className="conter clearfix message-warp">
                    <div className="message-top text-center">
                        <h2> 留言板 </h2>
                    </div>
                    <div className="getmessage">
                        <div className="getmessage-top text-center">
                            <h3>留言显示区域</h3>
                        </div>
                        <MessageList arr={this.state.arr} />
                    </div>
                    <div className="setmessage">
                        <aside className="studentMBox messageAside scrollBar" >
                            <header className="studentMBoxHead">留言板</header>
                            <div className="warp-messageTable">
                                <MessageForm onNewqution={this.onNewqution} />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
})
export default Message;
