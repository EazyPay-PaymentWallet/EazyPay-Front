import React, { useState } from 'react';
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image , Text1, Text2 } from './SigninElements';
import img1 from '../../Images/21.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';

const pStyle = styled.p`
  color: white;
`;

const SignIn = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")

    const login = e => {
        e.preventDefault()
        console.log('SignIn Form')
        if(email == '' || password == ''){
            setFormError("Please fill every field")
            return
        }
        else{
            Axios.post("http://localhost:3001/Login",{
                email: email,
                password: password
            }).then((response) => {
                if(!response.data.error) {
                    console.log(response.data)
                    navigate('/',{state:{phone:response.data.phone,fullname:response.data.name}})
                }

                if (response.data.error) {
                    console.log('error', response.data.error)
                }
                setFormError(response.data.error)
            })
        }
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
                    <p style= {{color: 'yellow'}}>{formError ? formError : ''}</p>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' onChange={(e) => { setEmail(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={(e) => { setPassword(e.target.value)}} required />
                    <Text1>Forgot your Password?</Text1>
                    <FormButton type='submit' onClick={login} >Log In</FormButton>
                    <Text2 onClick={()=>navigate("/SignUp")}>Don't have account? Sign Up</Text2>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default SignIn