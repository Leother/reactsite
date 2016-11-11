
import React from "react";
let Footer = React.createClass({
    render(){
        return(
            <div id="footer">
                <div className="conter clearfix">
                    <div className="lianxi text-center">
                        <ul className="list-unstyled clearfix">
                            <li><img src="img/lianxi.png" alt="" /><h2>联 系 我</h2></li>
                            <li><a href="#"><i className="iconfont"></i></a> TEL : 13534272852</li>
                            <li><a href="#"><i className="iconfont"></i></a> QQ : 746159</li>
                            <li><a href="#"><i className="iconfont"></i></a> 微信 : 13534272852</li>
                            <li><a href="#"><i className="iconfont"></i></a> Email : litao1986@vip.qq.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})
export default Footer;
