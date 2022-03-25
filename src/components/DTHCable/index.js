import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './DTHCableElements.js'
import img1 from '../../Images/21.png'


const Dthcable = () => {
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
                    <FormLabel htmlFor='for'>Operator</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Choose Operator</option>
                        <option>d2h</option>
                        <option>Tata Play</option>
                        <option>Sun Direct</option>
                        <option>Dish TV</option>
                        <option>Airtel Digital TV</option>
                        <option>Asianet Digital</option>
                        <option>Paymytv - Den</option>
                        <option>Paymytv - Hathway</option>
                        <option>GTPL Hathway Limited</option>
                        <option>INDigital</option>
                        <option>VDV Digital</option>
                    </select>
                    <FormLabel htmlFor='for'>Subscriber ID</FormLabel>
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

export default Dthcable;