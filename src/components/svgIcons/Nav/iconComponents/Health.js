import React from 'react';

import './style.css';

const Health = ({ fill = 'none', stroke = 'black' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className='MenuItem-image'
    >
      <path
        d='M22 12H18L15 21L9 3L6 12H2'
        stroke={stroke}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Health;
