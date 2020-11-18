import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../../components/Card';
import { COLORS, VARIABLES } from '../../constants/appConstants';
import {useSelector} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/CustomHeader';


const ProfileScreen = props => {
    const userData =useSelector(state=>state.auth.user)
    return (
        <View style={styles.screen}>
            <View>
                <View style={{ height: 150, backgroundColor: COLORS.CarrotOrange }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri:userData.profileImg}} />
                    </View>
                </View>
                <Card style={styles.title}>
                    <Text style={{ marginVertical: 10, fontSize: 15,fontFamily:VARIABLES.myridProSemiBold }}>CONTACT INFORMATION</Text>
                </Card>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLORS.lightGrey, borderBottomWidth: 1 }}>
                    <Text style={styles.text}>First Name</Text>
                    <Text style={styles.text}>{userData.name.split(" ")[0]}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLORS.lightGrey, borderBottomWidth: 1 }}>
                    <Text style={styles.text}>Last Name</Text>
                    <Text style={styles.text}>{userData.name.split(" ")[1]}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLORS.lightGrey, borderBottomWidth: 1 }}>
                    <Text style={styles.text}>Email Address</Text>
                    <Text style={styles.text}>{userData.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLORS.lightGrey, borderBottomWidth: 1 }}>
                    <Text style={styles.text}>Phone Number</Text>
                    <Text style={styles.text}>+00422992442</Text>
                </View>
            </View>
        </View>
    )
}


export const screenOptions =navData => {
    return {
        headerTitle: 'PROFILE',
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menus'
                iconName='align-left'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>

    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageContainer:{
         marginHorizontal:'38%',
         marginVertical:30,
        //  backgroundColor:'red',
         height:100,
         width:100,
         borderRadius:50,
         borderWidth:1,
         borderColor:COLORS.OrangeWeb,
         overflow:'hidden'
    },
    title: {
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 2,
        borderRadius: 0,
        fontFamily:VARIABLES.myridProSemiBold
    },
    text: {
        padding: 10,
        color: COLORS.mildGrey
    },
    image:{
        height:'100%',
        width:'100%'
    }
})

export default ProfileScreen;