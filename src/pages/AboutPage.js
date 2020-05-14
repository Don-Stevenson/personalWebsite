import React from "react";
import Hero from '../components/Hero'
import Container from "react-bootstrap/Container";
import Content from '../components/Content'

export default function AboutPage(props) {
    return(
        <Container>
            <Hero title={props.title}/>
            <p>Hi, I'm Don Stevenson.  I'm a full stack web developer with experience in Javascript, Ruby on Rails, Node, React, Express and more!  </p>
        </Container>
   
    )
}
