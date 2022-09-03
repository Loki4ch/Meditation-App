import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledMeditationCard = styled.div`
  max-width: 700px;
  min-height: 200px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.accentBackgroundColor};
  background: ${props => props.theme.additionalBackgroundColor};
  box-shadow:  0 0 7px black;
  display: flex;
  justify-content: space-between;
  position: relative;
  
  .delete-btn {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 50%;
    border: none;
    color: ${props => props.theme.baseBackgroundColor};
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: 15px;
    transition: all 0.3s;
  }
  
  .delete-btn:hover {
    box-shadow: 1px 3px 10px black;
  }

  .delete-btn:active {
    background: ${props => props.theme.baseBackgroundColor};
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
    right: 20px;
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
            <button type={'button'} className={'edit-btn'} onClick={() => {props.deleteMeditation(props.index)}}>✖</button>
            <button type={'button'} className={'delete-btn'} onClick={() => {props.deleteMeditation(props.index)}}>✖</button>
            <div className={'daytime-info-text'}>{SetMeditationDaytime(props.daytime)}</div>
        </StyledMeditationCard>
    )
}

MeditationCard.propTypes = {};

export default MeditationCard;