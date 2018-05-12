import React, { Component } from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'realm/react-native';
import ListItem from './ListItem';
import { completedShiftsFetch, selectShift } from '../actions';

const styles = {
  listViewStyle: {
    backgroundColor: '#007aff',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderColor: '#007aff',
  },
};

class CompletedShiftsList extends Component {
  componentWillMount() {
    this.props.completedShiftsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUnmount() {
    this.props.selectShift(null);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(props.completedShifts);
  }

  renderRow(completedShift) {
    return <ListItem completedShift={completedShift} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        style={styles.listViewStyle}
      />
    );
  }
}

const mapStateToProps = state => {
  const completedShifts = map(state.completedShifts, (val, uid) => {
    return { ...val, uid };
  });

  return { completedShifts };
};

export default connect(mapStateToProps, { completedShiftsFetch, selectShift })(CompletedShiftsList);
