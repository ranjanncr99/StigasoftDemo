import {ADD_ITEM, DELETE_ITEM, RESET_ITEM} from './Types'

let nextId = 0;
export const addItem = name => (
    {
      type: ADD_ITEM,
      id: nextId++,
      name
    }
  );

export const deleteItem = id => (
  {
    type: DELETE_ITEM,
    id
  }
);

export const resetItem = () => (
  {
    type: RESET_ITEM,
  }
);