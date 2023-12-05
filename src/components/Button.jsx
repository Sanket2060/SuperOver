import React from 'react'

function Button({imgComponent,text,className,...props}) { //bujdina yo maile
  return (
    <>
      <div className="furthurstyle bg-[#ff8e32] w-20 h-20 rounded-xl " >
        <button className={`bg-[#f4a361] border-2  w-20 h-16 rounded-xl flex flex-col items-center p-2 `} {...props} >
         <div> {imgComponent?imgComponent:null}</div>
          <p className={`font-Russo  ${className}`}>{text}</p>
        </button>
      </div>
    </>
  )

}

export default Button