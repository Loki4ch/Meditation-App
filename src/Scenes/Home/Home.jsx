import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "./Components/AddMeditationBtn.jsx";
import MeditationCard from "../../Components/MeditationCard/MeditationCard.jsx";
import {fetchMeditationsList} from "../../api/meditationsApi.js";
import Spinner from "../../Components/Spinner/Spinner.jsx";

const StyledHome = styled.div`
  position: relative;
  
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


const Home = (props) => {
    const [cardsList, setCardsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchMeditationsList();
            setCardsList(response.data);
        }
        fetchData();
    }, [])

    const checkListLength = () => {
        if (!cardsList.length) return <div className={'alert-text'}>No meditations yet</div>;
    }

    const deleteMeditation = (index) => {
        const newCardsList = [...cardsList];
        newCardsList.splice(index, 1);
        setCardsList(newCardsList);
        console.log(`deleted card ${index}` )
    }

    const editMeditation = (index, newName) => {

    }

    const goodCallback = useCallback(deleteMeditation, [cardsList.length]);

    console.log('home rendered');

    return (
        <StyledHome>
            <div className={'main-wrapper'}>
                {checkListLength()}
                {(cardsList && !!cardsList.length) &&
                    cardsList.map((card, index) => (
                        <MeditationCard key={index} name={card.name} description={card.description} daytime={card.daytime} deleteMeditation={goodCallback} editMeditation={editMeditation} cardsList={cardsList} setCardsList={setCardsList} index={index}/>
                    ))
                }
                <AddMeditationBtn cardsList={cardsList} setCardsList={setCardsList}/>
            </div>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;