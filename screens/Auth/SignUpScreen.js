import { Alert, Image, ScrollView, StyleSheet, ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';
import { COLORS,MESSAGES, SCREENS, PLACEHOLDERS } from '../../constants/appConstants';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../../components/Card';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';

const SignUpScreen = props => {



    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState();
    const [pickedImage, setPickedImage] = useState();
    const [uploaded, setUploaded] = useState(false);



    useEffect(() => {
        if (error) {
            Alert.alert(MESSAGES.ERROR_OCCURED, error, [{ text:MESSAGES.OK }])
        }
        if (success) {
            Alert.alert(MESSAGES.SUCCESS, success, [{ text: MESSAGES.OK, onPress: () => props.navigation.navigate(SCREENS.LOGIN_SCREEN) }])
        }
    }, [error, success])




    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (result.status !== 'granted') {
            Alert.alert(MESSAGES.PERMSISIONS_FAILED, MESSAGES.CAMERA_PERSMISSIONS,
                [{ text: MESSAGES.OK }]);
            return false
        }
        return true;
    }

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return;
        }
        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setPickedImage(image.uri);

    }



    const imageUpload = async () => {
        if (!pickedImage) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PLEASE_PICK_IMAGE, [{ title: MESSAGES.OK }])
            setUploaded('')
        } else {
            setError(null)
            setIsLoading(true);
            try {
                const response = await dispatch(authActions.ImageUplaod(pickedImage));
                setUploaded(response.data)
                await Alert.alert(MESSAGES.SUCCESS, MESSAGES.IMAGE_UPLOAD_SUCCESS, [{ text: MESSAGES.OK }])
            } catch (err) {
                setError(err.message)
            }
            setIsLoading(false);
        }
    }


    const signUphandler = async () => {
        if (!name) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.NAME_EMPTY, [{ title: MESSAGES.OK }])
            setName('')
        }
        else if (!email) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.EMAIL_EMPTY, [{ title: MESSAGES.OK }])
            setEmail('')
        } else if (!password) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_EMPTY, [{ title: MESSAGES.OK }])
            setPassword('');
        } else if (password.length < 8) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PASSWORD_CHECK, [{ title: MESSAGES.OK }])
            setPassword('');
        } else if (!uploaded) {
            Alert.alert(MESSAGES.INVALID_INPUT, MESSAGES.PLEASE_PICK_IMAGE, [{ title: MESSAGES.OK }])
            setUploaded('');
        }
        else {
            setError(null)
            setIsLoading(true)
            try {
                await dispatch(authActions.signup(name, email, password, uploaded))
                setSuccess(MESSAGES.SIGNUP_SUCCESS)
            } catch (err) {
                await Alert.alert(MESSAGES.FAILED, err, [{ text: MESSAGES.OK }])
                setError(err.message)
            }
            setIsLoading(false)
        }
    }

  




    return (
        <ScrollView style={styles.screen}>
            <View>
                {
                    isLoading ?
                        <View style={{margin:50}}>
                            <ActivityIndicator size="large" color={COLORS.activityIndicator} />
                        </View>
                        :
                        <TouchableOpacity style={styles.imageContainer} onPress={takeImageHandler}>
                            {!pickedImage ?
                                <Image source={require('../../assets/Images/user.png')} style={{ ...styles.image, width: '80%', height: '80%', margin: 10 }} />
                                :
                                <Image style={styles.image} source={{ uri: pickedImage }} />
                            }
                        </TouchableOpacity>
                }
                {
                    !uploaded ?

                        <TouchableOpacity onPress={imageUpload} style={styles.uploadImagebtn}>
                            <Text style={{ fontSize: 12 }}>UPLOAD IMAGE</Text>
                        </TouchableOpacity>
                        :
                        <View><Text></Text></View>
                }
                <View style={{ marginTop: 20, ...styles.textContainer }}>
                    <Text style={styles.text}>NAME</Text>
                    <Card style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="user-circle-o" size={25} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} placeholder={PLACEHOLDERS.NAME} value={name} onChangeText={text => setName(text)} />
                    </Card>
                </View>
                <View style={{ marginTop: 15, ...styles.textContainer }}>
                    <Text style={styles.text}>EMAIL</Text>
                    <Card style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="user-circle-o" size={25} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} placeholder={PLACEHOLDERS.EMAIL} value={email} onChangeText={text => setEmail(text)} />
                    </Card>
                </View>
                <View style={{ marginTop: 15, ...styles.textContainer }}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <Card style={styles.inputContainer}>
                        <FontAwesome style={styles.icon} name="key" size={25} color={COLORS.OrangeWeb} />
                        <TextInput style={styles.input} value={password} secureTextEntry={true} placeholder={PLACEHOLDERS.PASSWORD} onChangeText={text => setPassword(text)} />
                    </Card>
                </View>
                <TouchableOpacity onPress={signUphandler} style={styles.buttonContainer}>
                    <Text style={{ fontSize: 15 }}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        marginTop: '28%',
        height: 100,
        width: 100,
        backgroundColor: '#ccc',
        marginHorizontal: '38%',
        borderRadius: 1,
        borderWidth: 2,
        borderRadius: 80,
        borderColor: COLORS.OrangeWeb,
        overflow: 'hidden',
        backgroundColor: COLORS.white
    },
    image: {
        width: '100%',
        height: '100%',

    },
    textContainer: {
        marginHorizontal: 20
    },
    inputContainer: {
        borderColor: COLORS.white,
        borderWidth: 1,
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
        marginTop: 20,
        height: 45,
        marginHorizontal: 20,
        backgroundColor: COLORS.CarrotOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 5,
    },
    uploadImagebtn: {
        marginTop: 5,
        height: 20,
        marginHorizontal: '38%',
        backgroundColor: COLORS.CarrotOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '30%',
        shadowColor: 'black',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 5,
    },

    text: {
        fontSize: 12
    }
})

