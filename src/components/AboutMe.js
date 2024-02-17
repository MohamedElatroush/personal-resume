import React, {useState} from 'react'
import {Row} from 'antd'
import { Col } from 'react-bootstrap';
import {
    LinkedinFilled,
    FileFilled,
    GithubFilled
  } from '@ant-design/icons';

const AboutMe = () => {

    const [isHovered, setIsHovered] = useState(false);

    const hoverStyle = {
        color: isHovered ? 'white' : '#045abd',
        textDecoration: "none"
    };

  return (
    <div className='container'>
        <Row>
            <Col xs={12} md={12} lg={6} className='order-md-1'>
            <div>
                <img style={circleStyle} src='../../assets/images/3600_8_05.jpg' alt='Mohamed Hatem'></img>
            </div>
            </Col>
            <Col xs={12} md={12} lg={6} className='order-md-2'>
                <div style={contentStyle}>
                <div className='container'>
                    <p className='roboto' style={{ fontSize: '1.3rem', color: "#B4B4B4" }}>👋 Hello! My name is</p>
                    <p style={{ fontSize: '2.0rem', color: "#FFF" }}>Mohamed Hatem El Atroush <span style={{ color: "#82B1FF" }}>.</span></p>

                    <p style={{ fontSize: '0.9rem', color: "#FFF" }}>
                        <span >I'm a backend developer @ <a style={hoverStyle} href="https://www.getocto.io/"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>Octo</a>. 
                        I have passion for learning new scalable architectures, as well as emerging technologies.</span>
                    </p>
                    <p style={{ fontSize: '0.9rem', color: "#FFF" }}>I love solving problems with my colleagues,
                     and having as many contributions as I can to help other people.
                     Besides work you'll find me playing sports, traveling, reading books and always willing to learn
                     and apply new things to my work and daily life.
                     </p>

                     <p style={{ fontSize: '0.9rem', color: "#FFF" }}>Feel free to contact me on any of the listed socials below</p>
                     <div style={{ justifyContent: 'center', display: 'flex', color: "#82B1FF", fontSize: '1.0rem' }}>
                            <a href='https://www.linkedin.com/in/mohamedelatroush/' style={{ marginRight:"15px", textDecoration:'none'}}><LinkedinFilled /> Linkedin</a>
                            <a href='https://mohamedelatroush.github.io/resume/' style={{ marginRight:"15px" , textDecoration:'none'}}><FileFilled /> Resume</a>
                            <a href='https://github.com/MohamedElatroush' style={{ marginRight:"15px" , textDecoration:'none'}}><GithubFilled /> Github</a>
                     </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    margin: '0 auto', // Add this line to center the circle horizontally
    boxShadow: '0 0 0px #fff, 0 0 2px #fff, 0 0 1px #fff, 0 0 0px #82B1FF, 0 0px 5px #82B1FF, 0 0 10px #82B1FF, 0 0 50px #82B1FF, 0 0 60px #82B1FF', // Glowing border effect
  };

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%', // Ensure the content takes up full height of the parent
    margin: "30px"
};

export default AboutMe