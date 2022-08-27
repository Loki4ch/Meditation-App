import React, {useState} from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "./Components/AddMeditationBtn.jsx";
import MeditationCard from "../../Components/MeditationCard/MeditationCard.jsx";

const StyledHome = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
  position: relative;
`


const Home = (props) => {
    const [cardsList, setCardsList] = useState([]);

    return (
        <StyledHome>
            <div className={'main-wrapper'}>
                {(cardsList && !!cardsList.length) &&
                    cardsList.map((card, index) => (
                        <MeditationCard key={index} name={card.name} description={card.description}/>
                    ))
                }
                <AddMeditationBtn cardsList={cardsList} setCardsList={setCardsList} />
            </div>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;