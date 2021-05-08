import React from 'react'
import { Container, Row, Image, Card, Col } from 'react-bootstrap'
import AnnouncementAd5 from '../images/AnnouncementAd5.png'
import {Navbar} from 'react-bootstrap'
import symbolLogo from '../images/symbolLogo.png'

export default class Construction extends React.Component{

    render(){
        return<div>
            <Navbar>
                <Navbar.Brand>
                    <img className='banner-logo' alt='Wealth Management of the Ozarks Logo' src={symbolLogo}/>
                </Navbar.Brand>
                <h2 className='testTitle'><lead>Welcome To Wealth Management of the Ozarks</lead></h2>
            </Navbar>
            <Container fluid>
                <br></br>
                <Row className="justify-content-md-center">
                 <div className='announcement'>
                    <Image src={AnnouncementAd5}  width='90%'/>
                    <br></br>
                    <strong>Check the background of your financial professional on  <a href='https://brokercheck.finra.org/individual/summary/4199157' target="_blank">FINRA’s BrokerCheck</a>. </strong>
                 </div>
                </Row>
            </Container>
            <br></br>
            <Container className='more-coming'>
                <Card className='shadow'>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>
                            <h3>More Coming Soon...</h3>
                        </Card.Title>
                        <Card.Text>
                            Welcome to <strong>Wealth Management of the Ozarks</strong>, a financial practice specializing in retirement planning and estate conservation. You will find a wealth of information about our capabilities and how we can help you reach your financial goals.
                            <br></br>
                            <br></br>
                            As personal financial professionals, we can:
                            <li>Help you clarify and define your goals</li>
                            <li>Recommend strategies designed to fit your needs</li>
                            <li>Deliver timely information</li>
                            <li>Explain how changing financial conditions affect you</li>
                            <li>Monitor your financial progress</li>
                            <li>Help make investment planning easier</li>
                            <hr></hr>
                            <p>Our website is currently under construction and will be an informational resource designed to help you learn more about personal wealth. Wealth Management of the Ozarks will help you understand the opportunities that become available when you take a proactive approach to your personal financial situation. You will find a variety of articles, calculators, and research reports that we hope will answer your questions or stimulate your interest.</p>
                            <p>In the mean time,  We are open for business and would love to assist any way possible. If you have any further questions, please call us <strong>(479) 209-0167</strong>(Cell) <strong>(479)-401-2525</strong>(Office) or e-mail us <a href="mailto:T.F.White@lpl.com" target='_top'>T.F.White@lpl.com</a>. We will be happy to help and look forward to talking with you.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <br></br>
            <br></br>
            <Container className='footer' fluid>
                <Row>
                    <Col md="auto">
                        <u><strong>Contact</strong></u>
                        <br></br>
                        Phone: (479)-401-2525
                        <br></br>
                        Email: T.F.White@lpl.com
                        <br></br>
                        <br></br>
                        Wealth Management of the Ozarks
                        <br></br>
                        1200 W Commercial St
                        <br></br>
                        Ozark, AR 72949
                    </Col>
                    <Col md="auto">
                        <u><strong>Quick Links</strong></u>
                        <br></br>
                        <a style={{color: 'white'}} href='https://www.finra.org'>FINRA</a>
                        <br></br>
                        <a style={{color: 'white'}} href='https://www.sipc.org'>SIPC</a>
                    </Col>
                    <Col >
                    <u><strong>Disclosures</strong></u>
                    <br></br>Securities and advisory services are offered through LPL Financial, a registered investment advisor and broker/dealer, Member FINRA/SIPC.
                    This site is designed for U.S. residents only. The services offered within this site are offered exclusively through our U.S. registered representatives. LPL Financial U.S. registered representatives may only conduct business with residents of the states for which they are properly registered: (List of states) Please note that not all of the investments and services mentioned are available in every state.            
                    <br></br>
                    <br></br>
                    The LPL Financial Registered Representatives associated with this site may only discuss and/or transact securities business with residents of the following states: <strong>AZ, AR, IN, LA, MO, OK, TX</strong>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
            </Container>
        </div>
    }

}