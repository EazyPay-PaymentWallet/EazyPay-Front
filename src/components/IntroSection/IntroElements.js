import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 0px 20px;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

export const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

export const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

export const Right = styled.div`
  width: 40%;
`;

export const Image = styled.img`
  width: 80%;
  margin-left: 125px;
  margin-top: 70px;
`;