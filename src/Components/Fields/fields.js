import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import victoryConditions from './secondaryFunctions/victoryConditions';
import fieldClasses from './classNames/fieldsClasses';
import symbolClasses from './classNames/symbolClasses';
import playerAlertStatus from './classNames/playerAlertClasses';
import playerAlert from './secondaryFunctions/playerAlert';
import handleClick from './secondaryFunctions/handleClick';
import './fields.css';
import './playerAlertStatus.css';

const Fields = (props) => {
    const {data, turn, status, addZero, addCross, switchPlayer, wonTheCross, wonTheZERO,nobodyWon, reset} = props
    return (
        <>
         <div className='fieldsContainer'>
            {data.map((sym, index) =>
                <div
                 className={fieldClasses(data, index)}
                 key={index}
                 onMouseUp={() => handleClick(index, turn, status, data, switchPlayer, addCross, addZero)}
                 onClick={()=> victoryConditions(data, wonTheCross, wonTheZERO, nobodyWon)}
                >
                   <span className={symbolClasses(data, index)}>{sym}</span>
                </div>)}
         </div>
         <div className='infoContainer'>
          <span className={playerAlertStatus(status)}>{playerAlert(data, status)}</span>
          <button className='btnReset' onClick={reset}>Reset</button>
         </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        data : state.data,
        turn : state.turn,
        status : state.status
    }
}

export default connect(mapStateToProps, actions)(Fields);