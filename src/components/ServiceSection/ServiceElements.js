import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  width: 50%
`;

export const Image = styled.img`
  display: ${(prop) => prop.open && "none"};
  height: 100%;
  margin-left: 80px;
`;

export const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 145px;
  border: 12px solid pink;
`;

export const Right = styled.div`
  width: 50%;
  margin-top: 60px;
  margin-left: 50px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TopLine = styled.p`
  color: #02050a;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-left: -200px;
`;

export const Title = styled.span`
  max-width: 600px;
  padding-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  font-weight: 600;
  color: #02050a;
  margin-left: -200px;
`;

export const SubTitle = styled.span`
  max-width: 700px;
  padding-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #02050a;
  letter-spacing: 0.5px;
  margin-left: -200px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between
  margin-top: 30px;
  margin-left: -230px;
`;

export const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;