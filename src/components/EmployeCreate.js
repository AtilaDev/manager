import React, { Component } from 'React';
import { connect } from 'react-redux';
import { employeeCreate, employeeReset } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentDidMount = () => {
    this.props.employeeReset();
  };

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    return (
      <Card>
        <EmployeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStatoToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStatoToProps,
  { employeeCreate, employeeReset }
)(EmployeeCreate);
