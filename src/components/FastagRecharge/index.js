import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, FormH2 } from './FastagRechargeElements.js'
import img1 from '../../Images/21.png'


const Fastagrecharge = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Google Play Recharge</FormH1>
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' placeholder="Enter amount between 10 and 5000" required />
                    <FormButton type='submit'>Pay</FormButton>
                </Form>
                <Form action='#'>
                    <FormH2>Offers</FormH2>
                    <FormText>5% back up to Rs.200 On Google Play Recharge Code using Amazon Pay UPI before 01-Apr. Valid 10 times per user.</FormText>
                    <FormText>Earn Rs.50 back On Google Play Recharge Code of min value Rs.100 using Amazon Pay UPI before 01-Apr.</FormText>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Fastagrecharge;