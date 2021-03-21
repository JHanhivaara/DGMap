import React from 'react'
import { Button } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, View } from 'react-native'
import { locations } from '../../data/data.js'

export default function MapScreen({ navigation }){
    return (
        <View style={styles.view}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 62.2460517,
                    longitude: 25.7402853,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                {locations.map((marker) => (
                    <Marker
                        key={marker.index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                        description={marker.description}
                        onCalloutPress={() => {

                            navigation.navigate('Details'), {
                                marker: 'dog'
                            }
                            console.log(marker.title, marker.description)
                        }}
                    />

                ))}
            </MapView>
            <Button style={styles.button} title='dog' onPress={() => navigation.navigate('Details')}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    map: {
        height: '95%',
    },
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        minWidth: '20%'
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
})