import { SELECT_SHIFT } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_SHIFT:
      return action.payload;
    default:
      return state;
  }
};
