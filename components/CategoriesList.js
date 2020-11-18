import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, VARIABLES } from '../constants/appConstants';

const CategoriesList = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={props.onClick} style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:props.item.imageUrl}} />
                </View>
                <View style={styles.textContainer}>
                    <Text adjustsFontSizeToFit={true} style={{ fontSize: 18, color: COLORS.Persimmon,fontFamily:VARIABLES.myridProSemiBold }}>{props.item.title}</Text>
                    <Text style={{ fontSize: 15, color: COLORS.Persimmon, fontWeight: "bold",fontFamily:VARIABLES.myridProRegular }}>${props.item.price}</Text>
                    <View style={styles.Endcontainer}>
                        <Text style={{ fontSize: 14, color: COLORS.RoseWood, fontWeight: "bold" }}>InStock</Text>
                        <View style={styles.favContainer}>
                            <FontAwesome name="star" size={20} color={COLORS.OrangeWeb} />
                            <Text style={{ fontSize: 16, color: COLORS.RoseWood, fontWeight: "normal",fontFamily:VARIABLES.myridProLight }}>{props.item.rating}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 10,
        height: 260,
        width: 150,

    },
    contentContainer: {

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        height: '65%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        height: '35%',
        marginTop: 5,
        marginLeft: 5
    },
    Endcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    favContainer: {
        flexDirection: 'row',
        right: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesList;