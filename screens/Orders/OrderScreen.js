import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/CustomHeader';
import OrderItem from '../../components/OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import * as orderActions from '../../store/actions/orders';
import { COLORS, SCREENS } from '../../constants/appConstants';


const OrderScreen = props => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
    const [orderData, setOrderData] = useState();
    const userId = useSelector(state => state.auth.user.userId)
    const orders = useSelector(state => state.order.orders)

    useEffect(() => {
        handleGetOrders()
    }, [dispatch])

    const handleGetOrders = async () => {
        setLoading(true)
        try {
            await dispatch(orderActions.getOrders())
        } catch (error) {

        }
        setLoading(false)
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.OrangeWeb} />
            </View>
        )
    }

    if (!loading && orders.length === 0) {
        return (
            <View style={styles.screen}>
                <Image resizeMode="contain" style={{ height: '40%' }} source={require('../../assets/Images/Orders.jpg')} />
                <Text style={{ fontSize: 20, color: COLORS.OrangeWeb, fontWeight: 'bold' }}>NO ORDERS YET</Text>
            </View>
        )
    }
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.orderId}
            renderItem={
                itemData =>
                    <OrderItem
                    onClick={() => {
                       
                        props.navigation.navigate(SCREENS.ORDERDETAILS_SCREEN, {
                          order: itemData,
                          
                        });
                      }}
                      
                        orderId={itemData.orderId}
                        item={itemData}
                    />
            }
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export const screenOptions = navData => {
    return {
        headerTitle: 'ORDERS',
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menus'
                iconName='align-left'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>

    }
}

export default OrderScreen