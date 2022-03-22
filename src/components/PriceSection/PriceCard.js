import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  max-width: 320px;
  height: 400px;
  margin: 0 20px;
  padding: 20px;
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
  width: 80px;
`;

const Type = styled.div`
  padding: 10px;
  color: crimson;
  font-size: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  margin-left: -40px;
`;

const ListItem = styled.li`
  margin: 30px 0;
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const PriceCard = ({image, type, desc}) => {
  return (
    <Container>
      <Image src={image}/>
      <Type>{type}</Type>
      <List>
          <ListItem>{desc}</ListItem>
      </List>
      <Button>Learn More</Button>
    </Container>
  )
}

export default PriceCard