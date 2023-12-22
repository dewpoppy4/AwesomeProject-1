import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default function Section2() {
    return (

        <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 , backgroundColor: 'gray', padding:5 , marginTop: -40 , borderRadius: 10}}> 
            <Text style={{ textAlign: 'center', fontSize: 22 }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:5}}>
                <FontAwesome name="star" size={20} color='orange' />
                <FontAwesome name="star" size={20} color='orange' />
                <FontAwesome name="star" size={20} color='orange' />
                <FontAwesome name="star" size={20} color='orange' />
                <FontAwesome name="star-half" size={20} color='orange' />
            </View>
            <Text style={{ textAlign: 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>


        </View>


    );
}
