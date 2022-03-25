import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, FormLabelWrap } from './AddMoneyElements.js'
import img1 from '../../Images/21.png'


const Addmoney = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>EazyPay balance</FormH1>
                    <FormLabelWrap>
                        <FormLabel htmlFor='for'>Current Balance: 1300</FormLabel>
                        <FormLabel htmlFor='for'>You can add upto ₹ 8700.0</FormLabel>
                    </FormLabelWrap>
                    <FormLabel htmlFor='for'>Recharge Amount</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Choose amount</option>
                        <option>₹ 500</option>
                        <option>₹ 1000</option>
                        <option>₹ 2000</option>
                        <option>₹ 3000</option>
                    </select>
                    <FormButton type='submit'>Add Money to Balance</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Addmoney;