import React from 'react';
import './menu-item.scss'

const MenuItem = (props) => (
  <div className={`${props.size} menu-item`} style={{backgroundImage:`url(${props.image})`}}>
    <div className='content'>
      <h1 className='title'>{props.title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW!</span>
    </div>
  </div>
)

export default MenuItem;