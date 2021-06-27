function createReducer(initialState: MyState, handlers: any) {
  return function reducer(state = initialState, action: any) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export interface MyState{
  loading: boolean
}
export default createReducer
