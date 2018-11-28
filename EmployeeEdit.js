import React, { Component } from 'react';
import { Card, CardSession, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';

class EmployeeEdit extends Component {
    componentWillMount() {
      _.each(this.props.employee, (value, props) =>{

          this.props.employeeUpdate({ props, value });
          //console.log( value );
      });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid});
        //console.log( name, phone, shift );
    }
    render() {
        //console.log(this.props.employee);
        return (
          <Card>
              <EmployeeForm />
              <CardSession>
                  <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
              </CardSession>
          </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);