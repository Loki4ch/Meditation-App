import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Edit from '../../assets/icons/edit.svg';
import Cross from '../../assets/icons/cross.svg';
import Start from '../../assets/icons/start.svg';
import EditModalContent from "../../Scenes/Home/Components/EditModelContent.jsx";
import {ModalContext} from "../../HOC/GlobalModalProvider.jsx";
import {removeMeditation} from "../../api/meditationsApi.js";

const StyledMeditationCard = styled.div`
  .main-wrapper-morning, .main-wrapper-afternoon, .main-wrapper-evening {
    max-width: 700px;
    min-height: 200px;
    margin: 10px 10px 20px 10px;
    border-radius: 10px;
    box-shadow:  0 0 10px black;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  
  .main-wrapper-morning {
    background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%);
    color: ${props => props.theme.accentBackgroundColor};
  }

  .main-wrapper-afternoon {
    background: linear-gradient(135deg, #c3ec52 0%, #0ba29d 100%);
    color: ${props => props.theme.accentBackgroundColor};
  }

  .main-wrapper-evening {
    background: linear-gradient(135deg, #65799b 0%, #5e2563 100%);
  }
  
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
    color: ${props => props.theme.baseFontColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .delete-btn:hover,.edit-btn:hover, .start-btn:hover {
    box-shadow: 0 0 10px white;
  }

  .delete-btn:active, .edit-btn:active, .start-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
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
    font-size: ${props => props.theme.largeFontSize};
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .description-wrapper {
    max-width: 650px;
    margin: 0 20px 60px 20px;
    overflow: auto;
  }
  
  .daytime-info-text {
    font-size: 16px;
    position: absolute;
    bottom: 0;
    left: 20px;
  }
`

const setMeditationDaytime = (daytimeId) => {
    if (daytimeId === 'morning') return 'Morning meditation';
    else if (daytimeId === 'afternoon') return 'Afternoon meditation';
    else if (daytimeId === 'evening') return 'Evening meditation';
    else return '';
}

const setMeditationBackground = (daytimeId) => {
    if (daytimeId === 'morning') return 'main-wrapper-morning';
    else if (daytimeId === 'afternoon') return 'main-wrapper-afternoon';
    else if (daytimeId === 'evening') return 'main-wrapper-evening';
    else return '';
}

const deleteMeditation = (index, cardsList, setCardsList) => {
    removeMeditation(index);
    const newCardsList = [...cardsList];
    newCardsList.splice(index, 1);
    setCardsList(newCardsList);
    console.log(`deleted card ${index}`)
}

// const goodCallback = useCallback(deleteMeditation, [cardsList.length]);

const MeditationCard = (props) => {
    return (
        <StyledMeditationCard>
            <div className={setMeditationBackground(props.daytime)}>
                <div className={'card-wrapper'}>
                    <p className={'card-header'}>{props.name}</p>
                    <p className={'description-wrapper'}>{props.description}</p>
                </div>
                <div className={'btn-wrapper'}>
                    <button type={'button'} className={'delete-btn'} onClick={() => {deleteMeditation(props.index, props.cardsList, props.setCardsList)}}><Cross/></button>
                    <ModalContext.Consumer>
                        {value => (
                            <button type={'button'} className={'edit-btn'} onClick={() => value(
                                <EditModalContent modalValue={value} name={props.name} description={props.description} daytime={props.daytime} cardsList={props.cardsList} setCardsList={props.setCardsList} editMeditation={props.editMeditation} index={props.index}/>
                            )}><Edit/></button>
                        )}
                    </ModalContext.Consumer>
                    <button type={'button'} className={'start-btn'} onClick={() => {console.log(('Meditation started'))}}><Start/></button>
                </div>
                <p className={'daytime-info-text'}>{setMeditationDaytime(props.daytime)}</p>
            </div>
        </StyledMeditationCard>
    )
}

MeditationCard.propTypes = {};

export default MeditationCard;