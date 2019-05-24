import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import { books } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'
import ShoppingCartIcon from '../containers/ShoppingCartIcon'
class BooksScreen extends Component {
    static navigationOptions = ({navigation}) => {
        
        return {
            title: "Books",
            headerRight: 
            <ShoppingCartIcon />

        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Products products={books} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(BooksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});