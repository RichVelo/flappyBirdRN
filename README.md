# flappyBirdRN

Following along with a tutorial (https://www.youtube.com/watch?v=dhpjjAxKbHE) to have a crack at React-native - a simple game seemed liek a good way to do so

Set up using expo (https://expo.dev)

[ I had issues installing expo - but I found this commend: sudo npm install --unsafe-perm -g expo-cli (https://github.com/expo/expo-cli/discussions/590) which worked]

I was then able to use expo init my-project-name

and because I'm using npm - npm start - this allows me to preview the app by browser and my phone

The metro bundler appears to have been deprecated so the terminal QR code was used to allow me to use my phone to preview the app with the Expo Go app in iOS.

the game currently will load and start imediately, produce obstacles (pipes at the top and bottom of the screen with a gap - I am using Math.random * x to change where the gap appearr to make it a challenge). Collisions are detected and the game will end and display a score (determined by the number of obstacles avoided but which also leave the screen entirely [not ideal]). requires a start button to begin the game and a replay button to restart the game.
------

The goal is to learn a little React Native as well as general refresh of React / props / components. But I would also like to customize the components to make the game a little my own. Adding in different obstacles - to allow for alternate routes through them rather than just the middle of 2 pipes.
