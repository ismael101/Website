import React, {Component} from 'react'
import { Jumbotron, Container, Image, Row, Col} from 'react-bootstrap'

class Index extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid='true' className='bg-light pt-5 text-center' style={{height:'85vh'}}>
                    <Container className='text-center py-5 px-5' style={{height:'90%'}}>
                        <div>
                            <h1 className='display-4 animate__animated animate__bounceInDown'>Hi, Im Ismael Mohamed</h1>
                            <hr/>
                            <h1 className='text-muted animate__animated animate__jackInTheBox animate__delay-1s'>Fullstack JavaScript Developer</h1>
                            <Image className='' src={require('../images/avatar.png')} width={200}/>
                        </div>
                    </Container>
                    <a href='#skills'>
                        <svg class="bi bi-arrow-down-circle animate__animated animate__bounce infinite animate__repeat-2 animate__delay-2s" width="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </a>
                </Jumbotron>
                <Container id='skills' className='py-5'>
                    <h1 class='text-center mt-5'>Frontend Development Skills</h1>
                    <hr className='mb-5'/>
                    <div class='my-5'>
                    <Row className='my-5'>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/html5.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/react.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/redux.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/vue.png')} width={200}/>
                        </Col>
                    </Row>
                    </div>
                    <div>
                    <h1 class='text-center mt-5'>Backend Development Skills</h1>
                    <hr className='mb-5'/>
                    <Row className='my-5'>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/nodejs.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/mongodb.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/postgres.png')} width={200}/>
                        </Col>
                        <Col className='text-center' xs={12} sm={3}>
                            <Image className='my-5' src={require('../images/heroku.png')} width={200}/>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Index