import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Platform, FlatList, ActivityIndicator } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/CustomHeader';
import { COLORS, SCREENS, VARIABLES } from '../../constants/appConstants';
import Carousel from '../../components/CarouselComponent';
import Card from '../../components/Card';
import HotSales from '../../components/UI/HotSales';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Category from '../../components/UI/Categories';
import CategoriesList from '../../components/CategoriesList';
import CATEOGRIES from '../../Data/CategoryType';
import { useSelector, useDispatch } from 'react-redux';
import * as productActions from '../../store/actions/products';



const MainScreen = props => {

    const hotSales = useSelector(state => state.productReducer.hotSales);
    const promotions = useSelector(state => state.productReducer.promotions);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        handleGetProducts()
    }, [dispatch])

    const handleGetProducts = async () => {
        setLoading(true);
        try {
            await dispatch(productActions.getProducts());
        } catch (error) {
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={COLORS.OrangeWeb} />
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={"false"} >
            <View style={styles.screen}>
                <View style={{ marginTop: 10, ...styles.textContainer }}>
                    <Card style={styles.inputContainer}>
                        <TouchableOpacity>
                            <FontAwesome style={styles.iconleft} name="search" size={22} color={COLORS.OrangeWeb} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Search" />
                        <TouchableOpacity>
                            <FontAwesome style={styles.icon} name="filter" size={22} color={COLORS.OrangeWeb} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <Carousel />
                <Text style={styles.textBold}>HOT SALES</Text>
                <View style={{ height: 250, flexDirection: 'row' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{}} style={{ flexDirection: 'row' }}>
                        {hotSales.map(item => <HotSales key={item.productId} item={item} />)}
                    </ScrollView>
                </View>
                <Text style={styles.textBold}>CATEGORIES</Text>
                <View style={{ height: 150, margin: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate="fast" >
                        {
                            CATEOGRIES.map(
                                item => <Category item={item} key={item.id} onClick={() => { props.navigation.navigate(SCREENS.CATEGORY_SCREEN, { item: item }) }} />
                            )
                        }
                    </ScrollView>
                </View>
                <Text style={styles.textBold}>PROMOTIONS</Text>
                <ScrollView contentContainerStyle={{ margin: 16, flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' }} >
                    {
                        promotions.map((index) => (
                            <CategoriesList onClick={() => {props.navigation.navigate(SCREENS.DETAILS_SCREEN, { item: index })}} key={index.productId} item={index} />
                        ))
                    }
                </ScrollView >
            </View>
        </ScrollView>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: 'HOME',
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
        ,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Cart'
                iconName='shopping-bag'
                onPress={() => {
                    navData.navigation.navigate('cart')
                }}
            />
        </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    carouselContainer: {
        height: 60,
        backgroundColor: COLORS.RoseWood
    },
    textContainer: {
        marginHorizontal: 12,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: COLORS.white,
        marginTop: 5,
        borderRadius: 12,
        height: 45,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },
    icon: {
        paddingLeft: 10
    },
    input: {
        margin: 5,
        paddingLeft: 10,
        width: '80%'
    },
    textBold: {
        fontSize: 22,
        marginTop: 12,
        marginHorizontal: 20,
        fontFamily: VARIABLES.myridProSemiBold
    }
})

export default MainScreen;