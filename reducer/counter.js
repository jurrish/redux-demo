'use strict';

//all redux-reducers have the same function signature:

// (oldState, action) => newState

//Redux passes in the oldState. the reducer uses it immutably. it's a function taht takes in oldState, and an action, and returns newState. the action is what's going to change the state.

//this doesn't track state. it just manipulates it.

//all state manipulation happens in this function.

//redux reducers both define the state and the interactions to the state


//an action is an object with two proptypes (type, payload)
//it gets passed into a reducer and the reducer can use the action to update the state
var initialState = 0;


let reducer = (state=initialState, action) => {
  let { type, payload } = action;

  switch(type) {

    case 'INC':
      return state + 1

    case 'DEC':
      return state - 1

    default:
      return state
  }
}

export default reducer;
