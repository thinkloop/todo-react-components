# Todo App - View-Layer (React-Components)

This is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It provides the view-layer of the app in the form of react components, and nothing else. It exports a single top-level react component that renders the entire ui based on provided state. While this project is part of the advanced todo app, it is not aware of, nor dependent on, the advanced todo app (or any other implementers). It was designed and developed in isolation as a stand-alone app, with a generalized interface, so that it can be implemented by any app, while remaining completely decoupled from them.

Example of a 3rd-party integration:

```javascript
/* 
* example code in a separate project that 
* imports this project and renders the full ui
*/

import { components } from 'todo-react-components'; 

const domElement = document.getElementById('app');
const state = {};

components(domElement, state); // render entire view

```

### Install
Using npm:

```
npm install todo-react-components --save
```

Or include the latest build of [todo-react-components.js](build/todo-react-components.js) in your project.

### Demo App

This project comes with a demo app. To run it, clone the project, start the webserver and navigate to the url:

```
> git clone https://github.com/thinkloop/todo-react-components
> npm start

// open localhost url
```
Or simply download the [build_demo](build_demo) folder and start a webserver at its root.

### Conventions Used
Following are some of the conventions used to drive architectural and design choices:
- pass in data as props
- only use local state for: forms, performance, temporary data, or special circumstances
- develop component data interfaces selfishly, without consideration of outside constraints or data shapes
- develop component data interfaces without consideration of parent components
- develop component data interfaces as simply and minimally as possible
- group inner component interfaces into higher-level objects as you climb up the hierarchy tree
- de-structure objects into individual props as you descend down the hierarchy tree
- pass in any/all strings, labels, or text, for more flexible component re-use
- name things with as little specificity as possible
- name things relative to ui elements not domain knowledge: `onClickButton` instead of `onClickAddTodo`

### License

Released under an MIT license.

### Related
1. [todo-react-components](https://github.com/thinkloop/todo-react-components): view-layer
2. [todo-redux-state](https://github.com/thinkloop/todo-redux-state): data-layer
3. [todo-app](https://github.com/thinkloop/todo-app): integration

### Like it? Star It
