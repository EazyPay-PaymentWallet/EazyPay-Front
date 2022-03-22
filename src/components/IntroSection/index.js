import React from 'react'
import { Container, Left, Right, Title, Desc, Info, Button, Contact, ContactText, Phone, Image } from './IntroElements'
import img1 from '../../Images/3.png'

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Most-Loved Payment Wallet</Title>
            <Desc>Recharge & pay bills, book flights
             & movie tickets, open a savings account, 
             invest in stocks & mutual funds, and do 
             a lot more.</Desc>
            <Info>
                <Button>Download EazyPay App</Button>
                <Contact>
                  <Phone>Call Us (012) 345 - 6789</Phone>
                  <Phone>Mail Us EazyPay@gmail.com</Phone>
                  <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right><Image src={img1} /></Right>
    </Container>
  )
}

export default Intro;