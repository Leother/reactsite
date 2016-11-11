import React from "react";
import ReactDOM from "react-dom"
import {targetWarp} from "../../facility/target"
let Target = React.createClass({
    componentDidMount(){
        var tartgetUrl = ReactDOM.findDOMNode(this.refs.targetUrl);

        targetWarp(tartgetUrl)
    },
    render(){
        return(
            <div className="target">
                <div className="conter">
                    <div className="target-top text-center">
                        <h2>常用网址</h2>
                        <p>经常使用的一些网址(可拖拽排序)</p>
                    </div>
                    <div className="target-warp">
                        <ul className="list-unstyled clearfix" ref="targetUrl">
                            <li><a href="javascript:"><img src="img/target1.png" alt="" /></a><p>JQ插件网</p></li>
                            <li><a href="javascript:"><img src="img/target2.png" alt="" /></a><p>极客学院</p></li>
                            <li><a href="javascript:"><img src="img/target4.png" alt="" /></a><p>html580</p></li>
                            <li><a href="javascript:"><img src="img/target5.png" alt="" /></a><p>轩枫阁</p></li>
                            <li><a href="javascript:"><img src="img/target7.png" alt="" /></a><p>麦子学院</p></li>
                            <li><a href="javascript:"><img src="img/target8.png" alt="" /></a><p>css888</p></li>
                            <li><a href="javascript:"><img src="img/target10.png" alt="" /></a><p>前端网</p></li>
                            <li><a href="javascript:"><img src="img/target11.png" alt="" /></a><p>前端开发</p></li>
                            <li className="last"><a href="javascript:"><img src="img/target12.png" alt="" /></a><p>大前端</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})
export default Target
