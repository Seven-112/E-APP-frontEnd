import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, VARIABLES } from '../../constants/appConstants';


const Categories = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity key={props.item.id} onPress={props.onClick} style={styles.contentContainer}>
                <View>
                    <View style={{ backgroundColor: `${props.item.backgroundColor}`, borderColor: `${props.item.backgroundColor}`, ...styles.content }}>
                        <FontAwesome
                            name={props.item.iconName}
                            size={props.item.categoryName !== 'Cameras' || props.item.categoryName !== 'Watches' ? 36 : 45}
                            color={props.item.color}
                        />
                        <Text style={styles.text}>{props.item.categoryName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    contentContainer: {
        flexDirection: 'row',
        borderColor: COLORS.OrangeWeb,
        borderWidth: 2,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        height: '45%',
    },
    text: {
        fontSize: 15,
        color: COLORS.OrangeWeb,
        fontFamily:VARIABLES.myridProRegular
    }

})


export default Categories;
