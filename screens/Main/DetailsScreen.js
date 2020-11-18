import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Keyboard, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native'
import { COLORS, MESSAGES, VARIABLES } from '../../constants/appConstants';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import CartItem from '../../Model/cartItem';


const { width, height } = Dimensions.get('window');

const DetailsScreen = props => {
    const Data = props.route.params.item
    const [qty, setQty] = useState('1');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleMinus = () => {
        var quantity = parseInt(qty)
        if (quantity === 1) {
            Alert.alert(MESSAGES.ATTENTION, MESSAGES.MINIMUM_QUANTITY, [{ text: MESSAGES.OK }])
        } else {
            quantity = quantity - 1
            setQty(quantity.toString())
        }
    }
    const handlePlus = () => {
        var quantity = parseInt(qty)
        if (quantity < 1 && quantity > 99) {
            setQty(quantity.toString())
        } else {
            quantity = quantity + 1
            setQty(quantity.toString())
        }
    }

    const inputHandler = qty => {
        setQty(qty)
    }
    const handleAddProduct = async () => {
        setLoading(true)
        const quantity = parseInt(qty)
        const selectedProduct = new CartItem(Data.productId, Data.title, Data.price, quantity, Data.imageUrl)
        try {
            await dispatch(cartActions.addtoCart(selectedProduct))
            await Alert.alert(MESSAGES.SUCCESS, MESSAGES.ADDED_CART_SUCCESS, [{ text: MESSAGES.OK }])
        } catch (error) {
        }
        setLoading(false)
    }


    return (
        <SafeAreaView style={{ marginTop: 20 }}>
            <ScrollView >
                <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={80} style={{ flex: 1, height: height }}>
                    <TouchableWithoutFeedback onPress={() => {
                        Keyboard.dismiss()
                    }}>
                        <View>
                            <View style={styles.imageContainer}>
                                <Image resizeMode="cover" style={styles.image} source={{ uri: Data.imageUrl }} />
                                <View style={styles.header}>
                                    <TouchableOpacity onPress={() => (props.navigation.pop())}>
                                        <AntDesign style={styles.icon} name="leftcircle" size={30} color="orange" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => (props.navigation.navigate('cart'))}>
                                        <AntDesign style={styles.shopIcon} name="shoppingcart" size={30} color="orange" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.contentContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{Data.title}</Text>
                                    <View style={styles.rowContainer}>
                                        <Text style={styles.productCode}>{`${Data.productId}`.toUpperCase()}</Text>
                                        <View style={styles.ratingContainer}>
                                            <AntDesign name="star" size={24} color={COLORS.CarrotOrange} />
                                            <Text style={{ color: '#707070' }}>{`${Data.rating}/5`}</Text>
                                        </View>
                                    </View>
                                    <Text adjustsFontSizeToFit={true} style={{ marginHorizontal: 10, fontSize: 15,fontFamily:VARIABLES.myridProLight }}>{Data.description}</Text>
                                </View>
                            </View>
                            <View style={styles.qtyContainer}>
                                <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProSemiBold }}>Quantity</Text>
                                <Card style={styles.qtyValueContainer}>
                                    <TouchableOpacity onPress={handleMinus} >
                                        <AntDesign style={{ marginLeft: 10 }} name="minus" size={25} color="white" />
                                    </TouchableOpacity>
                                    <TextInput keyboardType="numeric" value={qty} onChangeText={inputHandler} style={{ backgroundColor: 'white', width: '30%', height: 40, padding: 10, color: COLORS.lightBlack }} maxLength={2} />
                                    <TouchableOpacity onPress={handlePlus}>
                                        <AntDesign style={{ marginRight: 10 }} name="plus" size={25} color="white" />
                                    </TouchableOpacity>
                                </Card>
                            </View>
                            {
                                loading ?
                                    <View>
                                        <ActivityIndicator size="large" color={COLORS.CarrotOrange} />
                                    </View>
                                    :
                                    <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                                        <Text style={{ fontSize: 18, color: COLORS.white,fontFamily:VARIABLES.myridProSemiBold }}>Add to Cart</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20
    },
    imageContainer: {
        height: '45%',
        width: width,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
    },
    header: {
        position: 'absolute',
        marginTop: 5,
        height: 45,
        width: width,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    headerTitle: {
        fontSize: 22,
        color: COLORS.white,
        marginVertical: 10,
        marginLeft: width / 2 - 80,
        fontWeight: '500',
        fontFamily:VARIABLES.myridProRegular
    },
    title: {
        color: COLORS.lightBlack,
        top: 5,
        left: 5,
        fontSize: 25,
        fontFamily:VARIABLES.myridProRegular
    },
    image: {
        width: '100%',
        height: '100%'
    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    },
    shopIcon: {
        marginRight: 10,
        marginTop: 10
    },
    contentContainer: {
        height: '23%',
        marginHorizontal: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    productCode: {
        marginLeft: 5,
        marginTop: 5,
        color: COLORS.CarrotOrange,
        fontSize: 20,
        fontFamily:VARIABLES.myridProRegular
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        right: 5
    },
    button: {
        marginTop: 25,
        marginHorizontal: 20,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.Persimmon,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.Persimmon,
        marginBottom: 10
    },
    qtyContainer: {
        flexDirection: 'row',
        marginTop: 2,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    },
    qtyValueContainer: {

        flexDirection: 'row',
        width: '50%',
        backgroundColor: '#d6d6d6',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5
    }

})

export default DetailsScreen;