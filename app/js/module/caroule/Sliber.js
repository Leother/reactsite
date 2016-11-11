import React,{Component} from 'react';
import ItemList from './ItemList'
import CarouleDot from './carouledot'
import SliderArrows from "./SliberArrows"
export default class Sliber extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
            speed: 2,
            delay: 3,
            pause: true,
            autoplay: true,
            dots: true,
            arrows: true,
            items: []
        };
    }
    turn(n) {

        var _n = this.state.nowLocal + n;

        if(_n <= 0) {
            _n = _n + this.props.IMAGE.length;
        }
        if(_n >= this.props.IMAGE.length) {
            _n = _n - this.props.IMAGE.length;
        }
        this.setState({nowLocal: _n});

    }
    goPlay() {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }
    render(){
        var questions = this.props.IMAGE;
        if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');
        var questionComps = questions.map(function(qst){
            return <ItemList key={qst.src}
                             src={qst.src}
                             alt={qst.alt}
            />
        }.bind(this) );

        return (
            <div id="questions" className="carousel" onMouseOver={this.state.pause?this.pausePlay.bind(this):null} onMouseOut={this.state.pause?this.goPlay.bind(this):null}>
                <ul className="list-unstyled carousel-ul clearfix" style={{
                    left: -1920 * this.state.nowLocal + "px",
                    transitionDuration: this.props.speed + "s"
                }}>
                    {questionComps}
                </ul>
                <CarouleDot length={this.props.IMAGE.length} turn={this.turn.bind(this)} nowLocal={this.state.nowLocal} />
                <SliderArrows turn={this.turn.bind(this)} />
            </div>
        )
    }


}

Sliber.autoPlayFlag = null;
