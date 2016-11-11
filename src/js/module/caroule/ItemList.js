
import React from "react";

let ItemList = React.createClass({

    render:function(){
        return (
                    <li>
                        <a href="javascript:"> <img src={this.props.src} alt={this.props.alt} /> </a>
                    </li>
        )
    }
})
export default ItemList
