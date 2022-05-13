import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './PayNumberElements.js'
import img1 from '../../Images/21.png'
import { useNavigate, useLocation } from 'react-router-dom';

const Paynumber = () => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.state)
    return (
        <>
            <Container>
                <Icon to="/">EazyPay</Icon>
                <Left>
                    <Image src={img1} />
                </Left>
                <Right>
                    <Form action="#">
                        <FormH1>Pay Number</FormH1>
                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput type='number' required />
                        <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                        <FormInput type='number' required />
                        <FormButton type='submit' onClick={() => navigate('/PaymentMethod')}>Pay</FormButton>
                    </Form>
                </Right>
            </Container>
        </>
  )
}

export default Paynumber;