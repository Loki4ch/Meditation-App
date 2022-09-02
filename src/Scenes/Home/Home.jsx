import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "./Components/AddMeditationBtn.jsx";
import MeditationCard from "../../Components/MeditationCard/MeditationCard.jsx";

const StyledHome = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
  position: relative;
`


const Home = (props) => {
    const [cardsList, setCardsList] = useState([]);

    const deleteMeditation = (index) => {
        const newCardsList = [...cardsList];
        newCardsList.splice(index, 1);
        setCardsList(newCardsList);
        console.log(`deleted card ${index}` )
    }

    const editMeditation = (index, newName) => {

    }

    const goodCallback = useCallback(deleteMeditation, [cardsList.length]);

    console.log('home rendered')

    return (
        <StyledHome>
            <div className={'main-wrapper'}>
                {(cardsList && !!cardsList.length) &&
                    cardsList.map((card, index) => (
                        <MeditationCard key={index} name={card.name} description={card.description} deleteMeditation={goodCallback} index={index}/>
                    ))
                }
                <AddMeditationBtn cardsList={cardsList} setCardsList={setCardsList} />
            </div>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;