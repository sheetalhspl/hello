import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSession, Input } from './common';

class EmployeeForm extends Component {
    render() {
       return (
          <View>
             <CardSession>
                    <Input
                       label="Name"
                       placeholder="Name" 
                       value={this.props.name}
                       onChangeText={value => this.props.employeeUpdate({props : 'name', value })}
                    />
                </CardSession>
                <CardSession>
                    <Input
                      label="Phone"
                      placeholder="0123456789" 
                      value={this.props.phone}
                      onChangeText={value => this.props.employeeUpdate({ props: 'phone', value })}
                    />
                </CardSession>
                <CardSession>
                    <Text style={{ fontSize: 18, paddingLeft: 20}}>Shift</Text>
                     <Picker
                     style={{ flex: 1 }}
                     selectedValue={this.props.shift}
                     onValueChange={value => this.props.employeeUpdate({ props: 'shift', value})}
                     >
                         <Picker.Item label="Monday" value="Monday" />
                         <Picker.Item label="Tuesday" value="TuesDay" />
                         <Picker.Item label="Wednesday" value="Wednesday" />
                         <Picker.Item label="Thursday" value="Thursday" />
                         <Picker.Item label="Friday" value="Friday" />
                         <Picker.Item label="Saturday" value="Saturday" />
                         <Picker.Item label="Sunday" value="Sunday" />
                     </Picker>
                </CardSession>
          </View>
       );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
