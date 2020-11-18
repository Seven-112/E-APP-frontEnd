import React, { useState, useEffect, createRef } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, TextInput, Modal, Dimensions, SafeAreaView, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
import { COLORS, MESSAGES, PLACEHOLDERS, VARIABLES } from '../../constants/appConstants';
import Card from '../../components/Card';
import { reverseGeoCoding } from '../../helpers/reverseGeoCoding';
import Dialog from 'react-native-dialog';
import { useDispatch } from 'react-redux';
import * as addressActions from '../../store/actions/address';




const AddNewAddressScreen = props => {

    const dispatch = useDispatch();
    const [screenloading, setScreenLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState();
    const [coordinates, setCoordinates] = useState({ latitude:0, longitude:0  });
    const [visible, setVisible] = useState(false);
    const [label, setLabel] = useState();
    const map = createRef();

    const handleConfirm = () => {
        setVisible(true);
    }
    const handleAddAddress = async () => {
        setVisible(false);
        console.log(label, address)
        setScreenLoading(true)
        try {
            await dispatch(addressActions.addAddress(address, label));
            await dispatch(addressActions.getAddress());
            await Alert.alert(MESSAGES.SUCCESS, MESSAGES.ADDED_ADDRESS, [{ text: MESSAGES.OK, onPress: () => props.navigation.goBack() }]);
        } catch (error) {

        }
        setScreenLoading(false);
    }

    // useEffect(() => {
    //     askPermissions()

    // },[]);

    // const askPermissions = async () => {
    //     const { status } = await Permissions.getAsync(Permissions.LOCATION);
    //     if (status !== 'granted') {
    //         const response = await Permissions.askAsync(Permissions.LOCATION)
    //     }
    //     navigator.geolocation.getCurrentPosition(
    //         ({ coords: { latitude, longitude } }) => setCoordinates({ latitude: latitude, longitude: longitude }),
    //         (error) => console.log(error)
    //     )
    //     console.log(coordinates)
    // }
    var latitude = coordinates.latitude;
    var longitude = coordinates.longitude;


    return (

        <View style={styles.screen}>
            <TouchableOpacity style={styles.header}>
                <AntDesign name="leftcircle" size={30} color={COLORS.OrangeWeb} />
            </TouchableOpacity>
            <View style={styles.marker}>
                {
                    loading ?
                        <View>
                            <ActivityIndicator size="large" color={COLORS.OrangeWeb} />
                        </View>
                        :
                        <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://images.vexels.com/media/users/3/142675/isolated/preview/84e468a8fff79b66406ef13d3b8653e2-house-location-marker-icon-by-vexels.png' }} />
                }

            </View>
            <Card style={styles.inputContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput value={address} style={{ width: '85%', padding: 12 }} />
                    <TouchableOpacity onPress={handleConfirm} style={{ width: '100%', padding: 12 }}>
                        <Feather name="check-circle" size={20} color={COLORS.OrangeWeb} />
                    </TouchableOpacity>
                </View>
            </Card>

            <Dialog.Container visible={visible}>
                <Dialog.Title style={{fontFamily:VARIABLES.myridProRegular,color:COLORS.CarrotOrange}}>ENTER ADDRESS LABEL</Dialog.Title>
                <Dialog.Input placeholder={PLACEHOLDERS.ADDRESS_LABEL} value={label} onChangeText={text => setLabel(text)} />
                <Dialog.Button disabled={label ? false : true} label={MESSAGES.SUBMIT} style={{ color: label ? COLORS.CarrotOrange : COLORS.lightGrey }} onPress={handleAddAddress} />
                {
                    screenloading ?
                        <ActivityIndicator size="large" color={COLORS.OrangeWeb} />
                        :
                        <View></View>
                }
            </Dialog.Container>

            <MapView provider={VARIABLES.GOOGLE} ref={map} style={styles.map}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421

                }}
                onRegionChangeComplete={async (region) => {

                    setLoading(true)
                    setAddress('');
                    setCoordinates(region)
                
                    var response = await reverseGeoCoding(coordinates.latitude, coordinates.longitude)
                    setAddress(response.results[0].formatted_address)
                    setLoading(false)
                }}
            >
            </MapView>
        </View>



    )
}
export const screenOptions = navData => {
    return {
        headerTitle: 'Address',
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='left'
                iconName='chevron-left'
                onPress={() => {
                    navData.navigation.pop();
                }}
            />
        </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    map: {
        height: Dimensions.get("window").height
        // ...StyleSheet.absoluteFillObject
    },
    marker: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 1,
        marginTop: -37,
        marginLeft: -11
    },
    inputContainer: {
        top: '14%',
        left: '1%',
        backgroundColor: COLORS.white,
        height: 45,
        marginHorizontal: 10,
        position: 'absolute',
        zIndex: 1,
        borderColor: COLORS.OrangeWeb,
        borderWidth: 1
    },
    header: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        height: 50,
        zIndex: 1
    }


});




export default AddNewAddressScreen;