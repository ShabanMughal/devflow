import QuestionForm from '@/components/forms/QuestionForm'
import React from 'react'

const page = () => {
  return (
    <>
     <h1 className='h1-bold text-dark100_light900'>
        Ask a question
        </h1> 
    <div className='mt-9'>
      <QuestionForm />
    </div>
    </>
  )
}

export default page
