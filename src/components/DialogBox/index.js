import React from 'react'
import { Container, Wrapper, Header, Main, OpenDialogButton, Body, Footer, CancelButton, ContinueButton } from './DialogBoxElements.js'


const Dialog = ({ closeModal }) => {
    return (
        <Container>
            <Wrapper>
                <Main>
                    <OpenDialogButton onClick={() => closeModal(false)}> X </OpenDialogButton>
                </Main>
                <Header>
                    <h1>Are you sure you want to continue?</h1>
                </Header>
                <Body>
                    <p>The next page is awesome! You should move forward, you will enjoy it.</p>
                </Body>
                <Footer>
                    <CancelButton onClick={() => {closeModal(false);}} id="cancelBtn">Cancel</CancelButton>
                    <ContinueButton>Continue</ContinueButton>
                </Footer>
            </Wrapper>
        </Container>
  )
}

export default Dialog;