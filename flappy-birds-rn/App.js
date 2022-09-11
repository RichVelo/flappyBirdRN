import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Bird from './components/Bird'


export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const gravity = 3
  let gameTimerID

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerID = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerID)
      }
    }
  }, [birdBottom])

//start first obstacle


  return (
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
