import React from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../HOC/GlobalModalProvider.jsx";

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
    background: #afeddf;
    color: ${props => props.theme.accentBackgroundColor};
    box-shadow: 1px 3px 10px black;
  }

  .add-btn:active {
    background: #fefffc4d;
  }
`

const AddMeditationBtn = () => {
    return (
        <StyledAddMeditationBtn>
            <ModalContext.Consumer>
                {value => (
                    <button type={'button'} className={'add-btn'} onClick={() => value(
                        <React.Fragment>
                            <h4>Creating New Meditation</h4>
                            <button type={'button'} className={'modal-add-btn'}>Add</button>
                            <button type={'button'} className={'modal-cancel-btn'} onClick={() => {value(false)}}>Cancel</button>
                        </React.Fragment>
                    )}>+</button>
                )}
            </ModalContext.Consumer>
        </StyledAddMeditationBtn>
    );
};

export default AddMeditationBtn;