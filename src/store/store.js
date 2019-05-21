import {createStore, combineReducers} from 'redux';
import dataReducer from '../reducers/dataReducer';
import playerReducer from '../reducers/playerReducer';
import gameStatusReducer from '../reducers/gameStatusReducer';

const reducers = {
    data : dataReducer,
    turn : playerReducer,
    status : gameStatusReducer
}
const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
export default store;