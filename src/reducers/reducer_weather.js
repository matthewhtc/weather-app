import { FETCH_WEATHER } from '../actions/index'; 

/**
 * 
 * @param {*} state - we always need state (required); null for when booting up the app. 
 * @param {*} action - the action that is passed into the reducer from the actionCreators
 */
export default function(state = [], action) {
  // console.log('action received', action); 
  /* remember, we only update state by calling this.setState. same with redux! never manipulate state directly. 
   * we return a completely new instance of state. only way we can do it. still don't know why though. */
  switch (action.type) {
  case FETCH_WEATHER: 
    // this will create new version of our state. 
    // return state.concat([ action.payload.data ]); 
    return [ action.payload.data, ...state ]; // same as above... ES6. returns: [city, city, city, ...]

  }
  return state; 
}