import { createStore } from 'redux';
import categoryReducer from './reducer/boards.js'
import { categoryCreate, categoryUpdate, categoryDelete, categoryReset } from './action/category-actions.js';
//create a store

const store = createStore(categoryReducer);

console.log(store);
console.log('state', store.getState()) //returns inital state we provide in the reducer

//every time we dispatch, it's going to update the state, and the subscribe (which is a callback) will log the changed state.
store.subscribe(() => {
  console.log('__STATE__', store.getState());
})

//dispatch an action
//dispatch invokes your reducer
store.dispatch(categoryCreate({ title: 'cool beans'}) ) //returns an action object with a type and a payload. that action is being passed into dispatch.

// NOTE:
store.dispatch(categoryCreate({ title: 'cool beans'}) )
//is the same as :
store.dispatch({
  type: 'CATEGORY_CREATE',
  payload: {
    title: 'cool beans',
    uuid: uuid(),
    timestamp: new Date()
  }
})


store.getState() // this returns a single thing with a uuid and timestamp for the new coolbeans category
