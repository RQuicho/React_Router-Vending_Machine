import React from 'react';
import { Link } from 'react-router-dom';


const VendingMachine = () => {
  return (
    <div>
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
  )
}

export default VendingMachine;