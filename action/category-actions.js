// NOTE:
//action creators are helper functions to create actions
//you should ONLY use action creators throughout your app
//you should never hard code action literals in your app

//all these return an action object

export const categoryCreate = (category) => {
  category.id = uuid()
  category.timestamp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
})

export const categoryRest = () => ({ type: 'CATEGORY_RESET' })
