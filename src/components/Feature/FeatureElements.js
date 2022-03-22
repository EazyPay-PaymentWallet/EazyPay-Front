import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  width: 120%;
  margin-left: -100px;
  margin-top: 19px;
`;

export const Summary = styled.div`
  background: #eee;
  border-radius: 10px;
  padding: 25px 30px;
  height: 45vh;
  width: 350px;
  margin-top: 190px;
  margin-left: 100px;
`;

export const SummaryTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  border-bottom: 4px solid lightgray;
  color: #000;
  text-align: center;
  padding-bottom: 10px;
`;

export const SummaryItem = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  padding-bottom: 13px;
  border-bottom: 4px solid lightgray;
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span`
  color: green;
`;

export const SummaryAdd = styled.div``;

export const SummaryAddLinks = styled(LinkR)`
  color: #000;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  text-decoration: none;
  padding-bottom: 10px;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

export const TopLine = styled.p`
  color: #02050a;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-left: 100px;
`;

export const Title = styled.span`
  max-width: 400px;
  padding-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 600;
  color: #02050a;
  margin-left: 100px;
`;

export const SubTitle = styled.span`
  max-width: 440px;
  padding-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #02050a;
  letter-spacing: 0.5px;
  margin-left: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;