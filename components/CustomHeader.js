import React from 'react';
import {  Feather } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import {  COLORS } from '../constants/appConstants';

 const CustomHeader = props =>{
    return (
        <HeaderButton
        {...props}
        IconComponent={Feather}
        iconSize={23}
        color={COLORS.OrangeWeb}
        />
    )
}

export default CustomHeader