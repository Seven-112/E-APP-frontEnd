import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import { COLORS } from '../constants/appConstants';



const StartupScreen = props => {


    const dispatch = useDispatch();

    useEffect(()=>{
        const tryLogin = async()=>{
            console.log("INSIDE STARTUP SCREEN")
            const userData = await AsyncStorage.getItem('userData');
            console.log(userData)
            if(!userData){
                dispatch(authActions.setDidTryAutoLogin());
                return
            }
            const trasformedData = JSON.parse(userData);
            const {token,user,expiryDate} = trasformedData;
            const expirationDate = new Date(expiryDate);
            if(expirationDate <= new Date() || !token || !user.userId){
                // props.navigation.navigate('Auth');
                dispatch(authActions.setDidTryAutoLogin());
                return 
            };
        const expirationTime = expirationDate.getTime() - new Date().getTime();
        dispatch(authActions.authenticate(user,token,expirationTime))
        }

       tryLogin()
    },[dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator color={COLORS.CarrotOrange} size='large' />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.logoColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default StartupScreen;