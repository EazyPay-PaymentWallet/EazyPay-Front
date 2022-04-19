import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 0px 20px;
`;

export const Icon = styled(LinkR)`
  margin: 20px;
  color: white;
  text-decoration: underline white;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;

  &:hover{
      color: white;
  }
`;

export const Left = styled.div`
  width: 20%;
`;

export const Right = styled.div`
  width: 47%;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 170%;
  margin-left: -197px;
  margin-top: 142px;
`;

export const Wrapper = styled.div`
`;

export const RightContainer = styled.div`
  border: 2px solid lightgray;
  border-radius: 10px;
  z-index: 1;
`;

export const Title = styled.h1`

`;

export const EazyPay = styled.div`
  padding: 10px;
`;

export const EPWrapper = styled.div`
  display: flex;
  flex-direcion: column;
  border-top: 2px solid lightgray;
  padding-top: 5px;
`;

export const EPLeft = styled.div`
  width: 50%;
`;

export const EPRight = styled.div`
  width: 50%;
`;

export const EPTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const EPText = styled.span`
  
`;

export const SavedPay = styled.div`
  padding: 10px;
`;

export const SPWrapper = styled.div`
  border-top: 2px solid lightgray;
  padding-top: 5px;
`;

export const SPTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const SPHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SPHeader1 = styled.span`
  margin-left: 62px;
  padding: 0 20px;
`;

export const SPCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 28px;
`;

export const SPText = styled.span`
`;

export const OtherPay = styled.div`
  padding: 10px;
`;

export const OPWrapper = styled.div`
  border-top: 2px solid lightgray;
  padding-top: 5px;
`;

export const OPWrapper1 = styled.div`
  padding-top: 10px;
`;

export const OPTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const OPText = styled.p`
`;

export const OPAddCard = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: flex;
`;

export const OPDesc = styled.p`
  display: flex;
`;

export const OPImage = styled.img`
  width: 7%;
  margin-right: 10px;
  border-radius: 5px;
`;

export const RightPayment = styled.div`
  margin: 65px 20px;
  padding: 20px;
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid lightgray;
  border-radius: 10px;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid lightgray;
`;

export const OrderText = styled.span`
`;

export const OrderPrice = styled.span`
`;

export const OrderTotal = styled.span`
  font-weight: bold;
`;

export const TotalPrice = styled.span`

`;

export const PaymentButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: none;
`;

export const PaymentText = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInputRadio = styled.input`
  width: 15px;
  height: 15px;
  margin: 5px 10px;
`;




