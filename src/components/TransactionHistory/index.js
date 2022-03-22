import React from 'react'
import { Container, Right, Left, Icon, Image, ImageIcon, TextDiv, Title, SubTitle, Desc, Amount, TextWrapper } from './HistoryElements'
import img1 from '../../Images/21.png'
import icon from '../../Images/amazonIcon.png'


const Transactionhistory = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <TextWrapper>
                    <ImageIcon src={icon} />
                    <TextDiv>
                        <Title>Paid on Amazon</Title>
                        <SubTitle>Amazon Pay Balance</SubTitle>
                        <Desc>13 Jun 2022, 01:19 PM</Desc>
                    </TextDiv> 
                    <Amount>- ₹1319</Amount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={icon} />
                    <TextDiv>
                        <Title>Paid on Amazon</Title>
                        <SubTitle>Amazon Pay Balance</SubTitle>
                        <Desc>13 Jun 2022, 01:19 PM</Desc>
                    </TextDiv> 
                    <Amount>- ₹1319</Amount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={icon} />
                    <TextDiv>
                        <Title>Paid on Amazon</Title>
                        <SubTitle>Amazon Pay Balance</SubTitle>
                        <Desc>13 Jun 2022, 01:19 PM</Desc>
                    </TextDiv> 
                    <Amount>- ₹1319</Amount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={icon} />
                    <TextDiv>
                        <Title>Paid on Amazon</Title>
                        <SubTitle>Amazon Pay Balance</SubTitle>
                        <Desc>13 Jun 2022, 01:19 PM</Desc>
                    </TextDiv> 
                    <Amount>- ₹1319</Amount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={icon} />
                    <TextDiv>
                        <Title>Paid on Amazon</Title>
                        <SubTitle>Amazon Pay Balance</SubTitle>
                        <Desc>13 Jun 2022, 01:19 PM</Desc>
                    </TextDiv> 
                    <Amount>- ₹1319</Amount>
                </TextWrapper>
            </Right>
        </Container>
    </>
  )
}

export default Transactionhistory;