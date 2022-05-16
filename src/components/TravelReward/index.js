import React from 'react'
import TravelCard from './TravelCard'
import { Container, Right, Left, Icon, Image, CardContainer, Text } from './TravelRewardElements'
import img1 from '../../Images/21.png'
import image1 from '../../Images/Travel1.jpg';
import image2 from '../../Images/Travel2.jpg';
import image3 from '../../Images/Travel3.jpg';
import image4 from '../../Images/Travel4.jpg';


const Travelreward = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
              <Text>
              Travel
              </Text>
              <CardContainer>
                <TravelCard image={image1} type="GET FLAT ₹500 BACK" brand = "Amazon|Daily Essentials" desc="Min order: ₹2500" valid="Valid till 31 Mar"/>
                <TravelCard image={image2} type="WIN 20% BACK" brand = "Amazon|Luggage" desc="Min order: ₹200" valid="Valid till 31 Mar"/>
                <TravelCard image={image3} type="WIN UP TO ₹75 BACK" brand = "Amazon|Baby Products" desc="Min order: ₹500" valid="Valid till 31 Mar"/>
              </CardContainer>
              <CardContainer>
                <TravelCard image={image4} type="GET FLAT ₹500 BACK" brand = "Amazon|Daily Essentials" desc="Min order: ₹2500" valid="Valid till 31 Mar"/>
              </CardContainer>
            </Right>
        </Container>
    </>
  )
}

export default Travelreward;