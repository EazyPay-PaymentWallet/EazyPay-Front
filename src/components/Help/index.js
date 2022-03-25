import React, { useState } from 'react'
import { Container, Left, Right, Image, Wrapper, Title, TopLine, SubTitle, CardContainer, Button, Icon, Video, Icon1 } from '../Help/HelpElements'
import img3 from '../../Images/21.png';
import image1 from '../../Images/help1.png';
import image2 from '../../Images/help2.png';
import image3 from '../../Images/help3.png';
import image4 from '../../Images/help4.png';
import image5 from '../../Images/help5.png';
import image6 from '../../Images/help6.png';
import image7 from '../../Images/help7.png';
import image8 from '../../Images/help8.png';
import MiniCard from './MiniCard';

const Help = () => {
  const [open,setOpen] = useState(false);
  return (
    <Container>
        <Icon1 to="/">EazyPay</Icon1>
        <Left>
            <Image open={open} src={img3} />
        </Left>
        <Right>
            <Wrapper>
            <Title>
            Hi User. What can we help you with?
            </Title>
                <CardContainer>
                    <MiniCard to = '/' image={image1} text1='Your Orders'/>
                    <MiniCard to = '/' image={image2} text1='Returns and Refunds'/>
                    <MiniCard to = '/' image={image3} text1='Manage Addresses'/>
                    <MiniCard to = '/' image={image4} text1='Manage Prime'/>
                 </CardContainer>
                 <CardContainer>
                    <MiniCard to = '/' image={image5} text1='Payment Settings'/>
                    <MiniCard to = '/' image={image6} text1='Account Settings'/>
                    <MiniCard to = '/' image={image7} text1='EazyPay and Covid-19'/>
                    <MiniCard to = '/' image={image8} text1='Digital Services and Device Support'/>
                 </CardContainer>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Help