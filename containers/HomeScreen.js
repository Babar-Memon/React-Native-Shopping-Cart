import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from "react-native";
import ShoppingCartIcon from '../containers/ShoppingCartIcon'

class HomeScreen extends Component {
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
                <TouchableOpacity style={{width: "50%", height: "8%", justifyContent:'center', 
                backgroundColor:'powderblue',borderRadius: 30,
                alignItems: 'center',}}
                onPress={() => this.props.navigation.navigate('Electronics')}
                >
                    <Text style={{color: 'black', fontSize: 20}}>
                        Electronics 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: "50%", height: "8%", justifyContent:'center', 
                backgroundColor:'powderblue',borderRadius: 30,
                alignItems: 'center',  top:20}}
                onPress={() => this.props.navigation.navigate('Books')}
                >
                    <Text style={{color: 'black', fontSize: 20}}>
                        Books
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center'
    }
});