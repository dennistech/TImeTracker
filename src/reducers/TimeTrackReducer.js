import moment from 'moment';
import {
  SHIFT_START_CHANGED,
  SHIFT_END_CHANGED,
  BREAK_START_CHANGED,
  BREAK_END_CHANGED,
  IN_PROGRESS_SHIFT_RETRIEVED,
  DISPLAY_CONFIRM_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  shiftStart: '',
  shiftEnd: '',
  breakStart: '',
  breakEnd: '',
  showConfirm: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHIFT_START_CHANGED:
      return { ...state, shiftStart: moment(action.payload).format('LT'), showConfirm: false };
    case SHIFT_END_CHANGED:
      return INITIAL_STATE;
    case BREAK_START_CHANGED:
      return { ...state, breakStart: moment(action.payload).format('LT'), showConfirm: false };
    case BREAK_END_CHANGED:
      return { ...state, breakEnd: moment(action.payload).format('LT'), showConfirm: false };
    case IN_PROGRESS_SHIFT_RETRIEVED: {
      const { shiftStart, breakStart, breakEnd } = action.payload;

      return {
        ...state,
        shiftStart: shiftStart && moment(shiftStart).format('LT'),
        breakStart: breakStart && moment(breakStart).format('LT'),
        breakEnd: breakEnd && moment(breakEnd).format('LT')
      };
    }
    case DISPLAY_CONFIRM_MODAL:
      return { ...state, showConfirm: action.payload };
    default:
      return state;
  }
};
