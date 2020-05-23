import React, {Component} from 'react'
import {Container, Tab, Tabs, Carousel, Image, Row, Col} from 'react-bootstrap'

class Projects extends Component{
    render(){
        return(
            <Container style={{height:"100vh"}}>
                <Tabs fill defaultActiveKey="blog" className='mt-5'>
                    <Tab eventKey="blog" title="Blog" className='py-5 px-5'>
                        <div>
                        <Carousel>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/blog1.png')}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/blog2.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/blog3.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        </Carousel>
                        <h2 className='mt-5'>Description</h2>
                        <hr/>
                        <p>This applications loads information from the NewsAPI and stores the information in a database and updates the database every hour wth new articles. Then the application displays article information and allows users to search</p>
                        <p></p>
                        <h2 className='mt-5'>Stack</h2>
                        <hr/>
                        <Row>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/react.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/nodejs.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/postgres.png')} width={200}/>
                            </Col>
                        </Row>
                        <h2 className='mt-5'>Link</h2>
                        <hr/>
                        <a href='https://frozen-earth-44323.herokuapp.com/'>website hosted on heroku</a><br/>
                        <a href='https://github.com/ismael101/Blog'>repository on github</a>
                        </div>
                    </Tab>
                    <Tab eventKey="commerce" title="E-Commerce" className='py-5 px-5'>
                        <div>
                        <Carousel>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/commerce1.png')}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/commerce2.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/commerce3.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        </Carousel>
                        <h2 className='mt-5'>Description</h2>
                        <hr/>
                        <p>This application provides all the functionaliy of an ecommerce application by create and managing orders and products</p>
                        <h2 className='mt-5'>Stack</h2>
                        <hr/>
                        <Row>
                            <Col className='text-center' xs={12} sm={3}>
                                <Image className='my-5' src={require('../images/react.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={3}>
                                <Image className='my-5' src={require('../images/redux.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={3}>
                                <Image className='my-5' src={require('../images/nodejs.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={3}>
                                <Image className='my-5' src={require('../images/mongodb.png')} width={200}/>
                            </Col>
                        </Row>
                        <h2 className='mt-5'>Link</h2>
                        <hr/>
                        <a href='https://guarded-oasis-88838.herokuapp.com/'>website hosted on heroku</a><br/>
                        <a href='https://github.com/ismael101/Commerce'>repository on github</a>
                        </div>
                    </Tab>
                    <Tab eventKey="project" title="Project Manager" className='py-5 px-5'>
                        <div>
                        <Carousel>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/project1.png')}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/project2.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        style={{borderRadius:"50px"}}
                        src={require('../images/project3.png')}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        </Carousel>
                        <h2 className='mt-5'>Description</h2>
                        <hr/>
                        <p>This application allows a user to create and manage projects and tasks</p>
                        <h2 className='mt-5'>Stack</h2>
                        <hr/>
                        <Row>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/vue.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/nodejs.png')} width={200}/>
                            </Col>
                            <Col className='text-center' xs={12} sm={4}>
                                <Image className='my-5' src={require('../images/mongodb.png')} width={200}/>
                            </Col>
                        </Row>
                        <h2 className='mt-5'>Link</h2>
                        <hr/>
                        <a href='https://powerful-river-10701.herokuapp.com/'>website hosted on heroku</a><br/>
                        <a href='https://github.com/ismael101/ProjectManagement'>repository on github</a>
                        </div> 
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default Projects