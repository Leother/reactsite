import React from "react";
import WorksListItrm from "./worksListItem";
import WorksWapr from "./worksWapr"
let Works = React.createClass({
    getInitialState(){
        var worksTop = [
            {
                data:"pc",
                title:"PC端"
            },
            {
                data:"mobile",
                title:"移动端"
            },
            {
                data:"reply",
                title:"响应式"
            },
            {
                data:"widget",
                title:"JS插件"
            },
            {
                data:"game",
                title:"react"
            }
        ];

        return{
            worksTop:worksTop,


        }
    },
    setMoveWork(x){
        this.refs.WorksWaprs.getWaprMove(x)
    },
    render(){
        return(
            <div className="works" id="works">
                <div className="conter">
                    <div className="title text-center">
                        <h2> 项目  </h2>
                        <p>之前做过的,模仿过的一些网站,js插件等</p>
                    </div>
                    <WorksListItrm worksTop={this.state.worksTop} setMoveWork={this.setMoveWork} />
                    <WorksWapr ref="WorksWaprs" />
                </div>


            </div>
        )
    }
})

export default Works;
