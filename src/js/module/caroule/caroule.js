import React from 'react';
import SliberHome from './Sliber'
let Caroule = React.createClass({
    getInitialState(){
      var IMAGE = [
          {
              src: "./img/carousel-1.png",
              alt: 'IMAGE1'
          },
          {
              src: "./img/carousel-2.png",
              alt: 'IMAGE2'
          },
          {
              src: "./img/carousel-3.png",
              alt: 'IMAGE3'
          }
      ];
        return{
            IMAGE : IMAGE
        }
    },
    render(){
        return(
            <SliberHome IMAGE={this.state.IMAGE}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
            />
        )
    }
})

export default Caroule;
