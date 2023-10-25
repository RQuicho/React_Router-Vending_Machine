import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div>
      <h1>7-Up</h1>
      <img src='https://ik.imagekit.io/pimberly/595e406f0f15f30010780448/tr:w-1000,h-1000,cm-pad_resize/bcd2ee0f/5d70c6b06cb2114d580001dc/58a61698/BRT00109_01.jpg' width={200} />
      <p>
        <Link to='/'>GO BACK</Link>
      </p>
    </div>
  )
}

export default Soda;