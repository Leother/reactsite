import React from "react";
import {startMoveTime} from "../../facility/start";
let HeadList = React.createClass({
    getInitialState(){
        var  cshleft = 0;
        return{
            cshleft : cshleft
        }
    },
    hackListMove(e){
        var menubg = this.refs.menubg;
        var left = e.currentTarget.offsetLeft;
        startMoveTime(menubg,{left:left})
    },
    hackListOut(){
        var menubg = this.refs.menubg;
        startMoveTime(menubg,{left:this.state.cshleft})
    },
    hackListClick(e){
        var menubg = this.refs.menubg;
        var left = e.currentTarget.offsetLeft;
        this.setState({
            cshleft: left
        })
        startMoveTime(menubg,{left:left})
    },
    render(){
        return(
            <div>
                <ul className="list-unstyled" ref="menu_ul">
                    <li onMouseMove={this.hackListMove} onMouseOut={this.hackListOut} onClick={this.hackListClick} data-id="index"><a href="javascript:"> 首&nbsp;&nbsp;&nbsp;页 </a></li>
                    <li onMouseMove={this.hackListMove} onMouseOut={this.hackListOut} onClick={this.hackListClick} data-id = "skill"><a href="#skill"> 个人简介 </a></li>
                    <li onMouseMove={this.hackListMove} onMouseOut={this.hackListOut} onClick={this.hackListClick} data-id = "works"><a href="#works"> 项&nbsp;&nbsp;&nbsp;目 </a></li>
                    <li onMouseMove={this.hackListMove} onMouseOut={this.hackListOut} onClick={this.hackListClick} data-id = "message"><a href="#message"> 留言板 </a></li>
                </ul>
                <div className="menu-bg" ref="menubg"></div>
            </div>
        )
    }
})

export default HeadList;
