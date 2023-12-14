import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section5() {
    return (

        <View style={{ flexDirection : 'row' , justifyContent : 'space-between' ,marginHorizontal : 20 , marginTop : 20 }}>
            <FontAwesome name = "wifi" size = {20} color = 'cornflowerblue'></FontAwesome>
            <FontAwesome name = "coffee" size = {20} color = 'cornflowerblue'></FontAwesome>
            <FontAwesome name = "bath" size = {20} color = 'cornflowerblue'></FontAwesome>
            <FontAwesome name = "car" size = {20} color = 'cornflowerblue'></FontAwesome>
            <FontAwesome name = "paw" size = {20} color = 'cornflowerblue'></FontAwesome>
        </View>

    );
}
