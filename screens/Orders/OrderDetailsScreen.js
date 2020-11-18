import React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import { COLORS,VARIABLES } from '../../constants/appConstants';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';



const { width, height } = Dimensions.get('window');
const OrderDetailsScreen = props => {
    console.log(props.route.params.order)
    const orderData = props.route.params.order.item
    console.log(props)
    const date = new Date(orderData.date);
    const modifiedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    return (
        <ScrollView style={{ marginTop: 20, backgroundColor: COLORS.white }} >
            <View style={{ height: height }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="cover" source={require('../../assets/Images/logo.png')} />
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => (props.navigation.pop())}>
                            <AntDesign style={styles.icon} name="leftcircle" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>E-SHOP</Text>
                        <View style={styles.Container}>
                            <Text style={{ ...styles.productCode, fontSize: 14, color: COLORS.lightBlack,fontFamily:VARIABLES.myridProRegular  }}>{`Order Number: ${orderData.orderId}`}</Text>
                            <Text style={{ ...styles.productCode, fontSize: 14, color: COLORS.lightBlack,fontFamily:VARIABLES.myridProLight  }}>{`Delieverd: ${modifiedDate}`}</Text>
                        </View>
                        <Text style={{ left: 5, right: 5, top: 6, color: '#a6a6a6' }}>{`Delivery Address: ${orderData.address}`}</Text>
                    </View>
                    <Card style={{ ...styles.detailContainer, borderRadius: 0, shadowRadius: 2 }}>
                        {
                           
                            orderData.products.map(item => (
                                console.log("INSIDE",item),
                                <View key={item.productId} style={styles.rowContainer}>
                                    <Text style={{ padding: 8 }}>{item.quantity} X {item.name} </Text>
                                    <Text style={{ padding: 8 }}>{`${item.price * item.quantity} RS`}</Text>
                                </View>
                            ))
                        }
                        <View style={styles.rowContainer} >
                            <Text style={{ padding: 8,fontFamily:VARIABLES.myridProRegular  }}>Sub Total</Text>
                            <Text style={{ padding: 8 ,fontFamily:VARIABLES.myridProLight }}>{`${orderData.total - orderData.discounts} RS`}</Text>
                        </View>
                        <View style={styles.rowContainer} >
                            <Text style={{ padding: 8,fontFamily:VARIABLES.myridProRegular }}>Discount</Text>
                            <Text style={{ padding: 8,fontFamily:VARIABLES.myridProLight  }}>{`${orderData.discounts} RS`}</Text>
                        </View>
                        <View style={styles.rowContainer} >
                            <Text style={{ padding: 8,fontFamily:VARIABLES.myridProRegular  }}>Total (inc Tax)</Text>
                            <Text style={{ padding: 8,fontFamily:VARIABLES.myridProLight  }}>{`${orderData.total} RS`}</Text>
                        </View>
                    </Card>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 18, color: COLORS.white,fontFamily:VARIABLES.myridProRegular }}>REORDER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20
    },
    imageContainer: {
        height: '40%',
        backgroundColor: COLORS.OrangeWeb,
        width: width,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
    },
    contentContainer: {
        height: '50%'
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
        fontWeight: '500'
    },
    title: {
        color: COLORS.lightBlack,
        top: 5,
        left: 5,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily:VARIABLES.myridProRegular
        

    },
    image: {
        width: '100%',
        height: '100%',

    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    },
    shopIcon: {
        marginRight: 10,
        marginTop: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    productCode: {
        top: 5,
        left: 5,
        color: COLORS.CarrotOrange,
        fontSize: 16,
        fontFamily:VARIABLES.myridProSemiBold
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 20,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.Persimmon,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.Persimmon
    },
    detailContainer: {
        marginTop: 20,
        backgroundColor: COLORS.white,
    },


})

export default OrderDetailsScreen;