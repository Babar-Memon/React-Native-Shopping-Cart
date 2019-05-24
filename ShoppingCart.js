
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import AppStackNavigator from './AppNavigator'

export default class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});