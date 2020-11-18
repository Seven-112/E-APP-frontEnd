import React, { useState, createRef, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { DummyData } from '../Model/Data';
import { COLORS } from '../constants/appConstants';
import CarouselItem from './CarouselItem';


const { width, height } = Dimensions.get('window');
const CarouselComponent = props => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollView = createRef();
    const onScroll = event => {
        const { contentOffset } = event.nativeEvent;
        const currentInd = Math.round(contentOffset.x / width)
        if (currentIndex !== currentInd) {
            setCurrentIndex(currentInd)
        }
    }

    return (
        <View style={styles.screen}>
            <ScrollView
                ref={scrollView}
                onScroll={onScroll}
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                {DummyData.map((item, i) => (
                    <View key={i} style={{ position: 'relative' }}>
                        <CarouselItem item={item} />
                        <View style={styles.dotContainer}>
                            {Array.from({ length: DummyData.length }).map((_, index) => (
                                <View key={index} style={{ ...styles.dot, backgroundColor: currentIndex === index ? COLORS.OrangeWeb : 'transparent' }} />
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    dotContainer: {
        position: 'absolute',
        flexDirection: 'row',
        height: height / 3,
        width: width,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 1,

    },
    dot: {
        borderRadius: 10,
        height: 10,
        width: 10,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: COLORS.OrangeWeb

    }

})

export default CarouselComponent;