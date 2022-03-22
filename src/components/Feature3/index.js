import React from 'react'
import { Container, Left, Image, Right, TopLine, Title, SubTitle, Desc, CardContainer } from './Feature3Elements'
import img2 from '../../Images/20.png';
import image1 from '../../Images/icon20.png';
import image2 from '../../Images/icon21.png';
import image3 from '../../Images/icon22.png';
import image4 from '../../Images/icon23.png';
import image5 from '../../Images/icon24.png';
import image6 from '../../Images/icon25.png';
import MiniCard from './MiniCard';

const Feature3 = () => {
  return (
    <Container>
      <Left>
        <TopLine>Rewards</TopLine>
        <Title>
            Earn Rewards Daily
        </Title>
        <SubTitle>Win scratch cards via Pay or Shopping actions.</SubTitle>
        <CardContainer>
            <MiniCard to='/FoodOrders' image={image1} text='Food Orders'/>
            <MiniCard to='/StoresNearYou' image={image2} text='Stores Near You'/>
            <MiniCard to='/Shopping' image={image3} text='Shopping'/>
        </CardContainer>
        <CardContainer>
            <MiniCard to='/Travel' image={image4} text='Travel'/>
            <MiniCard to='/Entertainment' image={image5} text='Entertainment'/>
            <MiniCard to='/Health&Fitness' image={image6} text='Health & Fitness'/>
        </CardContainer>
      </Left>
      <Right>
        <Image src={img2}/>
      </Right>
    </Container>
  )
}

export default Feature3