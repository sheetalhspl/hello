import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSession, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 20, color: 'red', alignSelf: 'center' }}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login 
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSession>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSession>
                <CardSession>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSession>
                {this.renderError()}
                <CardSession>

                    {this.renderButton()}
                </CardSession>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading

    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);