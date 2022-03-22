import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './BankTransferElements.js'
import img1 from '../../Images/21.png'


const Banktransfer = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Bank Transfer</FormH1>
                    <FormLabel htmlFor='for'>Account Number</FormLabel>
                    <FormInput type='number' required />
                    <FormLabel htmlFor='for'>Re-enter Account Number</FormLabel>
                    <FormInput type='number' required />
                    <FormLabel htmlFor='for'>IFSC</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Recipient Name</FormLabel>
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

export default Banktransfer;