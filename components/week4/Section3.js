import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (

        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', backgroundColor:'tomato', marginHorizontal: 20 }} >
                    <Text>9.5</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 , color : 'tomato' }}>Excellent</Text>
                    <Text style={{ color: 'gray' }}>See 801 reviews</Text>
                    
                </View>
            </View>
        </View>

    );
}
