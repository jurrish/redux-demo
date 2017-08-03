'use strict';

//category will have:
//id
//title

//CRUD for a trello board
initialState = [];

//this is pure
//if payload is the category...do this
export default (state=initialState, action) {
  let {type, payload} = action
//do these operations immutably. either with spread operator, or concat
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]

    case 'CATEGORY_UPDATE':
      return state.map(category =>
        category.id == payload.id ? payload : category)

    case 'CATEGORY_DESTROY':
      return state.filter(category =>
        category.id !== payload.id)

    case 'CATEGORY_RESET':
      return initialState

    default:
      return state
  }
}

// reducer(undefined, {type:null})
// returns an empty array

// reducer([], {type: 'CATEGORY_UPDATE', payload: { id: '123', title: 'cool'}})
//returns -> [ { id: '123', title: 'cool' } ]

// reducer(state, { type: 'CATEGORY_CREATE', payload: {id: 'abc', title: 'beans'} })
//returns state that looks like:
//[ { id: '123', title: 'cool' }, { id: 'abc', title: 'beans' } ]

// NOTE:
// Clear uses of setState would be for UI components that have local display state, but aren't relevant for the global application. For example a boolean that represents whether a specific dropdown menu is actively displayed doesn't need to be in global state, so it's more conveniently controlled by the menu component's state.
//
// Other examples might include the collapse/expand state of lines in an accordion display of a hierarchy. Or possibly the currently selected tab in tab navigation. However in both of these examples you might still choose to handle UI state globally. For example this would be necessary if you wanted to persist the expand/collapse state in browser storage so that it would be preserved by page refresh.
//
// In practice it's usually easiest to implement such UI elements with local state, and refactor them into global state as needed.
