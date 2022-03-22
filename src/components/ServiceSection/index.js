import React, { useState } from 'react'
import { Container, Left, Right, Image, Wrapper, Title, TopLine, SubTitle, CardContainer, Button, Icon, Video } from '../ServiceSection/ServiceElements'
import img3 from '../../Images/15.png';
import image1 from '../../Images/icon3.png';
import image2 from '../../Images/icon5.png';
import image3 from '../../Images/icon11.png';
import image4 from '../../Images/icon14.png';
import image5 from '../../Images/icon13.png';
import image6 from '../../Images/icon4.png';
import image7 from '../../Images/icon9.png';
import image8 from '../../Images/icon8.png';
import image9 from '../../Images/icon6.png';
import image10 from '../../Images/icon7.png';
import MiniCard from './MiniCard';
import Play from '../../Images/play.png'
//import video from '../../Images/how-eazypay-works.mp4'

const Services = () => {
  const [open,setOpen] = useState(false);
  return (
    <Container id='recharge'>
        <Left>
            <Image open={open} src={img3} />
        </Left>
        <Right>
            <Wrapper>
            <TopLine>RECHARGE & BILL PAYMENTS</TopLine>
            <Title>
            Upto 80% Cashback every hour
            </Title>
            <SubTitle>Get upto 80% cashback on any bill payment every hour.</SubTitle>
                 <CardContainer>
                    <MiniCard to = '/MobileRecharge' image={image1} text='Mobile Recharge'/>
                    <MiniCard to = '/DTHCableTV' image={image2} text='DTH / Cable TV'/>
                    <MiniCard to = '/GooglePlay' image={image3} text='Google Play'/>
                    <MiniCard to = '/FASTagRecharge' image={image4} text='FASTag Recharge'/>
                    <MiniCard to = '/Education' image={image5} text='Education'/>
                 </CardContainer>
                 <CardContainer>
                    <MiniCard to = '/Electricity' image={image6} text='Electricity'/>
                    <MiniCard to = '/BroadbandLandline' image={image7} text='Broadband / Landline'/>
                    <MiniCard to = '/Water' image={image8} text='Water'/>
                    <MiniCard to = '/PostpaidMobile' image={image9} text='Postpaid Mobile'/>
                    <MiniCard to = '/GasBooking' image={image10} text='Gas Cylinder Booking'/>
                 </CardContainer>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Services

//line 14 - <Video open={open} autoPlay loop controls src={video} />
//line 28 - <Button onClick={() => setOpen(true)}><Icon src={Play} />How it works</Button>