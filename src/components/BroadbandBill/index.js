import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './BroadbandBillElements.js'
import img1 from '../../Images/21.png'


const Broadbandbill = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>LANDLINE/BROADBAND BILL</FormH1>
                    <FormLabel htmlFor='for'>Operator</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select operator to proceed</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                    </select>
                    <FormLabel htmlFor='for'>Landline Number with STD code</FormLabel>
                    <FormInput type='number' required />
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' required />
                    <FormButton type='submit'>Pay</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Broadbandbill;