import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../constants/appConstants';
import * as Permissions from 'expo-permissions';
import { MESSAGES } from '../constants/appConstants';


const ImgPicker = props => {

    const [pickedImage, setPickedImage] = useState();
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
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setPickedImage(image.uri);
        props.onImageTake(image.uri);
    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ?
                    <Text>No Image Picked</Text>
                    :
                    <Image style={styles.image} source={{ uri: pickedImage }} />
                }
            </View>
            <Button
                title="Take Image"
                color={COLORS.white}
                onPress={takeImageHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;