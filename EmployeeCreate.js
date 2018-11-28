import React, { Component } from 'react';
import { Card, CardSession, Button, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import  EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift : shift || 'Monday'});
    }
    render() {
        //console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm { ...this.props } />
                <CardSession>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSession>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps,{
     employeeUpdate, employeeCreate
})(EmployeeCreate);