import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Card from '../../components/Card';
import { COLORS, MESSAGES, SCREENS,VARIABLES } from '../../constants/appConstants';
import { useSelector, useDispatch } from 'react-redux';
import * as orderActions from '../../store/actions/orders';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';



const CheckoutScreen = props => {

    const allAddress = [];
    const subTotal = useSelector(state => state.cart.total);
    const email = useSelector(state => state.auth.user.email);
    const addressData = useSelector(state => state.address.address);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);
    const [selectedAddress, setSelectedAddress] = useState({ label: 'Select Address', address: '' });
    const [error, setError] = useState();
    const dispatch = useDispatch();
    let discount, deliveryFee, total;

    const toggleHandler = () => {
        setVisible(!visible);
    }

    const calDiscount = () => {
        if (subTotal > 3000) {
            discount = (10 * subTotal) / 100;
            deliveryFee = (2 * subTotal) / 100;
            total = (subTotal - discount) + deliveryFee
        } else {
            discount = 0;
            deliveryFee = 100;
            total = (subTotal - discount) + deliveryFee
        }
    }
    const handleGetAddress = () => {
        for (const key in addressData) {
            var label = addressData[key].label
            var address = addressData[key].address
            allAddress.push({ label: label, address: address })
        }
    }


    handleGetAddress()
    calDiscount()

    const handleCompleteOrder = async () => {
        setLoading(true)
        try {
            await dispatch(orderActions.postOrders(total, discount, deliveryFee, selectedAddress.address));
            await dispatch(orderActions.getOrders())
            props.navigation.navigate(SCREENS.COMPLETE_SCREEN)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    if (addressData.length === 0) {
        Alert.alert(MESSAGES.FAILED, MESSAGES.NO_ADDRESS, [{ text: MESSAGES.OK, onPress: () => props.navigation.navigate(SCREENS.ADDRESS_SCREEN) }])
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
                <Card style={styles.container}>
                    <View style={styles.title}>
                        <Text style={{ fontFamily:VARIABLES.myridProRegular}}>ORDER STATUS</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>SUB TOTAL</Text>
                        <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight}}>{`${subTotal} RS`}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>DISCOUNT</Text>
                        <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight }}>{`${discount} RS`}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>DELIVERY FEE</Text>
                        <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight }}>{`${deliveryFee} RS`}</Text>
                    </View>
                    <Card style={{ ...styles.rowContainer, borderRadius: 0 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15,fontFamily:VARIABLES.myridProSemiBold}}>TOTAL</Text>
                        <Text style={{ marginRight: 10, fontSize: 15, fontFamily:VARIABLES.myridProRegular }}>{`${total} RS`}</Text>
                    </Card>
                </Card>
                <Card style={{ ...styles.container, height: 400 }}>
                    <View style={{ ...styles.title, backgroundColor: COLORS.lightGrey }}>
                        <Text style={{fontFamily:VARIABLES.myridProRegular}}>DELEIVERY DETAILS</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>CASH</Text>
                        <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight }}>{deliveryFee}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>DELIVERY TIME</Text>
                        <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight }}>Within 7 Working Days</Text>
                    </View>

                    <TouchableOpacity onPress={toggleHandler} style={{ height: 30, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            visible ?
                                <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular}}>SELECT ADDRESS LABEL</Text>
                                :
                                <AntDesign name="closecircle" size={24} color="black" />
                        }
                    </TouchableOpacity>
                    {
                        !visible ?
                            <DropDownPicker
                                style={styles.dropDown}
                                isVisible={visible}
                                items={allAddress}
                                placeholder='Home'
                                onChangeItem={item => setSelectedAddress({ label: item.label, address: item.address })
                                }
                                containerStyle={{ height: 40, width: '100%', backgroundColor: 'white' }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{ marginHorizontal: 9, width: '94%' }}
                                arrowColor={COLORS.OrangeWeb}
                                arrowSize={20}
                                labelStyle={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    textAlign: 'left',
                                    color: COLORS.OrangeWeb
                                }}
                            />
                            :
                            <View style={{ ...styles.rowContainer }}>
                                <Text style={{ marginLeft: 10,fontFamily:VARIABLES.myridProRegular }}>DELIVERY DETAILS</Text>
                                <Text style={{ marginRight: 10,fontFamily:VARIABLES.myridProLight }}>{selectedAddress.label}</Text>
                            </View>
                    }
                    <View style={{ ...styles.rowContainer, borderRadius: 0 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15,fontFamily:VARIABLES.myridProRegular }}>EMAIL</Text>
                        <Text style={{ marginRight: 10, fontSize: 15,fontFamily:VARIABLES.myridProLight }}>{email}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginVertical: 10,fontFamily:VARIABLES.myridProSemiBold }}>{MESSAGES.deliveryMessage}</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: 2, marginBottom: 5,fontFamily:VARIABLES.myridProSemiBold }}>{MESSAGES.desclaimer}</Text>
                    </View>
                </Card>
            </ScrollView>
            {
                loading ?
                    <View style={styles.bottomContainer}>
                        <ActivityIndicator size="large" color={COLORS.CarrotOrange} />
                    </View>
                    :
                    <TouchableOpacity onPress={handleCompleteOrder} style={styles.bottomContainer}>
                        <Text style={{ fontSize: 15, fontFamily:VARIABLES.myridProBold, color: COLORS.white }}>PLACE YOUR ORDER</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        height: 150,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.CarrotOrange
    },
    rowContainer: {
        height: 30,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        backgroundColor: COLORS.lightGrey,
        height: '100%'
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
    },
    dropDown: {
        marginHorizontal: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})

export default CheckoutScreen;