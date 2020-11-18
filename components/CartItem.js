import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { COLORS,VARIABLES } from '../constants/appConstants';
import Card from './Card';
import { useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';



const { width, height } = Dimensions.get('window');
const CartItem = props => {

    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        dispatch(cartActions.removeFromCart(props.item.id))
    }
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <View style={styles.contentContainer}>
                    <Card style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.item.imageUrl }} />
                    </Card>
                    <View style={styles.alignment}>
                        <View style={styles.textContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={{ fontSize: 18, fontWeight: '400',fontFamily:VARIABLES.myridProSemiBold}}>{props.item.name}</Text>
                                <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 3,fontFamily:VARIABLES.myridProLight }}>{`Quantity:${props.item.quantity}`}</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={{paddingTop:20,fontSize:15,fontFamily:VARIABLES.myridProLight}}>{`${props.item.sum}$`}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnContainer} onPress={handleRemoveItem}>
                            <Text style={{ fontSize: 12, color: COLORS.RosaCorsa,fontFamily:VARIABLES.myridProSemiBold }}>REMOVE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        height: 120,
        width: width - 20,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: COLORS.lightGrey
    },
    contentContainer: {
        flexDirection: 'row'
    },
    imageContainer: {
        height: 100,
        width: '30%',
        marginLeft: 10,
        marginVertical: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    alignment: {
        marginVertical: 10,
        marginHorizontal: 10,
        width: '60%'
    },
    textContainer: {
        width: '100%',
        flexDirection: 'row',
        height: '60%',
        marginVertical: 5
    },
    leftContainer: {
        width: '70%',
        justifyContent: 'center'

    },
    rightContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnContainer: {
        height: '20%',
        marginHorizontal: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});


export default CartItem