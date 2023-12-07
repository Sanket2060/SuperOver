import React, { useState, useRef, useEffect } from 'react'
import Runs from '../components/Runs'
import ScoreShortcut from '../components/ScoreShortcut'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Game() {
  const username=useSelector((state)=>state.userDetails.userDetails.username);
  const userScreenRef = useRef();
  const navigate=useNavigate();
  const compScreenRef = useRef();
  const params = useParams();
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [target, setTarget] = useState(undefined);
  const [firstInningsScores, setFirstInningsScores] = useState([]);
  const [commentary, setCommentary] = useState('Good to see everyone for this match here');
  const [ballsCount, setBallsCount] = useState(0);
   useEffect(() => {
    console.log("username",username);
  }, [username]);
  
  const startGame = () => {
    isStart(true);
  }

  useEffect(() => {
    console.log(params);
    setFirstInningsScores(simulateFirstInnings(params.tossResult));
  }, [])
  useEffect(() => {
    // console.log('ballsCount:', ballsCount);
    // console.log(firstInningsScores);
    // console.log("wickets", wickets);
    // console.log("score", score);
    // console.log("Target", target);
  }, [firstInningsScores, wickets, score, target, ballsCount])
  useEffect(()=>{
    if (ballsCount == 6) {
      console.log("scorebeforetarget", score);
      setTarget(parseInt(score+1))  //target setting using useEffect hook
    }
  },[score])


  const Ball = (runs, tossResult) => {
    if (tossResult == 'batting') {  //batting first

      if (ballsCount <= 5) {

        if (firstInningsScores[ballsCount] == runs) {
          setWickets((wickets + 1))
          setCommentary("That's excellent bowling and a wicket");
        } else if (firstInningsScores[ballsCount] != runs) {
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
    }else {   //bowling first innings
      if (ballsCount <= 5) {

        if (firstInningsScores[ballsCount] == runs) {
          setWickets((wickets + 1))
          setCommentary("That's excellent bowling and a wicket");
        } else if (firstInningsScores[ballsCount] != runs) {
          setScore((score + parseInt(firstInningsScores[ballsCount])));
          if (firstInningsScores[ballsCount] == 1) {
            setCommentary("That's a good yorker and just a single");
          }
          else if (firstInningsScores[ballsCount] == 2 || firstInningsScores[ballsCount] == 3) {
            setCommentary(`Great running  and it's ${firstInningsScores[ballsCount]} more runs`);
          }
          else {
            setCommentary("Batsmen lofts the shot and it's " + firstInningsScores[ballsCount]);
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

      
    }
  }


  const updateScreen = (runs) => {
    userScreenRef.current.innerHTML = runs;
    compScreenRef.current.innerHTML =firstInningsScores[ballsCount]?firstInningsScores[ballsCount]:firstInningsScores[ballsCount-1];
    Ball(runs, params.tossResult);
  }

  function simulateFirstInnings(role) {
    const results = [];
    let remainingRuns = 22;

    for (let i = 0; i < 6; i++) {
      let currentBallScore;

      if (role === 'bowling') {
        // Bowling priorities: Save 4's and 6's, then 3's, and lastly, save small runs
        if (remainingRuns >= 4 && Math.random() < 0.6) {
          currentBallScore = 4;
        } else if (remainingRuns >= 6 && Math.random() < 0.4) {
          currentBallScore = 6;
        } else if (remainingRuns >= 3 && Math.random() < 0.7) {
          currentBallScore = 3;
        } else {
          // Save small runs with decreasing priority, excluding 0
          const smallRuns = [1, 2];
          currentBallScore = smallRuns[Math.floor(Math.random() * smallRuns.length)];
        }
      } else if (role === 'batting') {
        // Batting priorities: Aim for around 22 runs, with different combinations
        const possibleScores = [1, 2, 3, 4, 6];
        currentBallScore = possibleScores[Math.floor(Math.random() * possibleScores.length)];

        // Ensure not to overshoot the target
        if (remainingRuns - currentBallScore < 0) {
          currentBallScore = remainingRuns;
        }
      }

      // Update the remaining runs and push the current ball score to the results array
      remainingRuns -= currentBallScore;
      results.push(currentBallScore);
    }

    return results;
  }

  

  function simulateSecondInnings(role, target) {
    const results = [];
  
    if (role === 'bowling') {
      // Bowling: Generate an array of defensive values to defend the target
      let remaining = target;
      for (let i = 0; i < 6; i++) {
        const defensiveValue = [6, 4, 3, 2, 1][Math.floor(Math.random() * 5)];
        results.push(defensiveValue);
        remaining -= defensiveValue;
  
        // Ensure the remaining runs are non-negative
        remaining = Math.max(0, remaining);
      }
    } else if (role === 'batting') {
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
        <div className="scorecard w-full h-[355px] bg-[#1e363f] mb-1 rounded-xl flex flex-col items-center ">
          {/* {start ? */}
           <div className="commentary font-Russo text-white my-3">
            {commentary}
          </div> 
           {/* :<button className='font-Russo text-white my-3' onClick={startGame}>Start</button> */}
          {/* } */}
          <div className="scores bg-white w-80 h-40 rounded-2xl  my-3 font-Russo flex justify-between px-3">
            <div className="player1">
              <div className="score text-center text-9xl" ref={userScreenRef}>4</div>
              <div className="playername text-lg">{username}</div>
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
         {target? <div className='text-center hover:cursor-pointer' onClick={()=>{
            navigate(`/gamesecondinnings/${params.tossResult=='batting'?'ball':'bat'}/${target}`);
          }}>Continue</div>:''}

          </div>
        </div>
      }
      <ScoreShortcut ballsCount={ballsCount} score={score} target={target} wickets={wickets} />
    </>
  )

}

export default Game