import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const ContentBox = () => {
  return (
    <div className='contentBox'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default ContentBox
