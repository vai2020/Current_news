Mod 2 Project: Newsapp 

***Wireframe revised due to new findings: World News and Main News being the same.  Therefore, I changed the third route to be the Feedback.  First and second wireframes can be found under issues on Github

Which 3rd party API I'm using:
https://newsapi.org


Problem statement (which problem I am trying to solve):
Our world is constantly changing.  How do you keep up? This newsapp helps people to gain access to google news which is an aggregator of news from different sources. 

Target users (who are the people who's problem I'm trying to solve):
Anyone who wants to get access to latest news from an app. For example: people who don't own a TV or radio.  People who are in transit......

Wireframe:
2 Stateful components 5 Functional components (presentational components / no stateful logic)
(Please see issues for wireframes)

2 Class components (staeful):
1) App.js
2) Header.js

5 Functional components (stateless):
1) Us.js
2) World.js
3) Headline_news.js
4) Comment.js
5) Footer.js


App.js is stateful because it has to make an API call and then render the info from API call

<!-- 
![wireframe](./Images/wireframe.png) -->


Note: revised wireframe image under issues on github:
https://github.com/vai2020/Current_news/issues/2


  



















**************************************************************************
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
