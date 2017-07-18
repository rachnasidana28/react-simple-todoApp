import Immutable from 'immutable';
import {ADD_TODO, DEL_TODO} from '../actions';


export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.push(action.todo);
    case DEL_TODO:
      return state.omit(action.index);
    default:
      return state
  }
}
