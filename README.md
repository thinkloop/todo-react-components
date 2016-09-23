# Todo App View-Layer

This project is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains view components and view logic and nothing else. The components were built in isolation, without concern for other projects or implementors including the advanced todo app itself. 

A single top-level react component is exported that renders the full ui when invoked:

```javascript
/* 
* example code in a separate project that 
* imports this project and renders the full ui
*/

import { app } from 'todo-react-components';

const appElement = document.getElementById('app');
const state = {};

app(appElement, state);

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

// navigate to url
```
Or simply download the [build_demo](build_demo) folder and start a webserver at its root.

### Design Conventions Used
Following are some of the conventions used to drive architecture and design choices:
- pass in data as props
- only use local state for: forms, performance, throw-away data, or special circumstances
- develop component data interfaces selfishly, without consideration of outside constraints or data shapes
- develop component data interfaces without consideration of parent components
- develop component data interfaces as simply and minimally as possible
- group inner component interfaces into higher-level objects as you climb up the hierarchy tree
- de-structure objects into individual props as you descend down the hierarchy tree
- pass in any/all strings, labels, or text, for more flexible component re-use
- name things with as little specificity as possible
- name things relative to ui elements not domain knowledge: `onClickButton` instead of `onClickAddTodo`
