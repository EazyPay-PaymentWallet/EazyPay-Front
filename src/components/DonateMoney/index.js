import React from 'react'
import { Container, Right, Left, Icon, Image, Img } from './DonateElements.js'
import img1 from '../../Images/15.png'
import img2 from '../../Images/donate1.jpg'
import img3 from '../../Images/donate2.jpg'
import img4 from '../../Images/donate3.jpg'
import img5 from '../../Images/donate4.jpg'
import { useNavigate } from 'react-router-dom';

const Donatemoney = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Icon to="/">EazyPay</Icon>
                <Left>
                    <Image src={img1} />
                </Left>
                <Right>
                    <Img src={img2} onClick={()=>navigate('/Donate')} />
                    <Img src={img3} onClick={()=>navigate('/Donate')} />
                    <Img src={img4} onClick={()=>navigate('/Donate')} />
                    <Img src={img5} onClick={()=>navigate('/Donate')} />
                </Right>
            </Container>
        </>
  )
}

export default Donatemoney;