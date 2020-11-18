import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import { COLORS, VARIABLES } from '../constants/appConstants';

const OrderItem = props => {

    const { item } = props.item
    const date = new Date(item.date);
    const modifiedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return (
        <View style={{ flex: 1 }}>
            <Card style={styles.screen} >
                <View>
                    <View style={styles.rowContainer}>
                        <Text style={{ ...styles.left, marginLeft: 5, fontSize: 12,fontFamily:VARIABLES.myridProLight }}> <Text style={styles.title}>ORDER ID: </Text>{item.orderId}</Text>
                        <Text style={{ ...styles.right, marginRight: 10 }}><Text style={styles.title}>DISCOUNT: </Text>{item.discounts}</Text>
                    </View>
                    <View style={styles.botContainer}>
                        <Text style={{ ...styles.left, marginLeft: 10,fontFamily:VARIABLES.myridProLight  }}><Text style={styles.title}>DATE: </Text>{modifiedDate}</Text>
                        <Text style={{ ...styles.right, marginRight: 20,fontFamily:VARIABLES.myridProRegular }}><Text style={styles.title}>TOTAL: </Text>{item.total} RS</Text>
                    </View>
                    <TouchableOpacity onPress={props.onClick} style={{ width: '40%', height: '30%', marginLeft: '62%', marginTop: 3, marginBottom: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: COLORS.Persimmon, fontWeight: "bold",fontFamily:VARIABLES.myridProSemiBold  }}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '90%',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        marginVertical: 5,
        color: COLORS.Xiketic
    },
    title: {
        color: COLORS.OrangeWeb,
        fontSize: 15,
        fontWeight: "400",
        fontFamily:VARIABLES.myridProSemiBold
    },
    right: {
        marginRight: 10,
        marginVertical: 5,
        color: COLORS.Xiketic
    }
})
export default OrderItem