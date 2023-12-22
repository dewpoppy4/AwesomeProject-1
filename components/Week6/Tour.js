import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (

        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour</Text>
            <Text style={{ color: 'gray', marginVertical: 10 }}>Let find out what most interesting things</Text>

            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <TourItem />
                    <TourItem />
                    <TourItem /> */}
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in somewhere</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in somewhere</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }} />
                        <View style={{ backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Tour in somewhere</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>

    );
}
