import React,{Component} from "react";
export default class PortItem extends Component{
    render(){

        return(
            <ul className="list-unstyled clearfix">
                <li>
                    <div className="port-list-warp" onMouseOver={this.props.portonOver} onMouseOut={this.props.portonOut}>
                        <div className="port-list pc">
                            <span><i className="iconfont">&#xe61c;</i></span>
                            <h3>PC端</h3>
                        </div>
                        <div className="turn pc">PC端，能处理各个浏览器兼容性问题如:chrome,firefox,safari,opera,IE(IE7+)</div>
                    </div>
                </li>
                <li>
                    <div className="port-list-warp" onMouseOver={this.props.portonOver} onMouseOut={this.props.portonOut}>
                        <div className="port-list pc">
                            <span><i className="iconfont">&#xe61b;</i></span>
                            <h3>移动端</h3>
                        </div>
                        <div className="turn pc">移动端，能处理安卓机各机型、iphone的兼容性，</div>
                    </div>
                </li>
                <li>
                    <div className="port-list-warp" onMouseOver={this.props.portonOver} onMouseOut={this.props.portonOut}>
                        <div className="port-list pc">
                            <span><i className="iconfont">&#xe60e;</i></span>
                            <h3>响应式</h3>
                        </div>
                        <div className="turn pc">响应式，一套代码兼容各设备</div>
                    </div>
                </li>
                <li className="last">
                    <div className="port-list-warp" onMouseOver={this.props.portonOver} onMouseOut={this.props.portonOut}>
                        <div className="port-list pc">
                            <span><i className="iconfont">&#xe60f;</i></span>
                            <h3>webApp/Hybrid App</h3>
                        </div>
                        <div className="turn pc">webApp，网页应用。Hybrid App兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势”(目前有去了解的有3种,html5+,ionic+angular,react-native)</div>
                    </div>
                </li>
            </ul>

        )
    }
}
