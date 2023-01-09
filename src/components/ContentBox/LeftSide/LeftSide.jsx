import React from 'react';
import ContactInfo from './ContactInfo';
import Educatin from './Education';
import Interest from  './Interest';

const LeftSide = () => {
  return (
    <div className='leftSide'>
      <ContactInfo />
      <Educatin />
      <Interest />
    </div>
  )
}

export default LeftSide
