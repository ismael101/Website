import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'

export default function Header(){
    return(
        <Jumbotron fluid='true' style={{bottom:"0px"}}>
            <Container>
                <h1>Footer</h1>
            </Container>
        </Jumbotron>
    )
}