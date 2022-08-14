import React, {useState} from "react";
import styled from 'styled-components';


const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  .modal-window {
    background-color: #afeddf;
    padding: 10px 20px;
    border-radius: 10%;
    box-shadow: 5px 5px 10px black;
  }
`

export const ModalContext = React.createContext(() => {});

const GlobalModalProvider = (props) => {
    const [modalContent, setModalContent] = useState();

    return (
        <React.Fragment>
            {!!modalContent && <StyledModalWrapper>
                <div className={'modal-window'}>
                    {modalContent}
                </div>
            </StyledModalWrapper>}
            <ModalContext.Provider value={(modalContent) => {setModalContent(modalContent)}}>
                {props.children}
            </ModalContext.Provider>
        </React.Fragment>
    )
}

export default GlobalModalProvider;