import React, {Component} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'

class Contact extends Component{
    render(){
        return(
            <div style={{height:'90vh'}}>
                <Container>
                    <Card className='py-5 px-5' style={{borderRadius:'50px', width:'32rem'}}>
                        <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Contact