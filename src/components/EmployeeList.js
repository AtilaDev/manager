import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import ListItem from './ListItem';

import { connect } from 'react-redux';
import { employeesFetch } from '../actions/EmployeeActions';

class EmployeeList extends Component {
  componentDidMount = () => {
    this.props.employeesFetch();
  };

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => <ListItem employee={item} />}
        keyExtractor={item => item.name}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
