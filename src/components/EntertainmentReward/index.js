import React from 'react'
import TravelCard from '../TravelReward/TravelCard'
import { Container, Right, Left, Icon, Image, CardContainer, Text } from './EntertainmentRewardElements'
import img1 from '../../Images/21.png'
import image1 from '../../Images/ent1.jpg';
import image2 from '../../Images/ent2.jpg';
import image3 from '../../Images/ent3.jpg';


const Entertainmentreward = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
              <Text>
              Entertainment
              </Text>
              <CardContainer>
                <TravelCard image={image1} type="GET 15% BACK" brand = "Amazon|Movie Tickets" desc="Up to: ₹100" valid="Valid till 31 May"/>
                <TravelCard image={image2} type="WIN UP TO ₹450 BACK" brand = "MPL" desc="Min order: ₹40" valid="Valid till 31 May"/>
                <TravelCard image={image3} type="WIN UP TO ₹500 BACK" brand = "Dream11" desc="Min order: ₹50" valid="Valid till 31 May"/>
              </CardContainer>
            </Right>
        </Container>
    </>
  )
}

export default Entertainmentreward;