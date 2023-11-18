import { createStore  , applyMiddleware} from "redux";
import logger from "redux-logger";
import axios from 'axios';

// Store 

const inc =  'increment';
const dec =  'decrement';
const incAmt = 'incrementByAmount'
const store = createStore(reducer , applyMiddleware(logger.default));

// Reducer 

// ACTION names are constant 

function reducer(state = {amount:1} , action){
    if(action.type === 'increment'){
        // Immutability 
        return {amount: state.amount+1}
    }
    if(action.type === 'decrement'){
        // Immutability 
        return {amount: state.amount-1}
    }
    if(action.type === 'incrementByAmount'){
        // Immutability 
        return {amount: state.amount + action.payload}
    }
    return state
}
const history = []

// ACTION CREATORS 
function increment(){
    return {type: inc}
}
function decrement(){
    return {type: dec}
}

function incrementByAmount(value){
    return {type: incAmt , payload : value }
}



setInterval(() =>{
    store.dispatch(incrementByAmount(5))
},2000)


// ACTION EVENT DRIVEN THING {type : 'increment'}

