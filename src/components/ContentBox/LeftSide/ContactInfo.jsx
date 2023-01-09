import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <h3>Contact Info</h3>
        <ul>
          <li>
            <span className='icon'>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className='text'>전화번호</span>
          </li>
          <li>
            <span className='icon'>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className='text'>이메일</span>
          </li>
          <li>
            <span className='icon'>
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <span className='text'>깃 허브</span>
          </li>
          <li>
            <span className='icon'>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <span className='text'>010-2802-4955</span>
          </li>
        </ul>
    </div>
  )
}

export default ContactInfo
