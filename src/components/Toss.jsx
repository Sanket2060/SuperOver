import React, { useEffect, useState } from 'react'
import IMAGES from './images/images'
import { Link } from 'react-router-dom';
function Toss() {
    const [spinAnimation, setSpinAnimation] = useState(false);
    const [tossResult,setTossResult]=useState('');
    const [tossResultMessage,setTossResultMessage]=useState('');
    const spin = (userValue) => {
        console.log("userValue:",userValue);
        setSpinAnimation(true);
        if (Math.random()>0.5){
            setTossResult('heads');
        }
        else{
            setTossResult('tails');

        }
        if (tossResult && tossResult==userValue){
            setTossResultMessage('You won the toss')
        }else{
            setTossResultMessage('You lost the toss')

        }

    }
    useEffect(()=>{
        console.log("tossResult:",tossResult);
    },[tossResult])
    return (
        <div className='tossbox w-full h-80 bg-white mb-8 font-Russo flex flex-col items-center'>
            <div className="choose">

                <button className='mr-10' onClick={()=>{
                    spin("heads")}}>Heads</button>
                <button onClick={()=>{
                    spin("tails")}}>Tails</button>
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
                <button className='mr-9'>Bat</button>
                <button>Ball</button>
                </div>
                :''
            }
            <Link to='/game'><div className='text-black'>Continue</div></Link>
            
        </div>
    )
}

export default Toss