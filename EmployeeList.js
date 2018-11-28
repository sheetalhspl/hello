import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions'
import { View , Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { CardSession } from './common';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
    }
    onRowPress(item) {
       Actions.employeeEdit({ employee : item });
    }
    
    renderListData(item) {
        return (
           <TouchableWithoutFeedback onPress={this.onRowPress.bind(this, item)}>
               <View>
                  <CardSession>
                     <Text style={{fontSize : 18, paddingLeft : 15}}>{item.name}</Text>
                  </CardSession>
               </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        //console.log(this.props);
        return (
            <FlatList
                data={this.props.employees}
                renderItem={({ item }) => this.renderListData(item)}
                extraData={this.props.employees}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
       return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);