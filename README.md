This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

A simple demo of the GIPHY api. It accepts a search term and displays the results in a grid (be aware there are no filters in place)

## How to Run this Application

This application utilizes both React and Node running concurrently on two separate servers. It also requires a GIPHY api key to be placed as a constant variable in a .env file that you will add.

GIPHY devloper documentation [here](https://developers.giphy.com/).

### Instructions
Run ```git clone https://github.com/michael-digi/GiphyApp.git``` on your terminal to clone this project to your computer.

Before doing anything, you need to add a GIPHY api key you can get from the link above. Once you have that, create a new file in the server folder called .env, where you will put one environmental variable.
Create a variable called KEY (in all caps) and set it equal to the api key you got from the GIPHY developer website. <br /><br />
If you don't feel like making a new file just for this, navigate to the helpers.js file and find the 'key' variable at the top. It should be set to process.env.KEY. Instead, set 'key' equal to the api key directly (in quotes as its a string). Be aware that if you then push this file to your own GitHub, the api key will be exposed.

With that done:

1. Open two terminals. navigate into the giphy-app folder in both terminals, and then in one terminal, type<br />
```cd client``` (to cd into the react client)<br />
and in the other terminal type<br />
```cd server``` (to cd into the node server).
2. Type ```npm install``` in both terminals to download all necessary node modules.
3. Wait for the modules to download. In the terminal with the react client, type<br />
```npm start``` to begin the react server on port 3000.
4. In the terminal for the node server, type<br />
```node app.js``` to start the node server.

The demo should now be running at [http://localhost:3000](http://localhost:3000)!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
