import React,{Component} from "react";
import PortItem from "./portItem"
let PortList = React.createClass({

    render(){

        return(
            <div className="port-warp">
                <PortItem portonOver={this.props.portonOver} portonOut={this.props.portonOut} />
            </div>
        )
    }
})

export default PortList;
