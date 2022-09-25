import React from 'react';
import styled from 'styled-components';

const StyledDeletePopUpContext = styled.div`
  .main-wrapper {
    margin: 20px 15px 20px 15px;
  }
  
  .modal-title-wrapper {
    text-align: center;
  }
  
  .modal-title {
    font-size: ${props => props.theme.largeFontSize};
    margin: 0;
  }

  .btn-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .modal-apply-btn, .modal-cancel-btn {
    width: 120px;
    height: 45px;
    border: none;
    border-radius: 25px;
    background-color: #bc544b;
    transition: all 0.3s;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-apply-btn:hover,.modal-cancel-btn:hover {
    box-shadow: 0 0 10px white;
    text-shadow: 0 0 10px white;
  }

  .modal-apply-btn:active, .modal-cancel-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .modal-cancel-btn {
    background-color: ${props => props.theme.baseBackgroundColor};
  }
`

const DeletePopUpContext = (props) => {

    return (
        <StyledDeletePopUpContext>
                <div className={'main-wrapper'}>
                    <div className={'modal-title-wrapper'}>
                        <p className={'modal-title'}>Delete this meditation?</p>
                    </div>
                    <div className={'btn-wrapper'}>
                        <button className={'modal-apply-btn'} type={'button'} onClick={() => {
                            props.deleteMeditation(props.id, props.index)
                            props.modalValue(false);
                        }}>Delete</button>
                        <button className={'modal-cancel-btn'} type={'button'} onClick={() => {props.modalValue(false)}}>Cancel</button>
                    </div>
                </div>
        </StyledDeletePopUpContext>
    )
}

DeletePopUpContext.propTypes = {
};

export default DeletePopUpContext;