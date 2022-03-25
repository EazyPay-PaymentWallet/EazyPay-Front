import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './ElectricityBillElements.js'
import img1 from '../../Images/21.png'


const Electricitybill = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Electricity Bill</FormH1>
                    <FormLabel htmlFor='for'>State</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select State</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                    </select>
                    <FormLabel htmlFor='for'>Electricity Board</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select your Electricity Board</option>
                        <option>Tamil Nadu Electricity Board (TNEB)</option>
                    </select>
                    <FormLabel htmlFor='for'>Service Number</FormLabel>
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

export default Electricitybill;