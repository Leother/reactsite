
import React from "react";
import Head from "./head/head";
import Caroule from "./caroule/caroule"
import Port from "./port/port"
import Skill from "./skill/skill"
import Works from "./works/works"
import Target from "./target/target"
import Message from "./message/message"
import Footer from "./footer/footer"

let centent = React.createClass({

    render(){
        return(
            <div>
                <Head />
                <Caroule />
                <Port />
                <Skill />
                <Works />
                <Target />
                <Message />
                <Footer />

            </div>
        )
    }


})

export default centent;
