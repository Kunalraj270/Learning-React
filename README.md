# React Js Learning 🚀
# package.json 
  -It is configure of npm its keep track of what version of package is   installed in our system

# package-lock.json -> 
  -it mainting the extact version of the dependnecies and transative depedencies

# npm 
 -package manager
# Bundler -> parcel
# two depedencies -> 
  -dev dependnecies 
  -normal dependencies -> for production

# npm init
# ^caret and ~tilde

# ~version
 -will update all future patch version without 
  incrementing the minor versions 

# ^version 
 -will upadate all future minor/patch versions without incrementing the major version

# transative dependencies 
 -one dependencies depend on other dependencies

# node module 
 -collection of dependencies

# if we have package.json and package-lock.json then  we can create node_module

# whatever you can regenerate dont put into git. git have only essesstional thing

# npm is to use 
 -install the package

# npx 
 -used to excute the package

#  to run
-npx parcel index.html

# cdn => 
-content delivery newtwork is not a good way to create react project

# npm install react
# npm install react-dom

# parcel 
 -beast
 -dev build
 -local server
 -HMR -> HOT MODULE REPLACEMENT
 -File watching Algorihm written in c++
 -caching -> faster build
 -Image optimization
 -Minification
 -bundling
 -compressing
 -Diagnostics
 -Transpilation
 -error handling
 -Tree sheeking -> remove unused file
 -remove app.js if we using npx parcel build index.html
# how to start the projects scripts
 -npm run start === npm run === npx parcle index.html
 -npm run build === npx parcle build index.html 
 
-React.createElement - createElement-js-object => HTML(browser Support)
# jsx
-jsx -> javascript XML -> it is syntax extension of javascipt 
 that allow you to write HTML-like code in your javascript files.
-react is different and jsx is different
-JSX is not a html it like-html

-JSX =>React.createElement - createElement-js-object => HTML(browser  Support) => babel is converting jsx to createElement

# Babel
-JSX (code is transpiled before going to jsEngine) => Parcel - Babel 
-Babel is js package
-Babel is convert JSX code to react or that jsEngine will understand
-Babel is transpiling our code
# jsx
-when we have to give attribute we have to give camel case

# React Component
-A React component is a reusable piece of code that defines the structure and behavior of a part of a user interface.

# React Component divided into two Part
-Class Based Components -> OLD
-Functional Based Components -> NEW

# Functional Based Componets
-A function which return the jsx piece of code or react element that we called function based componets

# Interviw question 
# Component Compostion
-Composing two component inside in one another
-const HeadingComponent2 = () => (
    <div className="container">
        <Heading />
        <h1 className="heading">Namaste React Funcational  component!!!</h1>
        <h1>Hello React</h1>
    </div>
)

# root
-this root is the place where all the react program will run

# props
-passing props to the component is just like passing the argrument to function
-props is just like argrument in function

# json view
-chrome extension

# config driven ui

# unique key id
 -key ={}
 -react say never use key as index

# Theory - 1
# What is Emmet?
-emmet is shorthand syntax to generate html and css code
# Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video ;)

 # Theory Assignment: 2
● - What is `NPM`?
● - What is `Parcel/Webpack`? Why do we need it?
● - What is `.parcel-cache`
● - What is `npx` ?
● - What is difference between `dependencies` vs `devDependencies`
● - What is Tree Shaking?
● - What is Hot Module Replacement?
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● - What is `browserlists`
Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)

# Chapter 03 - Laying the Foundation
Topics
● JSX
● React.createElement vs JSX
● Benefits of JSX
● Behind the Scenes of JSX
● Babel & parcel role in JSX
● Components
● Functional Components
○ Composing Components

# Assignment -4
# Is JSX mandatory for React?
-
# Is ES6 mandatory for React?
-
# {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
-
# How can I write comments in JSX?
-
# What is <React.Fragment></React.Fragment> and <></> ?
-
# What is Virtual DOM?
-
# What is Reconciliation in React?
-
# What is React Fiber?
-
# Why we need keys in React? When do we need keys in React?
-
# Can we use index as keys in React?
-
# What is props in React? Ways to
-
# What is a Config Driven UI ? 
-
# Assignment 5
# Let Get Hooked
# Assignment
# What is the difference between Named Export, Default export and * as export?
  # Two types of Export/Import
-Default Export/Import
-export default Component;
-import Component from "./path"

-Named Export/Import -> when export multiple thing then used
-export const Components;
-import {Components} from "./path"

- * as alias from "./path"
- we can access all the method
# What is the importance of config.js file
-
# What are React Hooks?
-Normal javascript utility function
# Why do we need a useState Hook?
-

-useState()


-whenever a state variable is update react re-render the components
-React make dom operation super fast

# Exloring the world
-Two types of arctitecture
  - Monolith
  - Microservices
-We can call api by two way
  - loads -> Api -> Render
  - loads -> render with shimmer UI -> api -> render -> good way

- useEffect Hooks
 - In React, the useEffect hook is used for side effects in functional components. It is called after the render of the component. The primary purpose of useEffect is to perform actions that are not related to rendering, such as data fetching, subscriptions, manual DOM manipulations, or setting up timers.
 - useEffect(()=>{
  console.log("useEffect Called")
 },[]);

 ->It takes two argument
 - callback function
 - dependencies array

# fetch 
- It is give by browser
- Fetch function return promises to resolves the responses

# Chapter 06 - Exploring the world
  # What is a Microservice?
  # What is Monolith architecture?
  # What is the difference between Monolith and Microservice?
  # Why do we need a useEffect Hook?
  - 
  # What is Optional Chaining?
  - Optional Chaining is the operator to handled  when dealing with nested object while destructuring the object or function.
  # What is Shimmer UI?
  # What is the difference between JS expression and JS statement
  # What is Conditional Rendering, explain with a code example
  # What is CORS?
  # What is async and await?
  # What is the use of `const json = await data.json();` in getRestaurants()


# Chapter 07 - Finding the Path
Assignment
● What are various ways to add images into our App? Explain with code examples
● What would happen if we do console.log(useState())?
● How will useEffect behave if we don't add a dependency array ?
● What is SPA?
● What is difference between Client Side Routing and Server Side Routing?