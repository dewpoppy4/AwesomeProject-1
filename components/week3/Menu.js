import React from 'react';
import { TextInput, View } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth : 1 , borderColor : 'gray', borderRadius : 10 , margin : 20  }}>
            {/*ก้อนที่ 1*/}
            <View>
                <TextInput placeholder="What're you looking for" />
            </View>

            {/*ก้อนที่ 2*/}
            <View style={{ flexDirection: 'row' , justifyContent : 'space-around' ,marginVertical : 10}}>
                <MyIcon title = 'Hotel' name = 'building' size = {30} color = 'orange' />
                <MyIcon title = 'Tour' name = 'map-marker' size = {30} color = 'orange' />
                <MyIcon title = 'Car' name = 'car' size = {30} color = 'orange' />
                <MyIcon title = 'Flight' name = 'plan' size = {30} color = 'orange' />
            </View>

            {/*ก้อนที่ 3*/}
            <View style={{ flexDirection: 'row' , justifyContent : 'space-around'}}>
                <MyIcon title = 'Cruise' name = 'ship' size = {30} color = 'orange' />
                <MyIcon title = 'Bus' name = 'bus' size = {30} color = 'orange' />
                <MyIcon title = 'Event' name = 'star' size = {30} color = 'orange' />
                <MyIcon title = 'More' name = 'ellipsis-h' size = {30} color = 'orange' />
            </View>


        </View>    
    );
}
