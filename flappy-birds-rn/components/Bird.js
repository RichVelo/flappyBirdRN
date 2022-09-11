import React from 'react'
import { View, YellowBox } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdheight = 60
    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: birdWidth,
            height: birdheight,
            borderRadius: 30,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdheight/2),
        }}
            
        />
    )
}

export default Bird