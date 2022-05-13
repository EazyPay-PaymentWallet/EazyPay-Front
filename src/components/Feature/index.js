import React from 'react'
import { Container, Left, Image, Right, TopLine, Title, SubTitle, Desc, CardContainer, Summary, SummaryAdd, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, SummaryAddLinks } from './FeatureElements';
import MiniCard from './MiniCard';
import imag1 from '../../Images/icon1.jpg';
import imag2 from '../../Images/icon2.jpg';

const Feature = (props) => {
  console.log(props)
  return (
    <Container id='intro'>
      <Left>
        <Summary>
          <SummaryTitle>EazyPay Wallet</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Balance</SummaryItemText>
            <SummaryItemPrice>₹ 1300.00</SummaryItemPrice>
          </SummaryItem>
          <SummaryAdd>
            <SummaryAddLinks to='/AddMoney'>Add Money</SummaryAddLinks>
            <SummaryAddLinks to='/TransactionHistory'>Your Transactions</SummaryAddLinks>
            <SummaryAddLinks to='/MiniStatement'>Monthly Statement</SummaryAddLinks>
            <SummaryAddLinks to='/'>Account Settings</SummaryAddLinks>
          </SummaryAdd>
        </Summary>
      </Left>
      <Right>
        <TopLine>PAY</TopLine>
        <Title>
          Unlimited Transactions with Zero fees
        </Title>
        <SubTitle>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.</SubTitle>
        <CardContainer>
          <MiniCard to='/PayNumber' image={imag1} text='Pay Number' props = {props}/>
          <MiniCard to='/BankTransfer' image={imag2} text='Bank Transfer'/>
          <MiniCard to='/PayUPI' image={imag1} text='Pay UPI id'/>
        </CardContainer>
      </Right>
    </Container>
  )
}

export default Feature