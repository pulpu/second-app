import { combineReducers } from 'redux'
import rotateReducer from './nameOfReducer'
import computerCardsData from './addCompuerDeckReducer';
import playerCardsData from './addPlayerDeckReducer';

export default combineReducers ({
    rotateReducer : rotateReducer,
    player: playerCardsData,
    computer: computerCardsData
})
