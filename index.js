import { createStore } from 'redux';
import categoryReducer from './reducer/boards.js'
import { categoryCreate, categoryUpdate, categoryDelete, categoryReset } from './action/category-actions.js';
//create a store

const store = createStore(categoryReducer);

console.log(store);
console.log('state', store.getState()) //returns inital state we provide in the reducer

//dispatch an action
store.dispatch(categoryCreate({ title: 'cool beans'}) )
store.getState() // this returns a single thing with a uuid and timestamp for the new coolbeans category
