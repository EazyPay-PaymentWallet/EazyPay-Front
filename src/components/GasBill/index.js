import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './GasBillElements.js'
import img1 from '../../Images/21.png'


const Gasbill = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>LPG Cylinder Payment</FormH1>
                    <FormLabel htmlFor='for'>Provider</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select provider to proceed</option>
                        <option>Bharat Gas</option>
                        <option>Indane Gas</option>
                        <option>HP Gas</option>
                    </select>
                    <FormLabel htmlFor='for'>LPG ID/Registered Mobile number</FormLabel>
                    <FormInput type='number' placeholder='Please enter your LPG ID/Registered Mobile number' required />
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' placeholder='Amount' required />
                    <FormButton type='submit'>Pay Bill</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Gasbill;