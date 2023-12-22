import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";

export default function TourItem() {
    return (
        <View style={{ marginRight: 10 }}>
            <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{uri:"https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
            <View style={{ backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style = {{fontSize:20,color:'white'}}>Tour in somewhere</Text>
            </View>
        </View>
    );
}