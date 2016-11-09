*See [Extreme Decoupling
React, Redux, Selectors ](http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors/) for more details.*

# Todo App: View (React Components)

This is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It provides the view-layer of the app in the form of react components, and nothing else. It exports a single top-level react component that renders the entire ui using provided state. While this project is implemented by the advanced todo app, it is not aware of it, nor dependent on it or any other app. It was designed and developed in isolation as a stand-alone system, with a generalized interface, so that it can remain completely decoupled from any app.

## Install
Using npm:

```
npm install 'thinkloop/todo-react-components' --save
```

Or download the latest build of [todo-react-components.js](build/todo-react-components.js).

## Use
Example of a 3rd party app importing this project and rendering the full ui:

```javascript
// import this project
import { render, constants } from 'todo-react-components';

// render entire ui with no data
render({}, domElement);

// dump available constants
console.log(constants);
```

or `require` it:

```javascript
// require this project
var todoReactComponents  = require('todo-react-components');

// render entire ui with no data
todoReactComponents.render({}, domElement);

// dump available constants
console.log(todoReactComponents.constants);
```

## Data
The view takes as input a generic `data` object of a certain structure and shape. It contains all the data necessary to render the view. The `data` for this view requires looks something like:

```json
{
  "selectedPage":"HOME",
  "url":"/",
  "siteHeader":{
    "labelHome":"Todo App",
    "labelAbout":"About",
    "hrefHome":"/",
    "hrefAbout":"/about",
    "selectedPage":"HOME"
  },
  "todos":{
    "newForm":{
      "placeholder":"What do you need to do?"
    },
    "list":[
      {
        "description":"Buy tomatoes from grocery store",
        "dateCreated":"2016-09-19T18:44:15.635",
        "isComplete":false,
        "id":"10",
        "buttonLabel":"delete"
      },
      {
        "description":"Finish writing blog post",
        "dateCreated":"2016-09-20T18:44:18.635",
        "isComplete":false,
        "id":"3",
        "buttonLabel":"delete"
      }
    ],
    "summary":{
      "countIncomplete":"2 pending",
      "countComplete":"0 complete",
      "countTotal":"2 total",
      "selectedSummaryStatus":"TOTAL"
    }
  }
}
```

## Demo App

This project comes with a fully functional demo app that showcases the various parts of the ui. To run it, clone the project, start the webserver and navigate to the url:

```
> git clone https://github.com/thinkloop/todo-react-components
> npm start

// open localhost url
```
Or download the [build_demo](build_demo) folder and start your own webserver in its root.

## Conventions Used
Following are some of the conventions used to drive architectural and design choices:
- pass in data as props
- only use local state for: forms, performance, temporary data, or special circumstances
- develop component data interfaces selfishly, without consideration of external data or constraints
- develop component data interfaces without consideration of parent components
- develop component data interfaces as simply and minimally as possible
- group inner component interfaces into higher-level objects as you climb up the hierarchy tree
- de-structure objects into individual props as you descend down the hierarchy tree
- pass in any/all strings, labels, or text, for more flexible component re-use
- name things with as little specificity as possible
- name things relative to ui elements not domain knowledge: `onClickButton` instead of `onClickAddTodo`

## License

Released under an MIT license.

## Related
- [todo-app](https://github.com/thinkloop/todo-app/): Example todo app of extreme decoupling of react, redux and selectors
- [todo-redux-state](https://github.com/thinkloop/todo-redux-state): Redux state container for extreme decoupling todo app example

## Other
- [memoizerific](https://github.com/thinkloop/memoizerific/): Fast, small, efficient JavaScript memoization to memoize JS functions
- [link-react](https://github.com/thinkloop/link-react/): A generalized link <a> component that allows client-side navigation while taking into account exceptions
- [spa-webserver](https://github.com/thinkloop/spa-webserver/): Webserver that redirects to root index.html if path is missing for client-side SPA navigation

#### Like it? Star It
