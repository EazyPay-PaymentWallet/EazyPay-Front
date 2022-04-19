import { useState, React } from 'react'
import styled from "styled-components";
import Dialogbox from '../components/DialogBox'


const DialogBox = () => {
    const [openModal, setOpenModal] = useState(false); 
  
    return (
    <div className="ModalBox">
        <h1>Hey, Click on the button to open the modal.</h1>
        <button className="openModalBtn" onClick={() => {setOpenModal(true);}}>Open</button>
        {openModal && <Dialogbox closeModal={setOpenModal}/>}
    </div>
  );
}

export default DialogBox