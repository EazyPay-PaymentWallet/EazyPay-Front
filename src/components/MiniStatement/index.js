import React from 'react'
import { Container, Right, Left, Icon, Image, ImageIcon, TextDiv, Title, SubTitle, Desc, CAmount, DAmount, TextWrapper, TitleText, FormSelect } from './MiniStatementElements'
import img1 from '../../Images/21.png'
import iconup from '../../Images/up arrow.png'
import icondown from '../../Images/down arrow.png'


const Ministatement = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
                <TitleText>Mini Statement</TitleText>
                <FormSelect>
                    <select class="form-select form-select-sm mb-3" >
                        <option>Choose Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select class="form-select form-select-sm mb-3">
                        <option>Choose Year</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                      </select>
                </FormSelect>
                <TextWrapper>
                    <ImageIcon src={icondown} />
                    <TextDiv>
                        <Title>Credited</Title>
                        <SubTitle>UPI/CR/210036307501/</SubTitle>
                        <Desc>10/04</Desc>
                    </TextDiv> 
                    <CAmount>+ ₹6</CAmount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={iconup} />
                    <TextDiv>
                        <Title>Debited</Title>
                        <SubTitle>UPI/DR/210036180072/</SubTitle>
                        <Desc>10/04</Desc>
                    </TextDiv> 
                    <DAmount>- ₹150</DAmount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={iconup} />
                    <TextDiv>
                        <Title>Debited</Title>
                        <SubTitle>UPI/DR/209922861681/</SubTitle>
                        <Desc>09/04</Desc>
                    </TextDiv> 
                    <DAmount>- ₹55</DAmount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={icondown} />
                    <TextDiv>
                        <Title>Credited</Title>
                        <SubTitle>UPI/CR/209912412643/</SubTitle>
                        <Desc>08/04</Desc>
                    </TextDiv> 
                    <CAmount>+ ₹100</CAmount>
                </TextWrapper>
                <TextWrapper>
                    <ImageIcon src={iconup} />
                    <TextDiv>
                        <Title>Debited</Title>
                        <SubTitle>UPI/DR/209889101210/</SubTitle>
                        <Desc>08/04</Desc>
                    </TextDiv> 
                    <DAmount>- ₹200</DAmount>
                </TextWrapper>
            </Right>
        </Container>
    </>
  )
}
 
export default Ministatement;