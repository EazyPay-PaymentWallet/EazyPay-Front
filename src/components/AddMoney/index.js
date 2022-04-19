import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormLabel1, Balance, Add, FormInput, FormButton, Image, MoneyWrapper, FormLabelWrap, MoneyButton } from './AddMoneyElements.js'
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
                        <FormLabel1 htmlFor='for'>Current Balance: <Balance>1300</Balance></FormLabel1>
                        <FormLabel1 htmlFor='for'>You can add upto <Add>₹ 8700.0</Add></FormLabel1>
                    </FormLabelWrap>
                    <FormLabel htmlFor='for'>Enter Amount</FormLabel>
                    <FormInput type='number' placeholder='Amount'></FormInput>
                    <FormButton type='submit'>Add Money to Balance</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Addmoney;