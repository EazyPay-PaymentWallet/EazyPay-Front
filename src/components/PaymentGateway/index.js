import React from 'react'
import img1 from '../../Images/15.png'
import visa from '../../Images/visa.png'
import mc from '../../Images/mc.gif'
import reciept from '../../pages/ereciept'
import { useNavigate } from 'react-router-dom';
import { Container, Right, Left, Icon, Image, RightContainer, Wrapper, Title, EPTitle, EPLeft, EPRight, EazyPay, EPText, EPWrapper, SPTitle, SPCard, SavedPay, SPWrapper, SPHeader, SPHeader1, SPText, OPTitle, OtherPay, OPWrapper,OPWrapper1, OPText, OPAddCard, OPDesc, OPImage, RightPayment, OrderDetails, OrderText, OrderPrice, OrderTotal, TotalPrice, PaymentButton, PaymentText, Total, FormInputRadio } from './PaymentGatewayElements.js'

const Paymentgateway = () => {
  const navigate = useNavigate()
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
              <Image src={img1} />
            </Left>
            <Right>
              <Title>Select a payment method</Title>
              <RightContainer>
                <Wrapper>
                  <EazyPay>
                    <EPTitle>Your available balance</EPTitle>
                    <EPWrapper>
                    <EPLeft>
                      Use your ₹ 385.00 Eazy Pay balance
                    </EPLeft>
                    <EPRight>
                      <EPText>1. For optimal utilization of your Eazy Pay balance, balance expiring the earliest will be redeemed first.</EPText><br/>
                      <EPText>2. Your Eazy Pay balance cannot be used along with Cash on Delivery or the EMI payment modes.</EPText>
                    </EPRight>
                    </EPWrapper>
                  </EazyPay>
                </Wrapper>
                <Wrapper>
                  <SavedPay>
                    <SPTitle>Your saved credit and debit cards</SPTitle>
                    <SPHeader>
                      <SPHeader1>Name</SPHeader1>
                      <SPHeader1>Expires on</SPHeader1>
                    </SPHeader>
                    <SPWrapper>
                      <SPCard>
                        <SPText><b>State Bank of India Debit Card</b> ending in 5489</SPText>
                        <SPText>DAYANANTHAVEL</SPText>
                        <SPText>11/2023</SPText>
                      </SPCard>
                      <SPCard>
                        <FormInputRadio type="radio" value="Yes" /><FormLabelRadio>
                          <SPText><b>Canara Bank Debit Card</b> ending in 2244</SPText>
                          <SPText>ARJUN</SPText>
                          <SPText>11/2023</SPText>
                        </FormLabelRadio>
                      </SPCard>
                    </SPWrapper>
                  </SavedPay>
                </Wrapper>
                <Wrapper>
                  <OtherPay>
                    <OPTitle>Another payment method</OPTitle>
                    <OPWrapper>
                      <OPAddCard>Add Debit/Credit/ATM Card</OPAddCard>
                      <OPDesc>You can save your cards as per new RBI guidelines. Learn More</OPDesc>
                      <OPImage src={visa} />
                      <OPImage src={mc} />
                    </OPWrapper>
                    <OPWrapper1>
                      <OPAddCard>Net Banking</OPAddCard>
                      <select>
                        <option>Choose an option</option>
                        <option>₹ 239</option>
                        <option>₹ 209</option>
                        <option>₹ 666</option>
                        <option>₹ 179</option>
                        <option>₹ 149</option>
                        <option>₹ 199</option>
                        <option>₹ 499</option>
                        <option>₹ 799</option>
                        <option>₹ 2999</option>
                        <option>₹ 719</option>
                        <option>₹ 119</option>
                        <option>₹ 299</option>
                        <option>₹ 91</option>
                        <option>₹ 479</option>
                        <option>₹ 75</option>
                        <option>₹ 181</option>
                      </select>
                      <OPText>For faster payment and instant refund, please use UPI Why?</OPText>
                    </OPWrapper1>
                    <OPWrapper1>
                      <OPAddCard>Other UPI Apps</OPAddCard>
                    </OPWrapper1>
                    <OPWrapper1>
                      <OPAddCard>Pay on Delivery</OPAddCard>
                      <OPText>Due to high demand and to ensure social distancing, Pay on Delivery is not available.</OPText>
                    </OPWrapper1>
                  </OtherPay>
                </Wrapper>
              </RightContainer>
            </Right>
            <RightPayment>
              <PaymentButton onClick={()=>navigate('/E-reciept')}>Place Order and Pay</PaymentButton>
              <PaymentText>ORDER SUMMARY</PaymentText>
              <OrderDetails>
                <OrderText>Items:</OrderText>
                <OrderPrice>₹ 1319</OrderPrice>
              </OrderDetails>
              <Total>
                <OrderTotal>Order Total:</OrderTotal>
                <TotalPrice>₹ 1319</TotalPrice>
              </Total>
            </RightPayment>
        </Container>
    </>
  )
}

export default Paymentgateway