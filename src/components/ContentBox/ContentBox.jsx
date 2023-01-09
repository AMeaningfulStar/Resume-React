import React from 'react';
import LeftSide from './LeftSide/LeftSide';

const ContentBox = () => {
  return (
    <div className='contentBox'>
      <LeftSide />
      <div className='rightSide'></div>
    </div>
  )
}

export default ContentBox
