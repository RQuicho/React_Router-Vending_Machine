import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div>
      <h1>Chps Ahoy!</h1>
      <img src='https://i5.walmartimages.com/seo/CHIPS-AHOY-Chocolate-Chip-Cookies-Single-Serve-1-4-oz_340b53f5-1a21-4a14-aa4c-f9742dd3bc32_1.69cd24e1aa9be4278c0c2c7c2fefcb9c.jpeg' width={200} />
      <p>
        <Link to='/'>GO BACK</Link>
      </p>
    </div>
  )
}

export default Cookies;