import React, { useEffect, useState } from 'react'
import IMAGES from './images/images'
import { useHistory } from 'react-router-dom';
function Toss() {
    const history=useHistory();
    const [spinAnimation, setSpinAnimation] = useState(false);
    const [tossResult,setTossResult]=useState('');
    const [tossResultMessage,setTossResultMessage]=useState('');
    const [tossDecision,setTossDecision]=useState('');
    const [userValue,setUserValue]=useState('');
    const spin =  () => {
        setSpinAnimation(true);
        if (Math.random()>0.5){
            setTossResult('heads');
        }
        else{
            setTossResult('tails');
        }
    }
    useEffect(()=>{
        if (tossResult && tossResult==userValue){
            setTossResultMessage('You won the toss')
        }
        if (tossResult && tossResult!=userValue){
            setTossResultMessage('You lost the toss')
        }
    },[tossResult,userValue])       
    
    useEffect(()=>{
        console.log("tossResult:",tossResult);
        console.log("userValue:",userValue);
    },[tossResult])
    return (
        <div className='tossbox w-full h-80 bg-white mb-8 font-Russo flex flex-col items-center'>
            <div className="choose">

                <button className='mr-10' onClick={()=>{
                    spin();
                    setUserValue('heads');
                    }}>Heads</button>
                <button onClick={()=>{
                    spin()
                    setUserValue('tails'); 
                }    
                    }>Tails</button>
            </div>
            {
             (tossResult=='heads')?
                <img src={IMAGES.heads} alt="" srcset="" className='w-32 h-32 mt-8 ' />
            :
            (tossResult=='tails')?
                <img src={IMAGES.tails} alt="" srcset="" className='w-32 h-32 mt-8 ' />
            :
                <img src='https://images-platform.99static.com/ZGWMPGt5Yll4-wKR0grdDrFuLv8=/500x500/top/smart/99designs-contests-attachments/49/49133/attachment_49133556' alt="" srcset="" className={`w-32 h-32 mt-8 ${spinAnimation?'animate-spin':''}`} />
            
        
            }
            <div className="tossResult my-5">{tossResultMessage}</div>
            {
                (tossResultMessage=='You won the toss')?
                    <div className="choose flex ">
                <button className='mr-9' onClick={()=>setTossDecision('Bat')}>Bat</button>
                <button onClick={()=>setTossDecision('Bat')}>Ball</button>
                </div>
                :<div>Opponent decided to {Math.random()>0.5?'bat':'ball'} first</div>
            }
        <div className='text-black' onClick={()=>{history.push('/game', { tossDecision})}}>Continue</div>
            
        </div>
    )
}

export default Toss