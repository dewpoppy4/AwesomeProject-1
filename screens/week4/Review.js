import React from 'react';
import { ScrollView,  View } from 'react-native';
import ReviewQuiz from '../../components/week4/ReviewsQuiz';

export default function Review() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ReviewQuiz />
            </View>
        </ScrollView>
    );
}
