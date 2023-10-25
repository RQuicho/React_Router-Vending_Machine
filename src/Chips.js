import React from 'react';
import { Link } from 'react-router-dom';

const Chips = () => {
  return (
    <div>
      <h1>Doritos</h1>
      <img src='https://i5.walmartimages.com/seo/Doritos-Nacho-Cheese-Flavored-Tortilla-Chips-10-Oz_cf16c90d-f4ae-4d5e-acfc-50840ce4a99b_1.30e4c19f0aa1564bcee2ba96d5a5b9e9.jpeg' width={200} />
      <p>
        <Link to='/'>GO BACK</Link>
      </p>
    </div>
  )
}

export default Chips;