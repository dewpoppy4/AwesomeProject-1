import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginHorizontal : 20  ,borderTopWidth : 1, borderBottomWidth : 1}}>
            <View style={{ flexDirection: 'column', marginVertical : 5}}>
                <Text>Price</Text>
                <Text style = {{fontSize : 23 , color : 'tomato'}}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            <View style = {{justifyContent : 'center' }}>
                <Button title='Book Now'></Button>
            </View>
        </View>
    )
}