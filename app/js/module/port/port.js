import React ,{Component} from 'react';
import PortList from './portList'
 let Port = React.createClass({

     portonOver(e){
            e.currentTarget.style.transform = "rotateY(180deg)"
            e.currentTarget.style.WebkitTransform = "rotateY(180deg)"
            e.currentTarget.style.transaction = "2s ease"
            e.currentTarget.style.WebkitTransition = "2s ease"
     },
     portonOut(e){
             e.currentTarget.style.transform = "rotateY(0deg)"
             e.currentTarget.style.WebkitTransform = "rotateY(0deg)"
             e.currentTarget.style.transaction = "2s ease"
             e.currentTarget.style.WebkitTransition = "2s ease"
     },
    render(){
        return(
            <div className="port">
                <div className="conter">
                    <div className="services">
                        <p>熟练使用javascript，JQuery,ajax,Bootstrap，HTML5、CSS3框架,seajs, 熟悉jQuery UI, jQuery Mobile，react框架,gulp,bower,webpack等前端自动化开发, 响应式布局，能够写出兼容主流浏览器并符合W3C规范的代码 了解react-native,angular.js,nodejs
                        </p>
                    </div>
                    <PortList portonOver={this.portonOver} portonOut={this.portonOut} />
                </div>
            </div>
        )
    }
})
export default Port;
