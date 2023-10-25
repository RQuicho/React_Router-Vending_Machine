import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';


const VendingMachine = () => {
  return (
    <div>
      <img src='https://media.istockphoto.com/vectors/vintage-vending-machine-with-food-and-drinks-retro-style-vector-id537518740?k=6&m=537518740&s=612x612&w=0&h=F40j5CcNBV-ogWeJXJiqM5REOGLgTkd7XQweIOD678M=' />
      <div className='snacks'>
        <p>
          <Link to='/chips'>Chips</Link>
        </p>
        <p>
          <Link to='/soda'>Soda</Link>
        </p>
        <p>
          <Link to='/cookies'>Cookies</Link>
        </p>
      </div>
    </div>
  )
}

export default VendingMachine;