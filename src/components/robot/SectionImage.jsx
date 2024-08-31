import React from 'react'

function SectionImage() {
  return (
    <div className='py-8 px-28'>
      <div className='flex'>
        <div className='w-1/2 px-16 bg-[#F5F5F5] flex justify-start items-center'>
          <div className='flex flex-col items-start gap-4'>
            <div className='text-3xl font-almirego'>
              Want to choose your perfect<br/>drone?
            </div>
            <div className='text-black font-light font-almirego'>
              Take the quiz and find out our perfect match
            </div>
            <div className='rounded-full font-light font-almirego bg-[#0070D5] text-white px-4 pt-4 pb-2'>
              Take a quiz
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="robot/quiz.jfif" alt="quiz" />
        </div>
      </div>
    </div>
  )
}

export default SectionImage