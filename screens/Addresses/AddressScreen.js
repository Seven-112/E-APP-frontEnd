import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/CustomHeader';
import { COLORS, SCREENS, VARIABLES } from '../../constants/appConstants';
import { AntDesign } from '@expo/vector-icons';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import * as addressActions from '../../store/actions/address';



const { width, height } = Dimensions.get('window');

const AddressScreen = props => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
    const addressData = useSelector(state => state.address.address)

    const handleGetAddress = useCallback(async () => {
        setLoading(true)
        try {
            await dispatch(addressActions.getAddress());
        } catch (error) {
        }
        setLoading(false)
    }, [dispatch, setLoading])

    useEffect(() => {
        setLoading(true);
        handleGetAddress().then(() => {
            setLoading(false);
        });
    }, [dispatch, handleGetAddress]);


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.OrangeWeb} />
            </View>
        )
    }

    if (!loading && addressData.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
                <Image resizeMode="contain" style={{ height: '40%' }} source={require('../../assets/Images/customer.jpg')} />
                <Text style={{ fontSize: 20, color: COLORS.OrangeWeb, fontWeight: 'bold' }}>NO ADDRESS YET</Text>
                <TouchableOpacity style={styles.bottomContainer} onPress={() => props.navigation.navigate(SCREENS.ADDNEW_ADDRESS_SCREEN)} >
                    <Text style={{ fontSize: 16,fontFamily:VARIABLES.myridProRegular }} >ADD NEW ADDRESS</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <ScrollView style={{ height: height - 50, marginBottom: 60 }}>
                <View>
                    {
                        addressData.map(item => (
                            <Card key={item.addressId} style={styles.container}>
                                <View style={styles.rowContainer}>
                                    <AntDesign style={styles.icon} name="home" size={24} color={COLORS.CarrotOrange} />
                                    <Text style={{ marginLeft: 10, width: width - 140,fontFamily:VARIABLES.myridProLight}}>{item.addressId}</Text>
                                    <Text style={{ color: COLORS.CarrotOrange, fontSize: 15,fontFamily:VARIABLES.myridProBold }}>{item.label}</Text>
                                </View>
                                <View style={{ marginLeft: 55 }}>
                                    <Text style={{fontFamily:VARIABLES.myridProLight}}>{item.address}</Text>
                                </View>
                            </Card>
                        ))
                    }
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.bottomContainer} onPress={() => props.navigation.navigate(SCREENS.ADDNEW_ADDRESS_SCREEN)} >
                <Text style={{ fontSize: 16,fontFamily:VARIABLES.myridProRegular }} >ADD NEW ADDRESS</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        height: 80,
        backgroundColor: COLORS.white,
        borderRadius: 0,
        marginVertical: 5,
        marginHorizontal: 5
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    icon: {
        marginLeft: 20
    },
    bottomContainer: {
        bottom: 5,
        height: 50,
        left: 5,
        right: 5,
        backgroundColor: COLORS.CarrotOrange,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
})

export const screenOptions = navData => {
    return {
        headerTitle: 'ADDRESS',
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title=' Menus'
                iconName='align-left'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>

    }
}


export default AddressScreen