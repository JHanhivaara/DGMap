import React from "react"
import {View, Button, Text} from 'react-native'


export default function CourseScreen({ route , navigation }){

    const title = route.params;

    console.log('testing', title) 

    return (
        <View>
            <Text>Test text for CourseScreen </Text>
                <Button title='dog' onPress={() => navigation.navigate('Home')}></Button>
                <Button title='23' onPress={() => console.log(title)}></Button>
        </View>
    )
}