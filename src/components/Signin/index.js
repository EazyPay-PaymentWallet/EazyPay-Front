import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, Text1, Text2, TextLink } from './SigninElements'
import img1 from '../../Images/21.png'


const Signin = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Login to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <Text1>Forgot your Password?</Text1>
                    <FormButton type='submit'>Log In</FormButton>
                    <Text2>Don't have account? Sign Up</Text2>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Signin