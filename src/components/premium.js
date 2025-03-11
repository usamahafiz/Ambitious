import React from 'react'
import learn from '../assets/images/learn.png'

const premium = () => {
  return (
    <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={learn} alt="Premium Learning" />

                </div>
                <div className='col-md-6'>
                    <h1>Premium <span style={{ color: 'blue' }}>Learning</span> Experience</h1>

                </div>
               
            </div>

        </div>
  )
}

export default premium
