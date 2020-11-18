
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native'
import CartItem from '../../components/CartItem';
import { useSelector } from 'react-redux';
import { COLORS, SCREENS, VARIABLES } from '../../constants/appConstants';
var image = require('../../assets/Images/empty-cart.png');


const CartScreen = props => {

    const cartData = useSelector(state => {
        const modifiedData = []
        for (const key in state.cart.cartItems) {
            modifiedData.push({
                id: key,
                name: state.cart.cartItems[key].name,
                price: state.cart.cartItems[key].price,
                quantity: state.cart.cartItems[key].quantity,
                imageUrl: state.cart.cartItems[key].imageUrl,
                sum: state.cart.cartItems[key].sum

            })
        }
        return modifiedData.sort((a, b) =>
            a.id > b.id ? 1 : -1
        )
    })
    console.log(cartData.length)
    if (cartData.length === 0) {
        return (
            <View style={styles.center}>
                <Image resizeMode="center" source={image} />
            </View>
        )
    }
    return (
        <View style={styles.screen}>
            <ScrollView>
                {
                    cartData.map(item => <CartItem key={item.id} item={item} />)
                }
            </ScrollView>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(SCREENS.CHECKOUT_SCREEN)
            }} style={styles.bottomContainer}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.white,fontFamily:VARIABLES.myridProRegular }}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    bottomContainer: {
        backgroundColor: COLORS.CarrotOrange,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.CarrotOrange
    }

})

export const screenOptions = navData => {
    return {
        headerTitle: 'CART',
        headerStyle: { shadowColor: 'transparent' },

    }
}

export default CartScreen;