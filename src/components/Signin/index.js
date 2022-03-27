import React, { useState } from 'react';
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, Text1, Text2, TextLink } from './SigninElements'
import img1 from '../../Images/21.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")

    const login = e => {
        e.preventDefault()
        console.log('SignIn Form')
        if(email == '' || password == ''){
            return
        }

        Axios.post("http://localhost:3001/SignIn",{
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data);
            if(!response.data.error) {
                navigate('/')
            }
            else{
                setFormError(response.data.error)
            }
        })
    } 
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
                    <FormInput type='email' onChange={(e) => { setEmail(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={(e) => { setPassword(e.target.value)}} required />
                    <Text1>Forgot your Password?</Text1>
                    <FormButton type='submit' onClick={login} >Log In</FormButton>
                    <Text2>Don't have account? Sign Up</Text2>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Signin