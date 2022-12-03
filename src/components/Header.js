import React from 'react';
import '../Main.css';

function Header(){
  return (
    <div className='header-box'>
      {/* 사진 */}
      <div className='photo-content'>
        사진
      </div>
      {/* 인적사항 */}
      <div className='myInfo-content'>
        <span>이름</span>
        <span>이름</span>
        <span>이름</span>
      </div>
    </div>
  );
}

export default Header;

