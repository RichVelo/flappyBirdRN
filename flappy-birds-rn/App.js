import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'


export default function App() {
  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30)
  const [obstaclesNegHeight, setobstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setobstaclesNegHeightTwo] = useState(0)
  const [score, setScore] = useState(0)
  const obstaclesWidth = 50
  const obstaclesHeight = 350
  const gap = 200
  const gravity = 3
  let gameTimerID
  let obstaclesLeftTimerId
  let obstaclesLeftTimerIdTwo
  const [isGameOver, setIsGameOver] = useState(false)

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerID = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 20)

      return () => {
        clearInterval(gameTimerID)
      }
    }
  }, [birdBottom])

//make bird jump
const jump = () => {
  if(!isGameOver && (birdBottom < screenHeight)) {
    setBirdBottom(birdBottom => birdBottom + 40)
  }
}


//start first obstacle
useEffect(() => {
  if(obstaclesLeft > - obstaclesWidth) {
    obstaclesLeftTimerId = setInterval(() => {
      setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
    }, 20)

    return () => {
    clearInterval(obstaclesLeftTimerId)
    }
  } else {
    setObstaclesLeft(screenWidth)
    setobstaclesNegHeight( - Math.random() * 250)
    setScore(score => score + 1)
  }
}, [obstaclesLeft])

//start second obstacle
useEffect(() => {
  if(obstaclesLeftTwo > - obstaclesWidth) {
    obstaclesLeftTimerIdTwo = setInterval(() => {
      setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
    }, 20)

    return () => {
    clearInterval(obstaclesLeftTimerIdTwo)
    }
  } else {
    setObstaclesLeftTwo(screenWidth)
    setobstaclesNegHeightTwo( - Math.random() * 250)
    setScore(score => score + 1)
  }
}, [obstaclesLeftTwo])

//check for collisions
useEffect (() => {
  if(
    ((birdBottom < (obstaclesNegHeight + obstaclesHeight + 30) ||
  birdBottom > (obstaclesNegHeight + obstaclesHeight + gap - 30)) &&
  (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30)
    )
   || 
   ((birdBottom < (obstaclesNegHeightTwo + obstaclesHeight + 30) ||
   birdBottom > (obstaclesNegHeightTwo + obstaclesHeight + gap - 30)) &&
   (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30)
    )
  ){
    gameOver()
  }
})


const gameOver = () => {
  clearInterval(gameTimerID)
  clearInterval(obstaclesLeftTimerId)
  clearInterval(obstaclesLeftTimerIdTwo)
  setIsGameOver(true)
}


  return (
    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
      {isGameOver && <Text>You scored {score}</Text>}
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
    
    <Obstacles 
    color={'red'}
    obstaclesWidth={obstaclesWidth}
    obstaclesHeight={obstaclesHeight}
    randomBottom={obstaclesNegHeight}
    gap={gap}
    obstaclesLeft={obstaclesLeft}
    />
    <Obstacles 
    color={'green'}
    obstaclesWidth={obstaclesWidth}
    obstaclesHeight={obstaclesHeight}
    randomBottom={obstaclesNegHeightTwo}
    gap={gap}
    obstaclesLeft={obstaclesLeftTwo}
    />
    </View>
    </TouchableWithoutFeedback>
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
