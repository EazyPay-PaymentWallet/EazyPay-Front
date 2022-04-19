import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 250%;
  margin-left: -120px;
  margin-top: 82px;
`;

export const Img = styled.img`
  width: 85%;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Right = styled.div`
  width: 70%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  margin-left: 100px;
`;