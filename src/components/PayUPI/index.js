import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './PayUPIElements.js'
import img1 from '../../Images/21.png'


const Payupi = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Pay to UPI ID</FormH1>
                    <FormLabel htmlFor='for'>UPI ID</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' required />
                    <FormButton type='submit'>Pay</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Payupi;