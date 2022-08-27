import React from 'react';
import styled from 'styled-components';
import MeditationImg from '../../assets/images/img3.png';

const StyledMeditationBasics = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
  position: relative;
  
  .content {
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
  
  .image-wrap {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
  }
  
  .meditation-img {
    border-radius: 100px;
    width: 568px;
    height: 348px;
  }
  
  .headers-wrap {
    text-align: center;
  }
  
  .text-wrap {
    text-align: start;
    margin: 0 15px 0 15px;
  }
`

const MeditationBasics = (props) => {

    return (
        <StyledMeditationBasics>
            <div className={'content'}>
                <div className={'image-wrap'}>
                    <img src={MeditationImg} className={'meditation-img'} alt={'MeditationImg'}/>
                </div>
                <div className={'headers-wrap'}>
                    <h1>How to Meditate</h1>
                    <h2>Meditation is something everyone can do, here’s how</h2>
                    <div className={'text-wrap'}>
                        <p>Meditation is simpler (and harder) than most people think. Read these steps, make sure you’re somewhere where you can relax into this process, set a timer, and give it a shot:</p>
                        <h4>1) Take a seat</h4>
                        <p>Find place to sit that feels calm and quiet to you.</p>
                        <h4>2) Set a time limit</h4>
                        <p>If you’re just beginning, it can help to choose a short time, such as five or 10 minutes.</p>
                        <h4>3) Notice your body</h4>
                        <p>You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel—all are fine. Just make sure you are stable and in a position you can stay in for a while.</p>
                        <h4>4) Feel your breath</h4>
                        <p>Follow the sensation of your breath as it goes in and as it goes out.</p>
                        <h4>5) Notice when your mind has wandered</h4>
                        <p>Inevitably, your attention will leave the breath and wander to other places. When you get around to noticing that your mind has wandered—in a few seconds, a minute, five minutes—simply return your attention to the breath.</p>
                        <h4>6) Be kind to your wandering mind</h4>
                        <p>Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.</p>
                        <h4>7) Close with kindness</h4>
                        <p>When you’re ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions.</p>
                        <p>That’s it! That’s the practice. You focus your attention, your mind wanders, you bring it back, and you try to do it as kindly as possible (as many times as you need to).</p>
                    </div>
                </div>
            </div>
        </StyledMeditationBasics>
    );
}

MeditationBasics.propTypes = {};

export default MeditationBasics;