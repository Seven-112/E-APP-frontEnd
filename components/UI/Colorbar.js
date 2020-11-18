import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card';


const ColorBar = props => {
    //    const Data=[
    //        {
    //            value:15,
    //            color:'#ccc'
    //        },{
    //            value:30,
    //            color:'green'
    //        }
    //    ]
    return (
        <View style={styles.colorBar}>
            {
                props.Data.map((index) => (
                    <Text key={Math.random()} style={{ backgroundColor: `${index.color}`, width: `${index.value}%` }}></Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    colorBar: {
        borderRadius: 12,
        marginTop: 2,
        overflow: 'hidden',
        borderWidth: 0.2,
        borderColor: 'transparent',
        marginHorizontal: 5,
        height: 5,
        flexDirection: 'row'
    },

})

export default ColorBar;