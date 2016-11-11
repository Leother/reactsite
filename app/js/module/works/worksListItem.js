import React from "react";
import ReactDOM from "react-dom";

let WorksListItem = React.createClass({
    handClick(x){
        var worksUl = ReactDOM.findDOMNode(this.refs.worksUl);
        var len = worksUl.childNodes.length;
        for( let i = 0; i < len; i++ ){
            worksUl.childNodes[i].className = "";
        }
        worksUl.childNodes[x].className = "active"
        this.props.setMoveWork(x)
    },
    componentDidMount(){
        var worksUl = ReactDOM.findDOMNode(this.refs.worksUl);
        var len = worksUl.childNodes.length;
        for( let i = 0; i < len; i++ ){
            worksUl.childNodes[0].className = "active"
        }
    },
    render(){
        let arr = [];
        var worksTop = this.props.worksTop;
        for( let i = 0; i < worksTop.length; i++ ){
            arr[i] = (
                <li key={'key' + i} data-id={worksTop[i].data} onClick={this.handClick.bind(null,i)}>
                   <a href="javascript:"> {worksTop[i].title}</a>
                </li>
            )
        }

        return(

               <div className="works-top">
                   <ul className="list-unstyled clearfix" ref="worksUl">
                       {arr}
                   </ul>
           </div>
        )
    }
})

export default WorksListItem
