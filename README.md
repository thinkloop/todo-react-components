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

Or download the latest build of [todo-react-components.js](build/todo-react-components.js).

### Demo App

This project comes with a demo app. To run it, clone the project, start the webserver and navigate to the url:

```
git clone https://github.com/thinkloop/todo-react-components

npm start

// navigate to url
```
Or simply download the [build_demo](build_demo) folder and start a webserver at the root.

### Design Conventions Used
Following are some of the conventions used to drive architecture and design choices:
- pass in most data as props
- use local state for temporary data, performance, throw-away data
- develop component data interfaces as simply and minimally as possible
- develop component data interfaces selfishly, without concern for outside constraints, data shapes, sources
- develop component data interfaces without concern for parent components
- group inner component interfaces into objects that can be easily handled by parents
- de-structure objects as you go down the tree, passing in individual params
- pass in all strings/labels/text to allow for more flexible re-use

