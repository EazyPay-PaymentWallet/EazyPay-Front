import React from 'react'
import ShoppingCard from './ShoppingCard'
import { Container, Right, Left, Icon, Image, CardContainer, Text } from './ShoppingRewardElements'
import img1 from '../../Images/21.png'
import image1 from '../../Images/shopping1.jpg';
import image2 from '../../Images/shopping2.jpg';
import image3 from '../../Images/shopping3.jpg';


const Shoppingreward = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
              <Text>
              Shopping
              </Text>
              <CardContainer>
                <ShoppingCard image={image1} type="GET FLAT ₹500 BACK" brand = "Amazon|Daily Essentials" desc="Min order: ₹2500" valid="Valid till 31 Mar"/>
                <ShoppingCard image={image2} type="WIN 20% BACK" brand = "Amazon|Luggage" desc="Min order: ₹200" valid="Valid till 31 Mar"/>
                <ShoppingCard image={image3} type="WIN UP TO ₹75 BACK" brand = "Amazon|Baby Products" desc="Min order: ₹500" valid="Valid till 31 Mar"/>
              </CardContainer>
            </Right>
        </Container>
    </>
  )
}

export default Shoppingreward;