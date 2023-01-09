import React from 'react';

const Interest = () => {
  return (
    <div>
      <h3>Interest</h3>
      <ul className='interest'>
        <li><span className='icon'><ion-icon name="game-controller-outline"></ion-icon></span>Gaming</li>
        <li><span className='icon'><ion-icon name="mic-outline"></ion-icon></span>Singing</li>
        <li><span className='icon'><ion-icon name="restaurant-outline"></ion-icon></span>Cooking</li>
        <li><span className='icon'><ion-icon name="videocam-outline"></ion-icon></span>Watching</li>
      </ul>
    </div>
  )
}

export default Interest
