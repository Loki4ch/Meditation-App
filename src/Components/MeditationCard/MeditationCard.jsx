import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Edit from '../../assets/icons/edit.svg';
import Cross from '../../assets/icons/cross.svg';
import Start from '../../assets/icons/start.svg';
import EditModalContent from "../../Scenes/Home/Components/EditModelContent.jsx";
import {ModalContext} from "../../HOC/GlobalModalProvider.jsx";

const StyledMeditationCard = styled.div`
  max-width: 700px;
  min-height: 200px;
  margin: 10px 10px 20px 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.accentBackgroundColor};
  // background: ${props => props.theme.additionalBackgroundColor};
  background:linear-gradient(135deg, #5b247a 0%,#1bcedf 100%);
  box-shadow:  0 0 7px black;
  display: flex;
  justify-content: space-between;
  position: relative;
  
  .btn-wrapper {
    margin-bottom: 40px;
  }
  
  .delete-btn, .edit-btn, .start-btn{
    width: 35px;
    height: 35px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseBackgroundColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .delete-btn:hover,.edit-btn:hover, .start-btn:hover {
    box-shadow: 1px 3px 10px black;
  }

  .delete-btn:active, .edit-btn:active, .start-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
  }

  .edit-btn {
    
  }
  
  .start-btn {
    height: 80px;
    border-radius: 25px;
    background-color: ${props => props.theme.startBtnColor};
  }
  
  .card-wrapper {
    max-width: 650px;
  }
  
  .card-header {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .description-wrapper {
    max-width: 650px;
    margin: 0 20px 60px 20px;
    overflow: auto;
  }
  
  .daytime-info-text {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`

const SetMeditationDaytime = (daytimeIndex) => {
    if (daytimeIndex === '1') return 'Morning meditation';
    else if (daytimeIndex === '2') return 'Afternoon meditation';
    else if (daytimeIndex === '3') return 'Evening meditation';
    else return '';
}

const MeditationCard = (props) => {
    return (
        <StyledMeditationCard>
            <div className={'card-wrapper'}>
                <h2 className={'card-header'}>{props.name}</h2>
                <div className={'description-wrapper'}>{props.description}</div>
            </div>
            <div className={'btn-wrapper'}>
                <button type={'button'} className={'delete-btn'} onClick={() => {props.deleteMeditation(props.index)}}><Cross/></button>
                <ModalContext.Consumer>
                    {value => (
                        <button type={'button'} className={'edit-btn'} onClick={() => value(
                            <EditModalContent modalValue={value} name={props.name} description={props.description} daytime={props.daytime} cardsList={props.cardsList} setCardsList={props.setCardsList} editMeditation={props.editMeditation}/>
                        )}><Edit/></button>
                    )}
                </ModalContext.Consumer>
                <button type={'button'} className={'start-btn'} onClick={() => {console.log(('Meditation started'))}}><Start/></button>
            </div>
            <div className={'daytime-info-text'}>{SetMeditationDaytime(props.daytime)}</div>
        </StyledMeditationCard>
    )
}

MeditationCard.propTypes = {};

export default MeditationCard;