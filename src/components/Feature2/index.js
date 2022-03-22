import React from 'react'
import { Container, Left, Image, Right, TopLine, Title, SubTitle, Desc, CardContainer } from './Feature2Elements'
import img2 from '../../Images/17.png';
import image1 from '../../Images/icon15.png';
import image2 from '../../Images/icon16.png';
import image3 from '../../Images/icon17.jpg';
import image4 from '../../Images/icon18.jpg';
import image5 from '../../Images/icon19.jpg';
import MiniCard from './MiniCard';

const Feature2 = () => {
  return (
    <Container id='travel'>
      <Left>
        <TopLine>Travel & Insurance</TopLine>
        <Title>
            Never Miss the Expiry Date
        </Title>
        <SubTitle>Allow us to remind you.</SubTitle>
        <CardContainer>
            <MiniCard to='/Trains' image={image1} text='Trains'/>
            <MiniCard to='/Flights' image={image2} text='Flights'/>
            <MiniCard to='/BusTickets' image={image3} text='Bus Tickets'/>
        </CardContainer>
        <CardContainer>
            <MiniCard to='/CarInsurance' image={image4} text='Car Insurance'/>
            <MiniCard to='/BikeInsurance' image={image5} text='Bike Insurance'/>
        </CardContainer>
      </Left>
      <Right>
        <Image src={img2}/>
      </Right>
    </Container>
  )
}

export default Feature2