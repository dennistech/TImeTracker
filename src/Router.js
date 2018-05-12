import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import TimeTrack from './components/TimeTrack';
import CompletedShiftsList from './components/CompletedShiftsList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        initial
        onRight={() => Actions.completedShiftsList()}
        rightTitle="History"
        key="timeTrack"
        component={TimeTrack}
        title="Time Tracker"
      />
      <Scene key="completedShiftsList" component={CompletedShiftsList} title="Completed Shifts" />
    </Router>
  );
};

export default RouterComponent;
