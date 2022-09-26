import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "./Components/AddMeditationBtn.jsx";
import MeditationCard from "../../Components/MeditationCard/MeditationCard.jsx";
import {fetchMeditationsList, removeMeditation} from "../../api/meditationsApi.js";
import Spinner from "../../Components/Spinner/Spinner.jsx";

const StyledHome = styled.div`
  .alert-text {
    position: absolute;
    top: 70px;
    left: calc(50% - 125px);
    width: 250px;
    height: 40px;
    background-color: ${props => props.theme.accentBackgroundColor};
    font-size: ${props => props.theme.smallFontSize};
    border-radius: 25px;
    box-shadow: 0 0 10px white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export let editRenderTrigger = 1;

const Home = (props) => {
    const [cardsList, setCardsList] = useState([]);

    useEffect(() => {
        console.log('USE EFFECT')
        const fetchData = async () => {
            const response = await fetchMeditationsList();
            if (response.data.length !== cardsList.length) {
                console.log('RESPONSE DATA', response.data);
                setCardsList(response.data);
                console.log('NOW CARDSLIST IS', cardsList);
            }
        }
        fetchData();
    }, [cardsList.length, editRenderTrigger])

    const checkListEmpty = () => {
        if (cardsList === undefined) return <Spinner/>;
    }

    const checkListLength = () => {
        if (!cardsList.length) return <div className={'alert-text'}>No meditations yet</div>;
    }

    const editMeditation = (index, newName) => {

    }

    const deleteMeditation = (id, index) => {
        removeMeditation(id);
        const newCardsList = [...cardsList];
        console.log(`INITIAL index is ${index}`)
        newCardsList.splice(index, 1);
        console.log(`deleted card ${index}`)
        setCardsList(newCardsList);
    }

const goodCallback = useCallback(deleteMeditation, [cardsList.length]);

    console.log('home rendered');

    return (
        <StyledHome>
            <div className={'main-wrapper'}>
                {checkListEmpty()}
                {checkListLength()}
                {console.log('CADRS LIST', cardsList)}
                {(cardsList && !!cardsList.length) &&
                    cardsList.map((card, index) => (
                         <MeditationCard key={index} id={card.id} cardIndex={index} name={card.name} description={card.description} daytime={card.daytime} deleteMeditation={goodCallback} editMeditation={editMeditation} cardsList={cardsList} setCardsList={setCardsList}/>
                    ))
                }
                <AddMeditationBtn cardsList={cardsList} setCardsList={setCardsList}/>
            </div>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;