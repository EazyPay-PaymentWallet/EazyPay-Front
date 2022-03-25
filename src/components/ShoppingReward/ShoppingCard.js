import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 340px;
  margin-right: 10px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0 , 0.58);
  box-shadow: 0px 0px 20px -11px rgba(0, 0, 0, 0.98);
  background-color: white;
  border: 2px solid crimson;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  margin-top: -2px;
  padding: 5px;
  border-radius: 10px;
`;

const Type = styled.div`
  padding: 10px;
  color: crimson;
  font-size: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  margin-left: -110px;
`;

const ListItem = styled.li`
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const ShoppingCard = ({image, type, brand, desc, valid}) => {
  return (
    <Container>
      <Image src={image}/>
      <Type>{type}</Type>
      <List>
        <ListItem>{brand}</ListItem>
        <ListItem>{desc}</ListItem>
        <ListItem>{valid}</ListItem>
      </List>
      <Button>Collect Now</Button>
    </Container>
  )
}

export default ShoppingCard