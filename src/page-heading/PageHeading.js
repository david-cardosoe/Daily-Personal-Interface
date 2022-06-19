import React from 'react'
import IntroDate from './IntroDate';


const PageHeading = ({ today }) => {

  return (
    <div className='page-heading container mt-3'>
        <div className='row'>
            <div className='col text-left'>
                <IntroDate today={today} />
            </div>
        </div>
    </div>
  )
}

export default PageHeading