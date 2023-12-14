import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (

        <View style = {{marginHorizontal: 20  }} >
            <View >
                <Text style ={{fontSize : 20}}>Room Type</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingVertical : 20 }}>
                <View>
                    <Image style = {{width : 100 , height : 120 , marginRight : 20 , borderRadius : 15 }} source={require('../../assets/week3/room-8.jpg')}/>
                </View>
                <View>
                    <Text style = {{fontSize : 20 }}>Standard Twin Room</Text>
                    <Text style = {{fontSize : 23 , color : 'tomato', marginTop: 35}}>$399.99</Text>
                    <Text style = {{color : 'skyblue', marginTop: 5}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    )
}