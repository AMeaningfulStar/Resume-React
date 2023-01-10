import React from 'react';
import Profile from './Profile';
import Experiance from './Experiance';
import ProfessionalSkills from './ProfessionalSkills';

const RightSide = () => {
  return (
    <div className='rightSide'>
      <Profile />
      <Experiance />
      <ProfessionalSkills />
    </div>
  )
}

export default RightSide
