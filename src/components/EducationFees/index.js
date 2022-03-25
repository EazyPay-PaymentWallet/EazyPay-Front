import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './EducationFeesElements.js'
import img1 from '../../Images/21.png'


const Mobilerecharge = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Education Fees</FormH1>
                    <FormLabel htmlFor='for'>State</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select State</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                    </select>
                    <FormLabel htmlFor='for'>City</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select City</option>
                        <option>Chennai</option>
                        <option>Madurai</option>
                        <option>Coimbatore</option>
                        <option>Trichy</option>
                        <option>Salem</option>
                        <option>Karaikudi</option>
                    </select>
                    <FormLabel htmlFor='for'>Institution</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select Institution</option>
                        <option>Amrita Vishwa Vidyapeetham</option>
                        <option>PSG College of Engineering</option>
                        <option>Kumaraguru College of Engineering</option>
                        <option>Sri Krishna College of Engineering</option>
                    </select>
                    <FormLabel htmlFor='for'>Admission Number</FormLabel>
                    <FormInput type='text' placeholder="Please enter your admission number" required />
                    <FormLabel htmlFor='for'>Fee Type</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Please select your Fee Type</option>
                        <option>Tution Fee</option>
                        <option>Hostel Fee</option>
                        <option>Mess Fee</option>
                    </select>
                    <FormLabel htmlFor='for'>Academic Year</FormLabel>
                    <FormInput type='text' placeholder="YYYY-YYYY" required />  
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' required />
                    <FormButton type='submit'>Pay</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Mobilerecharge