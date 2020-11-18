import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, AsyncStorage, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  
import { COLORS, VARIABLES } from '../constants/appConstants';
import Card from './Card';


const Drawer = props => {
    const userData = useSelector(state => state.auth.user)
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.screen} >
                    <Card style={styles.profileContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: userData.profileImg }} />
                        </View>
                        <Text style={styles.text}>{userData.name ?? 'USMAN'}</Text>
                    </Card>
                    <View>
                        <DrawerItemList {...props} />
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Login')
                    }} style={styles.logoutContainer}>
                        <Ionicons
                            style={styles.icon}
                            name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                            size={23}
                            color={COLORS.OrangeWeb}
                        />
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',

    },
    profileContainer: {
        padding: 30,
        backgroundColor: COLORS.OrangeWeb,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: 5,
        borderColor: 'red',
        height: 150,
        alignItems: 'flex-start',

    },
    imageContainer: {
        borderColor: 'red',
        borderRadius: 40,
        width: 80,
        height: 80,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        margin: 5,
        fontSize: 18,
        color: COLORS.DarkSienna,
        fontFamily:VARIABLES.myridProRegular
    },
    logoutContainer: {
        marginTop: '85%',
        height: 40,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    icon: {
        marginLeft: 20
    },
    logout: {
        marginLeft: 35,
        fontWeight: '600',
        fontFamily:VARIABLES.myridProSemiBold
    }
})

export default Drawer;