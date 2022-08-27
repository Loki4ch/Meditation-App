import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledMeditationCard = styled.div`
  width: 700px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  background: ${props => props.theme.additionalBackgroundColor};
  box-shadow:  0 0 15px black;
  display: flex;
  justify-content: space-between;
  
  .delete-btn {
    width: 20px;
    height: 20px;
  }
`

const MeditationCard = (props) => {
    return (
        <StyledMeditationCard>
            <div className={'card-wrapper'}>
                <h2 className={'card-header'}>{props.name}</h2>
                <div className={'description'}>{props.description}</div>
            </div>
            <button type={'button'} className={'delete-btn'} onClick={() => {props.deleteMeditation(props.index)}}>D</button>
        </StyledMeditationCard>
    )
}

MeditationCard.propTypes = {};

export default MeditationCard;