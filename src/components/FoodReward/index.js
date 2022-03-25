import React from 'react'
import FoodCard from './FoodCard'
import { Container, Right, Left, Icon, Image, CardContainer, Text } from './FoodRewardElements'
import img1 from '../../Images/21.png'
import image1 from '../../Images/food1.jpg';
import image2 from '../../Images/food4.jpg';
import image3 from '../../Images/food3.jpg';


const Foodreward = () => {
  return (
    <>
        <Container>
            <Icon to="/">EazyPay</Icon>
            <Left>
                <Image src={img1} />
            </Left>
            <Right>
              <Text>
              Food orders
              </Text>
              <CardContainer>
                <FoodCard image={image1} type="WIN UP TO ₹500 BACK" brand = "Dominos" desc="Min order: ₹499" valid="Valid till 31 Mar"/>
                <FoodCard image={image2} type="WIN UP TO ₹500 BACK" brand = "PopEyes" desc="Min order: ₹499" valid="Valid till 31 Mar"/>
                <FoodCard image={image3} type="WIN UP TO ₹500 BACK" brand = "Licious" desc="Min order: ₹600" valid="Valid till 31 Mar"/>
              </CardContainer>
            </Right>
        </Container>
    </>
  )
}

export default Foodreward;