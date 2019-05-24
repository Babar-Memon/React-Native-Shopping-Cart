import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'



const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
}, {
        navigationOptions: {
            headerTitle: 'Shopping App',
            headerRight: (
                <ShoppingCartIcon />
            )
        }
    })

    export default createAppContainer(AppStackNavigator);