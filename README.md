# Project Instructions
This is the building the Analyzer page for NLP project from Udacity.
The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, the project introduces you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve.

## Table of content:

 - Languages used
 - Installation 
 - Most important functions

### Languages used:

 - HTML
 (index.html)
 - CSS
 (css/styles.css)
 - Javascript
 ( js/app.js)
 - Webpack
 - meaningcloud API
 - Jest
 - Workbox
 
 ### Installation:
 
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
3. Install npm
```
npm install
```
4. Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5. Start the project

`npm run build-prod` | Build project
`npm start` | Run project

8. Open browser at http://localhost:8081/
