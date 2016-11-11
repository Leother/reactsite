import React from "react";
import ReactDOM from "react-dom";
import Prev from "./prev"
import Next from "./next"
import SkillTop from "./skillTop"
let Skill = React.createClass({
    getInitialState(){
        var arr = ["active","next","prev"];
        return{
            arr:arr,
            nowLocal:0,
        }
    },
    onClickPrev(x){
        var $t = 0;
        var whill = ReactDOM.findDOMNode(this.refs.wheellist);
        var child = whill.childNodes;
        for(let i = 0; i < child.length; i++){
            if(child[i].className == "active"){
                $t = i;
                child[i].className = "";
            }
        }
        var iBe = $t +1;
        var iPr = $t +2;
        iPr = iPr % child.length;
        iBe = iBe % child.length;
        if(x>0){
            child[$t].className = "prev"
            child[iBe].className = "active"
            child[iPr].className = "next"
        }else{
            child[$t].className="next";
            child[iBe].className="prev" ;
            child[iPr].className="active";
        }
    },


    render(){
        return(
            <div className="skill" id="skill">
                <div className="conter">
                    <div className="skill-text">
                        <SkillTop />
                        <Prev onClickPrev={this.onClickPrev} />
                        <div className="wheeled">
                            <ul id="wheellist" className="list-unstyled" ref="wheellist">
                                <li className="active" ref="active">
                                    <div className="wheeled-div">
                                        <div className="reoud">
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                        </div>
                                        <div className="wheeled-mian">
                                            <p> <span className="work-date"><i className="iconfont"></i> 2008-3-1 </span> <span className="work-school"> 金长城电脑 </span> <span className="work-specialty"> 平面设计 </span> </p>
                                            <p> <span className="work-date"><i className="iconfont"></i> 2011-2-10 </span> <span className="work-school"> 北大青鸟 </span> <span className="work-specialty"> 软件基础 </span>  </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="next" ref="next">
                                    <div className="wheeled-div">
                                        <div className="reoud">
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                        </div>
                                        <div className="wheeled-mian">
                                            <p><span className="work-date"><i className="iconfont"></i> 2015-3-2 </span><span className="work-school"> 人人创 </span><span className="work-specialty"> https://www.renrench.com/ </span></p>
                                            <span className="work-bewrite">项目描述 -- 人人创项目——草根创业一站式服务平台。国内首家基于 LBS 为草根创业者提供找项目、学技术、店铺选址、装修、融资、创业运营、招工等全方位服务的手机移动端应用平台.
项目中职责 -- 网站前端设计,根据项目要求兼容各大主流浏览器,日常样式修改维护,根据要求增加,调整页面内容</span><br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2015-8-7 </span><span className="work-school"> 少易购商城 </span><span className="work-specialty"> http://www.shaoego.com/ </span>  </p>
                                            <span className="work-bewrite">项目描述 – 主营皮革类的商城网站，提供买家购物，卖家入驻的常见商城服务项目中职责 --负责网站前端开发 根据 UI 设计原稿修改、增加页面内容， 日常样式维护，根据项目要求兼容各大主流浏览器</span>
                                            <br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2016-3-10 </span><span className="work-school"> 好付支付 </span><span className="work-specialty"> http://www.haofupay.cn/ </span>  </p>
                                            <span className="work-bewrite">项目描述 – 公司官网 后台系统界面及功能开发</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="prev" ref="prev">
                                    <div className="wheeled-div">
                                        <div className="reoud">
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                            <a href="javascript:"></a>
                                        </div>
                                        <div className="wheeled-mian">
                                            <p><span className="work-date"><i className="iconfont"></i>2010-6~2011-12</span> <span className="work-school"> 深圳鸿腾光电有限公司 </span> <span className="work-specialty"> 设计师 </span></p>
                                            <span> 责公司包装设计，静态网页设计，,图片处理,LOGO 设计,图标设计,网站管理等. </span><br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2012-9~2013-8</span> <span className="work-school"> 银记银饰 </span> <span className="work-specialty"> 天猫美工 </span> </p>
                                            <span> 天猫商城店铺装修 海报设计 详情描述 宣传单页 公司官网管理 </span><br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2014-7~2015-8</span> <span className="work-school"> 惠卡世纪 </span></p>
                                            <span className="work-specialty">  web前端开发 </span> <span> 负责Web前端开发设计,微信公众号页面 移动端等 </span><br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2015-8~2016-1</span> <span className="work-school"> 指易达 </span> <span className="work-specialty">  web前端开发 </span></p>
                                            <span className="work-specialty">  web前端开发 </span> <span> 负责前端开发，微信商城，项目维护,交互体验,原型设计等 </span><br />
                                            <p><span className="work-date"><i className="iconfont"></i> 2016-3~至今</span> <span className="work-school"> 好付支付 </span></p>
                                            <span className="work-specialty">  web前端开发 </span> <span> 负责Web前端开发设计,H5移动页面,后台界面及功能开发,app内嵌页面 </span><br />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Next onClickPrev={this.onClickPrev} />
                    </div>
                </div>
            </div>
        )
    }
})

export default Skill;
