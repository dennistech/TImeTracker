import { combineReducers } from 'redux';
import TimeTrackReducer from './TimeTrackReducer';
import CompletedShiftsReducer from './CompletedShiftsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  timeTrack: TimeTrackReducer,
  completedShifts: CompletedShiftsReducer,
  selectedShiftId: SelectionReducer
});
