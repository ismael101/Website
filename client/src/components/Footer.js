import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function Header(){
    return(
        <footer className='py-5'>
            <Container>
                <h3 className='text-center'>Stay Connected</h3>
                <div className='text-center'>
                    <a href='https://github.com/ismael101'><Image className='my-5 mx-2' src={require('../images/github.png')} width={50}/></a>
                    <a href='https://www.linkedin.com/in/ismael-mohamed-065b19139/'><Image className='my-5 mx-2' src={require('../images/linkedin.webp')} width={50}/></a>
                </div>
            </Container>
        </footer>
    )
}