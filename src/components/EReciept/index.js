import React from 'react'
import { Container, Wrapper, Header, Main, OpenDialogButton, Body, Footer, ProceedButton, HeaderTitle, HeaderSubTitle, Left, Right, Text, BodyLeft, BodyRight, Image } from './ERecieptElements.js'
import { useNavigate } from 'react-router-dom';
import img1 from '../../Images/tick.png'

const Dialog = ({ closeModal }) => {
    const navigate = useNavigate()
    return (
        <Container>
            <Wrapper>
                <Main>
                    <OpenDialogButton onClick={() => closeModal(false)}> X </OpenDialogButton>
                </Main>
                <Header>
                    <Left>
                        <Image src={img1} />
                    </Left>
                    <Right>
                        <HeaderTitle>Payment Successful</HeaderTitle>
                        <HeaderSubTitle>Your payment has been processed. Details of transaction are included below.</HeaderSubTitle>
                    </Right>
                </Header>
                <Body>
                    <BodyLeft>
                        <Text><b>Amount</b></Text>
                        <Text>Order ID</Text>
                        <Text>Payment Type</Text>
                        <Text>Transaction Time</Text>
                    </BodyLeft>
                    <BodyRight>    
                        <Text><b>1300.00</b></Text>
                        <Text>24780935</Text>
                        <Text>UPI</Text>
                        <Text>13-Jun-2022-13:19:06</Text>
                    </BodyRight>
                </Body>
                <Footer>
                    <ProceedButton onClick={()=>navigate('/')}>Proceed</ProceedButton>
                </Footer>
            </Wrapper>
        </Container>
  )
}

export default Dialog;