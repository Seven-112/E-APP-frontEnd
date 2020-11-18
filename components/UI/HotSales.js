import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from '../Card';
import { COLORS, VARIABLES } from '../../constants/appConstants';


const HotSales = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image resizeMode="contain" source={{ uri: props.item.imageUrl }} style={styles.image} />
                </View>
                <Text style={styles.title}>{props.item.title}</Text>
                <View style={styles.salesContainer}>
                    <Text style={styles.smallText}>{`${props.item.price} RS`}</Text>
                    <View style={styles.ratingContainer}>
                        <AntDesign
                            name="star"
                            size={15}
                            color={COLORS.CarrotOrange}
                        />
                        <Text style={{ marginHorizontal: 3, fontWeight: "600", ...styles.smallText }}>{props.item.rating}</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    contentContainer: {
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: COLORS.RoseWood,
        margin: 20,
        height: '90%',
        width: '70%'
    },
    imageContainer: {
        height: '70%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        marginLeft: 1,
        color: COLORS.CarrotOrange,
        fontFamily:VARIABLES.myridProSemiBold
    },
    salesContainer: {
        flexDirection: 'row',
        marginLeft: 1
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    smallText: {
        fontSize: 15,
        color: COLORS.RoseWood,
        fontFamily:VARIABLES.myridProLight
    },
    stockContainer: {
        marginTop: 1
    }

})


export default HotSales;
