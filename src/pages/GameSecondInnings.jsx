import React, { useState, useRef, useEffect } from 'react'
import Runs from '../components/Runs'
import ScoreShortcut from '../components/ScoreShortcut'
import { useNavigate, useParams } from 'react-router-dom';
function Game() {
  const userScreenRef = useRef();
  const compScreenRef = useRef();
  const params = useParams();
  const navigate=useNavigate();
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [secondInningsScores, setSecondInningsScores] = useState([]);
  const [commentary, setCommentary] = useState('Good to see everyone for this match here');
  const [ballsCount, setBallsCount] = useState(0);
  const startGame = () => {
    isStart(true);
  }

  useEffect(() => {
    console.log(params);
    setSecondInningsScores(simulateSecondInnings(params.current=='bat'?'bowling':'batting',parseInt(params.target)));
  }, [])
  useEffect(() => {
    console.log('ballsCount:', ballsCount);
    console.log(secondInningsScores);
    console.log("wickets", wickets);
    console.log("score", score);
  }, [secondInningsScores
    , wickets, score, ballsCount
])
//   useEffect(()=>{
//     if (ballsCount == 6) {
//     //   console.log("scorebeforetarget", score);
//     //   setTarget(parseInt(score+1))  //target setting using useEffect hook
//     }
//   },[score])


  const Ball = (runs, tossResult) => {
    if (params.current == 'bat') {  //batting at second innings

      if (ballsCount <= 5) {

        if (secondInningsScores[ballsCount] == runs) {
          setWickets((wickets + 1))
          setCommentary("That's excellent bowling and a wicket");
        } else if (secondInningsScores[ballsCount] != runs) {
          setScore((score + parseInt(runs)));                       //score being updated asynchronously
          if (runs == 1) {
            setCommentary("That's a good yorker and just a single");
          }
          else if (runs == 2 || runs == 3) {
            setCommentary(`Great running  and it's ${runs} more runs`);
          }
          else {
            setCommentary("Batsmen lofts the shot and it's " + runs);
          }
        }


        // if (ballsCount == 5) {
        //   console.log("scorebeforetarget", score);
        //   setTarget(parseInt(score))  //taking old scores
        // }
        setBallsCount(ballsCount + 1);
      } else {
        setCommentary('End of the innings and we resume after this break');
      }
    }else {   //bowling second innings
      if (ballsCount <= 5) {

        if (secondInningsScores[ballsCount] == runs) {
          setWickets((wickets + 1))
          setCommentary("That's excellent bowling and a wicket");
        } else if (secondInningsScores[ballsCount] != runs) {
          setScore((score + parseInt(secondInningsScores[ballsCount])));
          if (secondInningsScores[ballsCount] == 1) {
            setCommentary("That's a good yorker and just a single");
          }
          else if (secondInningsScores[ballsCount] == 2 || secondInningsScores[ballsCount] == 3) {
            setCommentary(`Great running  and it's ${secondInningsScores[ballsCount]} more runs`);
          }
          else {
            setCommentary("Batsmen lofts the shot and it's " + secondInningsScores[ballsCount]);
          }
        }


       
        setBallsCount(ballsCount + 1);
      } else {
        setCommentary('End of the innings and we resume after this break');
      }

      
    }
  }



  const updateScreen = (runs) => {
    userScreenRef.current.innerHTML = runs;
    compScreenRef.current.innerHTML =secondInningsScores[ballsCount]?secondInningsScores[ballsCount]:secondInningsScores[ballsCount-1];
    Ball(runs, params.tossResult);
  }
 useEffect(()=>{
 if ((score>=params.target || ballsCount==6) && (params.current=='bat') ){  //user batting ->won
    // setTimeout(()=>{
        navigate('/results/won');
    // },5000)
 }else if ((score<=params.target && ballsCount==6) && (params.current=='bat'))  //user batting->lost
 {
    // setTimeout(()=>{
        navigate('/results/lost');
    // },5000)

 }
 else if ((score<=params.target && ballsCount==6) && (params.current=='ball')){  //user bowling->won
    // setTimeout(()=>{
        navigate('/results/won');
    // },5000)
    
 }
 else if ((score>=params.target) && (params.current=='ball')){  //user bowling->lost
    // setTimeout(()=>{
        navigate('/results/lost');
    // },5000)}
//  }else if ((score>=params.target && ballsCount==6) && (params.current=='bat')){
//   setTimeout(()=>{
//     navigate('/results/lost');  //computer won at
// },5000)   
//  }
 }},[score,ballsCount])
  
  

  function simulateSecondInnings(role, target) {
    const results = [];
  
    // if (role === 'bowling') {
    //   // Bowling: Generate an array of defensive values to defend the target
    //   let remaining = target;
    //   for (let i = 0; i < 6; i++) {
    //     const defensiveValue = [6, 4, 3, 2, 1][Math.floor(Math.random() * 5)];
    //     results.push(defensiveValue);
    //     remaining -= defensiveValue;
  
    //     // Ensure the remaining runs are non-negative
    //     remaining = Math.max(0, remaining);
    //   }
    // } 
    // else
     if (role === 'batting' || role==='bowling') {
      // Batting: Generate an array of how you can reach the target runs
      let remaining = target;
      for (let i = 0; i < 6; i++) {
        // Prioritize 4's and 6's, with less probability for 3's and even less for smaller runs
        const currentBallScore = [6, 4, 3, 1, 2][Math.floor(Math.random() * 5)];
        results.push(currentBallScore);
        remaining -= currentBallScore;
  
        // Ensure not to overshoot the target
        if (remaining <= 0) break;
      }
    }
  
    return results;
  }
  

return (
    <>
      {
        <div className="scorecard w-full h-[340px] bg-[#1e363f] mb-10 rounded-xl flex flex-col items-center ">
          {/* {start ? */}
           <div className="commentary font-Russo text-white my-3">
            {commentary}
          </div> 
           {/* :<button className='font-Russo text-white my-3' onClick={startGame}>Start</button> */}
          {/* } */}
          <div className="scores bg-white w-80 h-40 rounded-2xl  my-3 font-Russo flex justify-between px-3">
            <div className="player1">
              <div className="score text-center text-9xl" ref={userScreenRef}>4</div>
              <div className="playername text-lg">Sanket</div>
            </div>
            <div className="player2  ">

              <div className="score text-center text-9xl" ref={compScreenRef}>1</div>
              <div className="playername text-lg">Computer</div>

            </div>
          </div>
          <div className="nexthit font-Russo text-white w-80">
            <div className="nexthittext text-center my-2"> Choose your Next Hit</div>
            <div className="runs flex justify-between">
              <Runs text="1" onClick={() => { updateScreen('1') }} />
              <Runs text="2" onClick={() => { updateScreen('2') }} />
              <Runs text="3" onClick={() => { updateScreen('3') }} />
              <Runs text="4" onClick={() => { updateScreen('4') }} />
              {/* <Runs text="5" /> */}
              <Runs text="6" onClick={() => { updateScreen('6') }} />

            </div>
          {/* <div className='text-center hover:cursor-pointer'>Continue</div> */}

          </div>
        </div>
      }
      <ScoreShortcut ballsCount={ballsCount} score={score} target={params.target} wickets={wickets} />
    </>
  )

}

export default Game