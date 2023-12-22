import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewQuiz() {
    return (

        <View style={{ flex: 1 }}>

            {/* *ก้อนที่1*/}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 20 }}>
                <FontAwesome style={{ color: 'tomato' }} name='arrow-left' size={20} />
                <Text style={{ color: 'black', fontSize: 20 }}> Reviews</Text>
                <Text style={{ color: 'red', fontSize: 20 }}> Replay</Text>
            </View>

            {/* ก้อนที่2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30, marginVertical: 20 }}>
                {/* ข้อความ */}
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,paddingLeft:20}}>
                    <Text style={{ color: 'red', fontSize: 40 }}> 4.7</Text>
                    <Text style={{ color: 'darkgray' }}> out of 5</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    {/* ดาว */}
                    <View style={{ flexDirection: 'column', alignItems: 'flex-end', paddingHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome style={{ color: 'gray' }} name='star' size={15} />
                        </View>
                    </View>

                    {/* {/* บาร์ */}
                    <View style={{ flexDirection: 'column', width: 150 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                            <View style={{ backgroundColor: 'tomato', flex: 1, height: 9 }}></View>
                            <View style={{ backgroundColor: 'ghostwhite', flex: 5, height: 9 }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                            <View style={{ backgroundColor: 'tomato', flex: 1, height: 9 }}></View>
                            <View style={{ backgroundColor: 'ghostwhite', flex: 5, height: 9 }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                            <View style={{ backgroundColor: 'tomato', flex: 2, height: 9 }}></View>
                            <View style={{ backgroundColor: 'ghostwhite', flex: 3, height: 9 }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                            <View style={{ backgroundColor: 'tomato', flex: 1, height: 9 }}></View>
                            <View style={{ backgroundColor: 'ghostwhite', flex: 1, height: 9 }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                            <View style={{ backgroundColor: 'tomato', flex: 2, height: 10 }}></View>
                            <View style={{ backgroundColor: 'ghostwhite', flex: 5, height: 10 }}></View>
                        </View>
                        <Text style={{ textAlign: 'right' }}>25 Ratings</Text>
                    </View>
                </View>
            </View>

            {/* ก้อนที่3 */}
            <View style={{ backgroundColor: '#F0FFF0', marginHorizontal: 20, padding: 10, marginVertical: 10, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require('../../assets/week3/profile-3.jpg')} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 22 }}>Grigorly Kozhukhov</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star-o' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: 'darkgray' }}>Jun 2018</Text>
                    </View>
                </View>
                <Text style={{ paddingVertical: 7, fontSize: 20 }}>Nice Place</Text>
                <Text style={{ color: 'darkgray' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo Located in one of the uprising areas of Tokyo</Text>

            </View>

            {/* ก้อนที่4 */}
            <View style={{ backgroundColor: '#F0FFF0', marginHorizontal: 20, padding: 10, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require('../../assets/week3/profile-4.jpg')} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 22 }}>Ea Tipene</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star' size={15} />
                                <FontAwesome style={{ color: '#FFD700' }} name='star-o' size={15} />
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: 'darkgray' }}>Jun 2018</Text>
                    </View>
                </View>
                <Text style={{ paddingVertical: 7, fontSize: 20 }}>Great for families</Text>
                <Text style={{ color: 'darkgray' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo Located in one of the uprising areas of Tokyo</Text>

            </View>
        </View >

    );
}