import { combineReducers } from 'redux';
import {ADD_ITEM, DELETE_ITEM, RESET_ITEM} from '../Actions/Types'



const ItemsReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_ITEM:
        return[...state, { id: action.id, name: action.name }]

      case DELETE_ITEM:
        return state.filter(({id}) => id !== action.id);
     
      case RESET_ITEM: 
        return []
  
      default:
        return state
    }
  };
  
  // ...

export default combineReducers({
  items: ItemsReducer
});