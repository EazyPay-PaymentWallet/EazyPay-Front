import React from 'react'
import PriceCard from './PriceCard'
import { Container, Wrapper, Text, CardContainer } from './PriceElements'
import image1 from '../../Images/protection.svg';
import image2 from '../../Images/one-account-india-abroad.svg';
import image3 from '../../Images/mail-paypalme-pink.svg';
import image4 from '../../Images/SecureTech-pink.svg';

const Price = () => {
  return (
    <Container>
      <Wrapper>
        <Text>The safer, easier way to pay around the world.</Text>
      </Wrapper>
      <CardContainer>
        <PriceCard image={image1} type="180-Day Buyer Protection" desc="Item not as described? You have our first-of-its-kind 180-day refund window to get a full refund on your purchase."/>
        <PriceCard image={image2} type="One Account for shopping worldwide" desc="Shop globally with one PayPal account."/>
        <PriceCard image={image3} type="Skip the Logins" desc="Check out faster and easier with One Touch™ and you'll never need to enter your login details again."/>
        <PriceCard image={image4} type="Worry-free Shopping" desc="Shop with ease and confidence. Your financial details are never shared, not even with the seller."/>
      </CardContainer>
    </Container>
  )
}

export default Price