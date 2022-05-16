import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './PostpaidRechargeElements.js'
import img1 from '../../Images/21.png'


const Postpaidrecharge = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Mobile PostPaid Recharge</FormH1>
                    <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                    <FormInput type='number' placeholder='Please enter your Mobile Number' required />
                    <FormLabel htmlFor='for'>Operator</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select operator to proceed</option>
                        <option>Airtel Postpaid</option>
                        <option>BSNL Mobile Postpaid Postpaid</option>
                        <option>Jio Postpaid</option>
                        <option>MTNL Mumbai Dolphin</option>
                        <option>Vi Postpaid</option>
                    </select>
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' placeholder='Amount' required />
                    <FormButton type='submit'>Pay Bill</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Postpaidrecharge;