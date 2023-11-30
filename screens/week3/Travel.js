import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import MyIcon from '../../components/week3/MyIcon';
import Menu from '../../components/week3/Menu';




export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                {/* <Text> Week 3 </Text> */}
                <Menu />
                <Card />
                <Hotel /> 
                <Signup />
                {/* <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='บ้าน' name='home' size={30} color='tomato' />
                <MyIcon title='edit' name='edit' size={30} color='green' />
                <MyIcon title='ลบ' name='trash' size={30} color='red' /> */}
            </View>
        </ScrollView>
    );
}
