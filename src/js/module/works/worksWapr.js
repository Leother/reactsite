import React from "react";
import ReactDOM from "react-dom";
import {startMoveTime} from "../../facility/start"


let WorksWapr = React.createClass({
    getInitialState(){
        var iNow=0;
        return{
            iNow:iNow
        }
    },
    componentDidMount(){
        var worksWapr = ReactDOM.findDOMNode(this.refs.worksWapr);
        var children = worksWapr.childNodes;
        for( let i = 0, len = children.length; i < len; i++ ){
            children[0].style.left = "0"
        }
    },
    getWaprMove(x){
        var worksWapr = ReactDOM.findDOMNode(this.refs.worksWapr);
        var children = worksWapr.childNodes;
            if( this.state.iNow < x ){
                children[x].style.left = "1190px";
                startMoveTime(children[this.state.iNow],{ left : -1190 });
            }else if(this.state.iNow > x){
                children[x].style.left = "-1190px";
                startMoveTime(children[this.state.iNow],{ left : 1190 });
            }
            startMoveTime(children[x],{ left : 0 });
            this.setState({
                iNow:x
            })
    },
    render(){
        return(
            <div className="works-wapr" ref="worksWapr">
                <div id="pc" className="works-list pc">
                    <ul className="list-unstyled">
                        <li data-name="仿天猫" data-imageurl="img/tmall.png" data-tool="HBuilder" data-types="商城" data-synopsis="1" data-url="http://www.les1986.com/other/tmall/app/home/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/tmall_xs.png" alt="" />
                                    <p>仿天猫1</p>
                            </a>
                        </li>
                        <li data-name="1元拼宝" data-imageurl="img/pb178.png" data-tool="sublime" data-types="拼宝" data-synopsis="2" data-url="http://www.les1986.com/other/178pb/app/home/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/pb178_xs.png" alt="" />
                                    <p>1元拼宝</p>
                            </a>
                        </li>

                        <li data-name="美橙" data-imageurl="img/cndns.png" data-tool="HBuilder" data-types="空间 域名" data-synopsis="3" data-url="http://www.les1986.com/other/cndns/app/home/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/cndns_xs.png" alt="" />
                                    <p>美橙</p>
                            </a>
                        </li>
                        <li data-name="100度商城" data-imageurl="img/dianzi.png" data-tool="sublime" data-types="电子商务商城" data-synopsis="4" data-url="http://les1986.com/other/dianzi/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/dianzi_xs.png" alt="" />
                                    <p>100度商城</p>
                            </a>
                        </li>
                        <li className="last" data-name="Testin" data-imageurl="img/testin.png" data-tool="sublime" data-types="应用测试" data-synopsis="5" data-url="http://les1986.com/other/Testin/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/testin_xs.png" alt="" />
                                    <p>Testin</p>
                            </a>
                        </li>
                        <li data-name="微博--开放平台" data-imageurl="img/weibo.png" data-tool="sublime" data-types="微博平台" data-synopsis="6" data-url="http://les1986.com/other/weibo/app/home/index.html" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/weibo_xs.png" alt="" />
                                    <p>微博--开放平台</p>
                            </a>
                        </li>
                        <li data-name="好付支付官网" data-imageurl="img/haofupay.png" data-tool="sublime" data-types="公司官网" data-synopsis="15" data-url="http://www.haofupay.cn/" data-onoff="0">
                            <a href="javascript:">
                                <img src="img/haofupay_xs.png" alt="" />
                                    <p>好付支付官网</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="mobile" className="works-list mobile">
                    <ul className="list-unstyled">
                        <li data-name="美容养生" data-imageurl="img/meirong.png" data-tool="HBuilder" data-types="美容养生" data-synopsis="7" data-erwm="img/meironger.png" data-onoff="1">
                            <a href="javascript:">
                                <img src="img/meirong_xs.png" alt="" />
                                    <p>美容养生</p>
                            </a>
                        </li>
                        <li data-name="我主良缘" data-imageurl="img/wozhu.png" data-tool="HBuilder" data-types="交友" data-synopsis="8" data-erwm="img/wozhuer.png" data-onoff="1">
                            <a href="javascript:">
                                <img src="img/wozhu_xs.png" alt="" />
                                    <p>我主良缘</p>
                            </a>
                        </li>
                        <li data-name="77海淘" data-imageurl="img/77haitaomx.png" data-tool="sublime" data-types="商城" data-synopsis="9" data-erwm="img/77haitaoer.png" data-onoff="1">
                            <a href="javascript:">
                                <img src="img/77haitao.png" alt="" />
                                    <p>77海淘</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="reply" className="works-list reply">
                    <ul className="list-unstyled">
                        <li data-name="人人创" data-imageurl="img/renren.png" data-tool="HBuilder" data-types="创业 融资" data-synopsis="10" data-erwm="" data-onoff="0" data-url="http://www.les1986.com/other/renrench/index.html">
                            <a href="javascript:">
                                <img src="img/renren_xs.png" alt="" />
                                <p>人人创</p>
                            </a>
                        </li>
                        <li data-name="微金所" data-imageurl="img/weijinsuo.png" data-tool="HBuilder" data-types="创业 融资" data-synopsis="11" data-url="http://www.les1986.com/other/weijin/index.html">
                            <a href="javascript:">
                                <img src="img/weijinsuo_xs.png" alt="" />
                                <p>微金所</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="widget" className="works-list widget">

                </div>
                <div id="react" className="works-list react">
                    <ul className="list-unstyled">
                        <li data-name="react实例" data-imageurl="img/react_shilie.png" data-tool="sublime" data-types="react实例" data-synopsis="15" data-url="http://www.les1986.com/other/reactPage/index.html"  data-onoff = "0">
                            <a href="javascript:">
                                <img src="img/react_shilie_xs.png" alt="" />
                                <p>react实例</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})

export default WorksWapr;
