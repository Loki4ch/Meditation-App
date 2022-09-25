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
  font-size: 18px;
  
  .modal-window {
    min-height: 100px;
    padding: 5px 10px 10px 10px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.accentBackgroundColor};
    background: ${props => props.theme.accentBackgroundColor};
    box-shadow:  0 0 20px black;
    align-items: center;
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