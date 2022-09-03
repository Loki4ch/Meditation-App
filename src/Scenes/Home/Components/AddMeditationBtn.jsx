import React from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../../HOC/GlobalModalProvider.jsx";

import AddModalContent from "./AddModalContent.jsx";

const StyledAddMeditationBtn = styled.div`
  .add-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseBackgroundColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 40px;
    position: fixed;
    right: 40px;
    bottom: 60px;
    transition: all 0.3s;
  }
  
  .add-btn:hover {
    box-shadow: 1px 3px 10px black;
  }

  .add-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }
`

const AddMeditationBtn = (props) => {


    return (
        <StyledAddMeditationBtn>
            <ModalContext.Consumer>
                    {value => (
                        <button type={'button'} className={'add-btn'} onClick={() => value(
                            <AddModalContent modalValue={value} cardsList={props.cardsList} setCardsList={props.setCardsList}/>)}>+</button>
                    )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};

export default AddMeditationBtn;