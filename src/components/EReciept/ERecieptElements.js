import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const Main = styled.div`
  display: inline-block;
  margin-top: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Left = styled.div`
  width: 30%;
`
export const Right = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 70%;
`
export const BodyLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const BodyRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const Text = styled.span`
  font-size: 18px;
`
export const HeaderTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
`
export const HeaderSubTitle = styled.span`
  font-size: 16px;
`

export const OpenDialogButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  margin-left: 420px;
  margin-top: -40px;
  cursor: pointer;
`

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProceedButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: crimson;
`

export const ContinueButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`