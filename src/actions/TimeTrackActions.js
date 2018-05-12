import {
  updateInProgressShiftStart,
  updateInProgressBreakStart,
  updateInProgressBreakEnd,
  retrieveInProgressShift,
  clearInProgressShift,
  addEntryToCompletedShifts,
  retrieveCompletedShifts,
  removeCompletedShift
} from '../storage/localDB';
import {
  DISPLAY_CONFIRM_MODAL,
  SHIFT_START_CHANGED,
  SHIFT_END_CHANGED,
  BREAK_START_CHANGED,
  BREAK_END_CHANGED,
  IN_PROGRESS_SHIFT_RETRIEVED,
  COMPLETED_SHIFTS_FETCH_SUCCESS,
  SELECT_SHIFT
} from './types';

export const displayConfirmModal = (bool) => {
  return {
    type: DISPLAY_CONFIRM_MODAL,
    payload: bool
  };
};

export const saveShiftStart = (time) => {
  updateInProgressShiftStart(time);
  return {
    type: SHIFT_START_CHANGED,
    payload: time
  };
};

export const saveShiftEnd = (time) => {
  addEntryToCompletedShifts(time);
  clearInProgressShift();

  return {
    type: SHIFT_END_CHANGED,
    payload: time
  };
};

export const saveBreakStart = (time) => {
  updateInProgressBreakStart(time);
  return {
    type: BREAK_START_CHANGED,
    payload: time
  };
};

export const saveBreakEnd = (time) => {
  updateInProgressBreakEnd(time);
  return {
    type: BREAK_END_CHANGED,
    payload: time
  };
};

export const loadInProgressShift = () => {
  const { shiftStart, breakStart, breakEnd } = retrieveInProgressShift();

  return {
    type: IN_PROGRESS_SHIFT_RETRIEVED,
    payload: { shiftStart, breakStart, breakEnd }
  };
};

export const completedShiftsFetch = () => {
  return {
    type: COMPLETED_SHIFTS_FETCH_SUCCESS,
    payload: retrieveCompletedShifts()
  };
};

export const completedShiftDelete = ({ id }) => {
  removeCompletedShift({ id });
  
  return {
    type: COMPLETED_SHIFTS_FETCH_SUCCESS,
    payload: retrieveCompletedShifts()
  };
};

export const selectShift = (shiftId) => {
  return {
    type: SELECT_SHIFT,
    payload: shiftId
  };
};
