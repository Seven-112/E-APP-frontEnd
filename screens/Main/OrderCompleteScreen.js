import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, MESSAGES, SCREENS,VARIABLES } from '../../constants/appConstants';

const OrderCompleteScreen = props => {
    return (
        <View style={styles.screen}>
            <AntDesign name="checkcircleo" size={80} color={COLORS.OrangeWeb} />
            <Text style={{fontSize:30,color:COLORS.OrangeWeb,fontWeight:'bold'}}>ORDER COMPLETED</Text>
            <Text style={{fontSize:15,color:COLORS.OrangeWeb,marginHorizontal:50}}>{MESSAGES.orderComplete}</Text>
            <TouchableOpacity onPress={()=>(props.navigation.navigate(SCREENS.HOME_SCREEN))} style={styles.btnContainer}>
                <Text style={{padding:10,fontSize:15,fontFamily:VARIABLES.myridProRegular,color:COLORS.DarkSienna}}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer:{
        backgroundColor:COLORS.white,
        height:45,
        marginTop:8,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        borderWidth:1,
        borderColor:COLORS.CarrotOrange
    }
});


export default OrderCompleteScreen;
