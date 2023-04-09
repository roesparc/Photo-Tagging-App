# Photo Tagging App

## [Live Demo](https://photo-tagging-app-c0c07.web.app/)

![preview](https://user-images.githubusercontent.com/52899682/230792723-b83e32bb-ea58-49bd-b471-3efc6f1d9906.jpg)

## Firebase: Firestore Database and Hosting

The main goal of this project is to implement Firebase services to tie the frontend with the backend. This is a "Where's Waldo?" style game but with the theme of "The Simpsons".

### Features

- A timer that starts counting when the game is loaded
- Characters to discover are displayed above the game image and fade out when you discover them
- Clicking the game image displays a targeting box which lists all the characters that can be discovered
- Validation of character locations, stored in Firestore
- Appropriate feedback for when the user's guess is correct or incorrect
- When the user discovers all the characters, their time is displayed with the option to submit their score to the leaderboard
- Leaderboard displays all the submitted scores, sorted by fastest completion time, with the fastest time at the top

### Featured Implementations

- TypeScript
- Sass

### Acknowledgments

This [project](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app) was created as part of The Odin Project's curriculum. Special thanks to the curriculum authors and the open source community for their contributions.
