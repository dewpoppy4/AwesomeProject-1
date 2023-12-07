import React from 'react';
import { ScrollView, View } from 'react-native';
import Section1 from '../../components/week4/Section1';

export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Section1 />
                {/* <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 /> */}

            </View>
        </ScrollView>
    );
}
