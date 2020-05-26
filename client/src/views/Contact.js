import React, {Component} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'
import axios from 'axios'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {name:'',email:'',subject:'',message:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){

    }
    handleSubmit(){

    }
    render(){
        return(
            <div style={{height:'80vh'}}>
                <Container>
                    <Card className='py-5 px-5' style={{borderRadius:'50px', width:'30rem', marginLeft:'auto', marginRight:'auto', marginTop:'15vh'}}>
                        <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter Subject" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Enter Message"/>
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