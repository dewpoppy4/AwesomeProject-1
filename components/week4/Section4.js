import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (

        <View style={{ flex: 1, borderTopWidth: 1, borderBottomWidth: 1, marginHorizontal:20 , paddingVertical : 10}}>
            <Text style = {{fontSize : 20}} >Hotel Description</Text>
            <Text>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>

    );
}
