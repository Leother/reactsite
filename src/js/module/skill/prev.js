import React from "react";
let Prev = React.createClass({
    render(){
        return(
            <a id="prev" className="wheeled-prev" href="javascript:" onClick={this.props.onClickPrev.bind(null,1)}> &lt; </a>
        )
    }
})

export default Prev;
