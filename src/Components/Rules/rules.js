import React from 'react';
import './rules.css';

const Rules = () => {
    return (
        <div className='rulesContainer'>
         <h2>Tic Tac Toe</h2>
         <p>
             <span className='crosses'>Crosses</span> always go first.
             If you lose you are <span className='null'>null</span>. Fight!
         </p>
        </div>
    )
}

export default Rules;