import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Left, Image, Right, TopLine, Title, SubTitle, Desc, CardContainer, Img } from './AdditionalElements'
import img2 from '../../Images/23.png';
import image1 from '../../Images/add1.jpg';
import image2 from '../../Images/add2.jpg';
import image3 from '../../Images/add3.jpg';

const AdditionalSection = () => {
    const navigate = useNavigate()
    return (
        <Container>
        <Left>
            <Image src={img2}/>
        </Left>
        <Right>
            <CardContainer>
                <Img src={image1} onClick={()=>navigate('/DonateOrganization')}/>
                <Img src={image2} onClick={()=>navigate('/')}/>
                <Img src={image3} onClick={()=>navigate('/')}/>
            </CardContainer>
        </Right>
        </Container>
  )
}

export default AdditionalSection;