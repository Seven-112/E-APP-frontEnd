import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { COLORS, MESSAGES, SCREENS, PLACEHOLDERS, VARIABLES } from '../../constants/appConstants';
import { FontAwesome } from '@expo/vector-icons';
import * as authActions from '../../store/actions/auth';


const ForgetPasswordScreen = props => {

    const email = props.route.params.email;
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const submithandler = async () => {
        if (!password) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_EMPTY, [{ title: MESSAGES.OK }])
            setPassword('');
        } else if (password.length < 8) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_CHECK, [{ title: MESSAGES.OK }])
            setPassword('');
        }
        else {
            setError(null)
            setIsLoading(true)
            try {
                await dispatch(authActions.forgetPassword(email, password))
                await Alert.alert(MESSAGES.SUCCESS, MESSAGES.PASSWORD_CHANGED_SUCCESS, [{ text: MESSAGES.OK, onPress: () => props.navigation.navigate(SCREENS.LOGIN_SCREEN) }])
            } catch (err) {
                console.log(err)
                await Alert.alert(MESSAGES.FAILED, err, [{ text: MESSAGES.OK }])
                setError(err.message)
            }
            setIsLoading(false)

        }
    }


    return (
        <ScrollView style={styles.screen}>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/Images/logo.png')} style={styles.image} />
                </View>
                <View style={{ marginTop: 15, ...styles.textContainer }}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="key" size={20} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} value={password} placeholder={PLACEHOLDERS.PASSWORD} secureTextEntry={true} onChangeText={text => setPassword(text)} />
                    </View>
                </View>
                {
                    isLoading ?
                        <ActivityIndicator size="large" color={COLORS.activityIndicator} />
                        :
                        <TouchableOpacity onPress={submithandler} style={styles.buttonContainer}>
                            <Text style={{ fontSize: 15, color: COLORS.white, fontFamily: VARIABLES.myridProSemiBold }}>SUBMIT</Text>
                        </TouchableOpacity>
                }
            </View>
        </ScrollView>
    )

}

export const screenOptions = navData => {
    return {
        headerStyle: { shadowColor: 'transparent' },
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    imageContainer: {
        marginTop: '28%',
        height: 150,
        width: 150,
        backgroundColor: '#ccc',
        marginHorizontal: '30%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        marginHorizontal: 20
    },
    inputContainer: {
        borderColor: COLORS.OrangeWeb,
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 20,
        height: 45,
        flexDirection: 'row',
    },
    icon: {
        padding: 10
    },
    input: {
        margin: 5,
        width: '80%'
    },
    buttonContainer: {
        marginTop: 40,
        height: 45,
        marginHorizontal: 20,
        backgroundColor: COLORS.CarrotOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    text: {
        fontSize: 12,
        fontFamily: VARIABLES.myridProRegular
    },


})

export default ForgetPasswordScreen;