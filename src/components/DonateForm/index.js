import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormLabelRadio, FormInput, DonorFormInput, CaptchaFormInput, FormInputRadio, FormButton, Image, RadioDiv, DonorDiv, Select, Text } from './DonateFormElements.js'
import img1 from '../../Images/21.png'


const Donateform = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Donate Organization</FormH1>
                    <FormLabel htmlFor='for'>I would like to contribute for Covid-19 Relief Service</FormLabel>
                    <FormInput type='number' placeholder='Amount' required />
                    <FormLabel htmlFor='for'>Would you like to recieve Tax Exemption Certificate ?</FormLabel>
                    <RadioDiv>
                        <FormInputRadio type="radio" value="Yes" /><FormLabelRadio>Yes</FormLabelRadio>
                        <FormInputRadio type="radio" value="No" /><FormLabelRadio>No</FormLabelRadio>
                    </RadioDiv>
                    <FormLabel htmlFor='for'>Donor Details</FormLabel>
                    <DonorDiv>
                        <Select>
                            <select class="form-select form-select-lg px-4 py-3" >
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </select>
                        </Select>
                        <DonorFormInput type='text' placeholder='Name' required />
                    </DonorDiv>
                    <FormInput type='number' placeholder='Pan Card Number' required />
                    <FormInput type='text' placeholder='Email' required />
                    <FormInput type='number' placeholder='Mobile Number' required />
                    <FormLabel htmlFor='for'>Captcha</FormLabel>
                    <DonorDiv>
                        <CaptchaFormInput type='number' placeholder='2' required /><Text> + </Text>
                        <CaptchaFormInput type='number' placeholder='6' required /><Text> = </Text>
                        <CaptchaFormInput type='number' required />
                    </DonorDiv>
                    <FormButton type='submit'>Donate</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Donateform;