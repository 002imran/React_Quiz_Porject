import React from 'react'
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

 const Quiz = () => {
    return (
        <>
        <div class="container">
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
            
        </div>
       
        <Answers />
        <MiniPlayer />
        <ProgressBar />
        </>
    )
}
export default Quiz
