import React, { useState,useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView,ActivityIndicator } from 'react-native';
import { COLORS, SCREENS } from '../../constants/appConstants';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import CarouselItem from '../../components/CarouselItem';
import CategoriesList from '../../components/CategoriesList';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const CategoriesScreen = props => {


    const [text,setText] = useState();
    const [arrayData,setArrayData] = useState();
    const [filtredData,setFiltredData] = useState();
    const ProductsData = useSelector(state => state.productReducer.availableProducts);

    const handleInput = (text)=>{
      if(text){
    
       const  newData = filtredData.filter(i=>i.title.includes(text));
        console.log('FILTERED',newData)
        setFiltredData(newData)
      }else{
          console.log("no text")
          setFiltredData(arrayData)
      }
    }
    
    const Data = props.route.params.item
    var modifiedArray = [];

    const convertingArray = (array) => {
        console.log("CALLED")
        const ProductsData = array;
        for (var i = 0; i < ProductsData.length; i++) {
            if (ProductsData[i].productType === Data.categoryName) {
                modifiedArray.push(ProductsData[i])
            }
        }
        setArrayData(modifiedArray);
        setFiltredData(modifiedArray)
    }

    useEffect(() => {

       async function handleArray(){
        
        try {
            await convertingArray(ProductsData);
        } catch (error) {
            console.log(error)
        }
       
       }
       handleArray()
       
    }, [ProductsData])
 

   if(!arrayData){
       return (
           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <ActivityIndicator size="large" color="orange" />
           </View>
       )
   }
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View>
                    <CarouselItem showIcon={true} backColor='#367b80' item={Data} style={{ marginHorizontal: '30%', marginTop: 150 }} name={Data.iconName} size={85} />
                </View>
                <View style={{ marginTop: 5, ...styles.textContainer }}>
                    <Card style={styles.inputContainer}>
                        <TouchableOpacity>
                            <FontAwesome style={styles.iconleft} name="search" size={22} color={COLORS.OrangeWeb} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} onChangeText={(text)=>{handleInput(text)}} placeholder="Search" />
                        <TouchableOpacity>
                            <FontAwesome style={styles.icon} name="filter" size={22} color={COLORS.OrangeWeb} />
                        </TouchableOpacity>
                    </Card>
                </View>
                <ScrollView contentContainerStyle={{ margin: 16, flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' }} >
                    {
                        filtredData.map((index) => (
                            <CategoriesList onClick={() => {props.navigation.navigate(SCREENS.DETAILS_SCREEN,{item:index})}} key={index.productId} item={index} />
                        ))
                    }
                </ScrollView >
            </View>
        </ScrollView>
    )
}


export const screenOptions =navData => {
    return {
        headerTitle: 'CATEGORY',
        headerStyle: { shadowColor: 'transparent' },
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white
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
})

export default CategoriesScreen;