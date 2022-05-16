import React from 'react'
import TravelCard from '../TravelReward/TravelCard'
import { Container, Right, Left, Icon, Image, CardContainer, Text } from './HealthRewardElements'
import img1 from '../../Images/21.png'
import image1 from '../../Images/health1.jpg';


const Healthreward = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
              <Text>
              Health
              </Text>
              <CardContainer>
                <TravelCard image={image1} type="WIN UP TO ₹500 BACK" brand = "PharmEasy" desc="Min order: ₹100" valid="Valid till 31 May"/>
              </CardContainer>
            </Right>
        </Container>
    </>
  )
}

export default Healthreward;