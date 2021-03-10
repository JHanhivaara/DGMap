import React, { Component } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { locations } from '../data/data.js'

export default class MapScreen extends Component {


    render() {
        // locations.map((location) => {
        //     alert(location.title)
        // });
        return (

            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            >
                {locations.map((marker) => (
                    <Marker
                        key={marker.index}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}

            </MapView>

        )
    }


}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})