import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './RechargeElements.js'
import img1 from '../../Images/21.png'


const Mobilerecharge = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Mobile Recharge</FormH1>
                    <FormLabel htmlFor='for'>Phone Number</FormLabel>
                    <FormInput type='number' required />
                    <FormLabel htmlFor='for'>Operator/Circle</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Recharge Amount</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>View Plans</option>
                        <option>₹ 239</option>
                        <option>₹ 209</option>
                        <option>₹ 666</option>
                        <option>₹ 179</option>
                        <option>₹ 149</option>
                        <option>₹ 199</option>
                        <option>₹ 499</option>
                        <option>₹ 799</option>
                        <option>₹ 2999</option>
                        <option>₹ 719</option>
                        <option>₹ 119</option>
                        <option>₹ 299</option>
                        <option>₹ 91</option>
                        <option>₹ 479</option>
                        <option>₹ 75</option>
                        <option>₹ 181</option>
                    </select>
                    <FormButton type='submit'>Pay</FormButton>
                </Form>
                <Form action='#'>
                    <FormH1>Offers</FormH1>
                    <FormText>100% back up to Rs.35 On 1st Mobile Prepaid recharge using any payment method before before 01-Apr. Valid 1 time per user.</FormText>
                    <FormText>Win Scratch Cards Daily Recharge and Earn Cashback or Offers as Rewards Daily.</FormText>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Mobilerecharge