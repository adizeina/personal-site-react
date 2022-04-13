import React from 'react';
import {Container,Row, Col, Image} from 'react-bootstrap';



export default function Home(){
    return (
        <>
            <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                <Image src="./../images/smiley.png"></Image>
                <Container className = "socials" fluid="md">
					<a href="https://www.instagram.com/zeinaadi_" target="_blank" rel = "noreferrer" class="fab fa-instagram"> </a> 
					<a href="https://www.facebook.com/zeinaadi00/" target="_blank" rel = "noreferrer" class="fab fa-facebook"> </a>
					<a href="https://www.linkedin.com/in/zeina-adi-242520174/" target="_blank" rel = "noreferrer" class="fab fa-linkedin-in"> </a>
					<a href="https://www.youtube.com/channel/UCrNMww54_SX8ucO14NV_VGA" target="_blank" rel = "noreferrer" class="fab fa-youtube"> </a>
					<a href="https://github.com/adizeina" target="_blank" rel = "noreferrer" class="fab fa-github"> </a>
					
				</Container>
                </Col>
                <Col>
                    <div class="header1" >HELLO WORLD!</div>
                    <div class = "header2"> My name is <span class="beautify-h2"> Zeina Adi </span></div>
                    <div class ="header3"> Here's a bit about me: </div>
                    <p> Scroll down to see the <a href="/portfolio"> projects</a> I had so much fun making. While studying in univeristy, I enjoy taking up projects or picking up a new language/skill. 
                    It is quite obvious that I enjoyed making websites. I am excited to enter the work field and incorporate all the skills I have been working on and better them as I pick up new ones. 
                    The saying I carry in my heart is "An expert was once a beginner" by Helen Hayes. Since this is the beggining, with hardwork, perseverance and consitency, anything is possible. </p>

                </Col>
            </Row>
            </Container>   
        </>
        
    );
}