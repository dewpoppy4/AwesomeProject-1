import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (

        <View style={{ flex: 1, borderTopWidth: 1,borderBottomWidth: 1,  marginHorizontal: 20, marginVertical: 30, flexDirection: 'column' }}>
            <Text style={{ fontSize: 20 ,paddingTop:10 }} >Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style={{ flexDirection: 'row', marginBottom : 10 }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }} source={require('../../assets/week3/map.jpg')} />
            </View>
        </View>

    );
}
