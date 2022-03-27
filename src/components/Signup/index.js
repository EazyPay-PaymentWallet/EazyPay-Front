import React, { useState } from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image } from './SignupElements'
import img1 from '../../Images/21.png'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

const Signup = () => {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [formError, setFormError] = useState("")

    const register = e => {
        e.preventDefault()
        console.log('SignUp Form')
        if(fullName == '' || email == '' || phoneNumber == '' || password == ''){
            return
        }

        Axios.post("http://localhost:3001/SignUp",{
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
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
                    <FormH1>Create your account</FormH1>
                    <p>{formError ? formError : ''}</p>
                    <FormLabel htmlFor='for'>Full Name</FormLabel>
                    <FormInput type='text' onChange={(e) => { setFullName(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' onChange={(e) => { setEmail(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Phone Number</FormLabel>
                    <FormInput type='number' onChange={(e) => { setPhoneNumber(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={(e) => { setPassword(e.target.value)}} required />
                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit' onClick={register}>Register</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Signup