import React from "react";
let Next = React.createClass({
    render(){
        return(
            <a id="next" className="wheeled-next" href="javascript:" onClick={this.props.onClickPrev.bind(null,-1)}> &gt; </a>
        )
    }
})
export default Next;
