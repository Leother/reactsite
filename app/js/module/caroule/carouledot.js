import React,{Component} from "react";

export default class CarouleDot extends Component{
    constructor(props) {
        super(props);
    }

    handleDotClick(i) {

        var option = i - this.props.nowLocal;
        console.log(option)
        this.props.turn(option);
    }
    render(){

        let dotNodes = [];

        for(let i =0; i < this.props.length; i++){
            dotNodes[i] = <li key={'dot'+ i} className="" onClick={this.handleDotClick.bind(this,i)}> <a href="javascript:"></a> </li>

        }
        return(
            <div className="carousel-menu">
                <ul className="list-unstyled">
                    {dotNodes}
                </ul>
            </div>
        )
    }
}
