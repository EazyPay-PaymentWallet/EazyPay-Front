import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 50px);
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
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  margin-left: -400px;
  margin-top: 430px;
`;

export const Form = styled.form`
  background: #101522;
  max-width: 580px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  padding: 20px 70px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  margin-left: -180px;
  margin-top: 20px;
`;

export const FormH1 = styled.h1`
  margin-bottom: 25px;
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 17px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 18px 16px;
  margin-top: -2px;
  margin-bottom: 10px;
  border-none;
  border-radius: 4px;
  font-size: 17px;
`;

export const DonorFormInput = styled.input`
  padding: 18px 16px;
  margin-top: -2px;
  margin-bottom: 10px;
  border-none;
  border-radius: 4px;
  width: 310px;
`;

export const CaptchaFormInput = styled.input`
  padding: 18px 16px;
  margin-top: -2px;
  margin-bottom: 10px;
  border-none;
  border-radius: 4px;
  width: 121px;
  text-align: center;
`;

export const RadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DonorDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: white;
`;

export const FormInputRadio = styled.input`
  width: 15px;
  height: 15px;
  margin: 5px 10px;
`;

export const FormLabelRadio = styled.label`
  margin-right: 30px;
  font-size: 17px;
  color: #fff;
`;

export const FormButton = styled.button`
  background: #06aa95;
  padding: 16px 0;
  margin: 25px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const TextLink = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: white;
  }
`;

export const FormText = styled.span`
  text-align: center;
  color: #fff;
  font-size: 17px;
`;

export const Text = styled.span`
  text-align: center;
  color: #fff;
  font-size: 40px;
  margin: 0 10px;
`;

export const Select = styled.div`
  width: 120px;
  margin-right: 10px;
`;
