import React from 'react'
import { Container, Wrapper, Left, Logo, Menu, MenuItem, ButtonWrapper, Button, ButtonLink } from './NavbarElements'

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Logo to='/'>EazyPay</Logo>
              <Menu>
                <MenuItem to='intro'>Pay</MenuItem>
                <MenuItem to='recharge'>Recharge & Bill Payments</MenuItem>
                <MenuItem to='travel'>Travel and Insurance</MenuItem>
                <MenuItem to='/'>Investments and Mutual Funds</MenuItem>
              </Menu>  
            </Left>
            <ButtonWrapper>
              <ButtonLink to='/SignUp'>
                <Button>Register</Button>
              </ButtonLink>
              <ButtonLink to='/Login'>
                <Button>Log In</Button>
              </ButtonLink>
            </ButtonWrapper>
        </Wrapper>
    </Container>
  )
}

export default Navbar