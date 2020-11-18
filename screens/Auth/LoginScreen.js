import React, { useState, useEffect } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, ActivityIndicator, TextInput, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import { COLORS, VARIABLES, MESSAGES, SCREENS, PLACEHOLDERS } from '../../constants/appConstants';
import { FontAwesome } from '@expo/vector-icons';



const LoginScreen = props => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        if (error) {

            Alert.alert(MESSAGES.ERROR_OCCURED, error, [{ text: MESSAGES.OK }])
            setError(null)
        }
    }, [error])

    const loginhandler = async () => {

        if (!email) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.NAME_EMPTY, [{ title: MESSAGES.OK }])
            setEmail('')
        } else if (!password) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_EMPTY, [{ title: MESSAGES.OK }])
            setPassword('');
        } else if (password.length < 8) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_CHECK, [{ title: MESSAGES.OK }])
            setPassword('');
        } else {
            setError(null)
            setIsLoading(true)
            try {
                await dispatch(authActions.login(email, password))
               // await Alert.alert(MESSAGES.SUCCESS, MESSAGES.LOGIN_SUCCESS, [{ text: MESSAGES.OK, onPress: () => props.navigation.navigate(SCREENS.HOME_SCREEN) }])
            } catch (err) {
                setError(err.message)
                console.log(error)
            }
            setIsLoading(false)

        }
    }

    const forgetHandler = () => {
        if (!email) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.EMAIL_EMPTY, [{ title: MESSAGES.OK }])
            setEmail('')
        } else {
            props.navigation.navigate(SCREENS.FORGET_PASSWORD_SCREEN, { email: email });
        }
    }




    return (
        <ScrollView style={styles.screen}>
            <View>
                <View style={styles.imageContainer}>
                    <Image resizeMode="stretch" source={require('../../assets/Images/logo1.png')} style={styles.image} />
                </View>
                <View style={{ marginTop: 30, ...styles.textContainer }}>
                    <Text style={styles.text}>EMAIL ADDRESS</Text>
                    <Card style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="user-circle-o" size={25} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} placeholder={PLACEHOLDERS.EMAIL} autoCapitalize="none" value={email} onChangeText={text => setEmail(text)} />
                    </Card>
                </View>
                <View style={{ marginTop: 15, ...styles.textContainer }}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <Card style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="key" size={25} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} value={password} autoCapitalize="none" placeholder={PLACEHOLDERS.PASSWORD} secureTextEntry={true} onChangeText={text => setPassword(text)} />
                    </Card>
                </View>
                <View style={styles.forgetContainer}>
                    <TouchableOpacity onPress={forgetHandler}>
                        <Text style={styles.forgetText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                {
                    isLoading ? <ActivityIndicator size="large" color={COLORS.activityIndicator} /> 
                    :
                     <TouchableOpacity onPress={loginhandler} style={styles.buttonContainer}>
                        <Text style={{ fontSize: 15, fontFamily: VARIABLES.myridProSemiBold, color: COLORS.white }}>SIGN IN</Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => {
                    props.navigation.navigate(SCREENS.SIGNUP_SCREEN)
                }} style={styles.signUpContainer}>
                    <Text style={{ fontSize: 15, fontFamily: VARIABLES.myridProSemiBold, color: COLORS.OrangeWeb }}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'#f6f6f6'

    },
    imageContainer: {
        marginTop: '24%',
        height: 150,
        backgroundColor:'red',
        width: 150,
        backgroundColor: '#ccc',
        marginHorizontal: '24%',


    },
    image: {
        width: '140%',
        height: '140%',
    },
    textContainer: {
        marginHorizontal: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: COLORS.white,
        marginTop: 5,
        borderRadius: 20,
        height: 45,
        flexDirection: 'row',
    },
    icon: {
        padding: 8
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
        borderRadius: 20,
        shadowColor: 'white',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    text: {
        fontSize: 13,
        fontFamily: VARIABLES.myridProRegular
    },
    signUpContainer: {
        marginTop: 10,
        height: 45,
        borderWidth: 1,
        marginHorizontal: 20,
        borderColor: COLORS.CarrotOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    forgetContainer: {
        marginVertical: 10,
        alignItems: 'flex-end',
        marginHorizontal: 20
    },
    forgetText: {
        fontSize: 13,
        fontFamily: VARIABLES.myridProRegular
    },
})

export default LoginScreen;