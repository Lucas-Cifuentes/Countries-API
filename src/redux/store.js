import { createStore } from "redux"

const initialState = {
  countries: []
}

const reducer = (state = initialState, actions) => {
  if (actions.type === "ADD_COUNTRIES") {
    return {
      ...state,
      countries: state.countries.concat(actions.countries)
    }
  }
  return state
}

export default createStore(reducer)
