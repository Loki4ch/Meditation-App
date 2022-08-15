import React, {useState} from 'react';
import styled from 'styled-components';
import AddMeditationBtn from "../Components/AddMeditationBtn/AddMeditationBtn.jsx";
import MeditationCard from "../Components/MeditationCard/MeditationCard.jsx";

const StyledHome = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
  position: relative;
  
  .meditation-card-holder {
    margin: 15px;
    border: 2px solid black;
  }

  .main-wrapper {
    //padding: 0 15px 0 15px;
    //----------------------Scroll
    padding: 1rem;
    overflow-y: auto;
    direction: ltr;
  }

  .main-wrapper::-webkit-scrollbar {
    width: 10px;
  }

  .main-wrapper::-webkit-scrollbar-track {
    background-color: #cdeee2;
    border-radius: 100px;
    margin: 25px 0 25px 0;
  }

  .main-wrapper::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-image: linear-gradient(180deg, #cce6e6 0%, #86e3ce 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }

`


const Home = (props) => {
    const [cardsList, setCardsList] = useState([]);

    return (
        <StyledHome>
            <div className={'main-wrapper'}>
                {/*<div className={'meditation-card-holder'}>*/}
                    {(cardsList && !!cardsList.length) &&
                        cardsList.map((card, index) => (
                            <MeditationCard key={index} name={card.name} description={card.description}/>
                        ))
                    }
                {/*</div>*/}
                <AddMeditationBtn setCardsList={setCardsList} cardsList={cardsList}/>
            </div>
        </StyledHome>
    );
}

Home.propTypes = {};

export default Home;