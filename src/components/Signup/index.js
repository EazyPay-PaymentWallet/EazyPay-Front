import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image } from './SignupElements'
import img1 from '../../Images/21.png'


const Signup = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Create your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Phone Number</FormLabel>
                    <FormInput type='number' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Register</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Signup