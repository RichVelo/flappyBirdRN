import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'


export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const obstaclesWidth = 50
  const obstaclesHeight = 350
  const gap = 150
  const gravity = 3
  let gameTimerID
  let obstaclesLeftTimerId

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
useEffect(() => {
  if(obstaclesLeft > 0) {
    obstaclesLeftTimerId = setInterval(() => {
      setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
    }, 30)
  }
  return () => {
    clearInterval(obstaclesLeftTimerId)
  }
}, [obstaclesLeft])

  return (
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
    
    <Obstacles 
    obstaclesWidth={obstaclesWidth}
    obstaclesHeight={obstaclesHeight}
    gap={gap}
    obstaclesLeft={obstaclesLeft}
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
