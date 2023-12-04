import React from 'react'

function Button({imgComponent,text,...props}) { //bujdina yo maile
  return (
    <>
      <div className="furthurstyle bg-[#ff8e32] w-20 h-20 rounded-xl" >
        <button className='bg-[#f4a361] border-2  w-20 h-16 rounded-xl' {...props} >
          {imgComponent?imgComponent:null}
          <p className='font-Russo'>{text}</p>
        </button>
      </div>
    </>
  )

}

export default Button