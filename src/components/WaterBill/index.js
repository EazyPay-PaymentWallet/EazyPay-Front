import React from 'react'
import { Container, Right, Left, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Image, FormText, select } from './WaterBillElements.js'
import img1 from '../../Images/21.png'


const Waterbill = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <Form action="#">
                    <FormH1>Water Bill</FormH1>
                    <FormLabel htmlFor='for'>Water Board</FormLabel>
                    <select class="form-select form-select-lg">
                        <option>Select water board to proceed</option>
                        <option>Bangalore Water Supply and Sewerage Board</option>
                        <option>Chennai Metropolitan Water Supply and Sewerage Board</option>
                        <option>Delhi Development Authority - Water</option>
                        <option>Mysuru City Corporation</option>
                        <option>PHED - Rajasthan - Water Bill</option>
                        <option>Pune Municipal Corporation - Water</option>
                    </select>
                    <FormLabel htmlFor='for'>RR Number</FormLabel>
                    <FormInput type='number' placeholder='Please enter your RR Number' required />
                    <FormLabel htmlFor='for'>Amount to Pay</FormLabel>
                    <FormInput type='number' placeholder='Amount' required />
                    <FormButton type='submit'>Pay Bill</FormButton>
                </Form>
            </Right>
        </Container>
    </>
  )
}

export default Waterbill;