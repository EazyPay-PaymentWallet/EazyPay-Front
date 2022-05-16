import React, { useState } from 'react';
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image } from './SignupElements';
import img1 from '../../Images/21.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';

const pStyle = styled.p`
  color: white;
`;

const Signup = () => {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formError, setFormError] = useState("")

    const register = e => {
        e.preventDefault()
        // console.log('SignUp Form')
        if(fullName == '' || email == '' || phoneNumber == '' || password == '' || confirmPassword == ''){
            setFormError("Please fill every field")
            return
        }

        if(password != confirmPassword){
            setFormError("Password doesn't match")
        }
        else if(phoneNumber.length != 10){
            setFormError("Please enter a valid phone number")
        }
        else{
            Axios.post("http://localhost:3001/SignUp",{
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            }).then((response) => {
                console.log('response');
                if(!response.data.error) {
                    navigate('/Login')
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
                    <FormH1>Create your account</FormH1>
                    <p style= {{color: 'yellow'}}>{formError ? formError : ''}</p>
                    <FormLabel htmlFor='for'>Full Name</FormLabel>
                    <FormInput type='text' onChange={(e) => { setFullName(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' onChange={(e) => { setEmail(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Phone Number</FormLabel>
                    <FormInput type='number' onChange={(e) => { setPhoneNumber(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={(e) => { setPassword(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' onChange={(e) => { setConfirmPassword(e.target.value)}} required />
                    <FormButton type='submit' onClick={register}>Register</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Signup