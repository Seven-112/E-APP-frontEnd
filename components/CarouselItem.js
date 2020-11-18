import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { COLORS, VARIABLES } from '../constants/appConstants';
import Card from './Card';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const CarouselItem = props => {
    return (
        <Card style={{ ...styles.cardView, backgroundColor: `${props.backColor}` }}>
            {props.showIcon ?
                <View style={{height:'80%'}}>
                    <View style={styles.iconContainer}>
                        <FontAwesome style={styles.icon} name={props.name} size={props.size} color={COLORS.white} />
                    </View>
                    <View style={styles.textViewSpecfic}>
                        <Text style={styles.itemtitle}>{`${props.item.categoryName}`.toUpperCase()}</Text>
                    </View>
                </View>
                :
                <View>
                    <Image style={styles.image} source={{ uri: props.item.url }} />
                    <View style={{ ...styles.textView, ...props.style }}>
                        <Text style={styles.itemtitle}>{`${props.item.title}`.toUpperCase()}</Text>
                        <Text style={styles.description}>{props.item.description}</Text>
                    </View>
                </View>
            }
        </Card>
    )
}


const styles = StyleSheet.create({
    cardView: {
        height: height / 3,
        width: width - 20,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        margin: 10,
        left: 5
    },
    iconContainer: {
        marginVertical: 10,
        height:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
    textViewSpecfic: {
         
        justifyContent: 'center',
        alignItems: 'center',
        height:'20%',
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10,
    },

    itemtitle: {
        color: COLORS.white,
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
        fontFamily:VARIABLES.myridProBold
    },
    description: {
        color: COLORS.Vermilion,
        fontSize: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.9 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        fontFamily:VARIABLES.myridProRegular
    },
  

})
export default CarouselItem