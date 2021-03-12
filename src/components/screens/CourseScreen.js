import React, {Component, styles} from "react"
import {View, Button, Text} from 'react-native'


const CourseScreen =({navigation}) => {
    return (
        <View>
            <Text>Test text for CourseScreen </Text>
                <Button title='dog' onPress={() => navigation.navigate('Details')}></Button>
        </View>
    )
}

export default CourseScreen