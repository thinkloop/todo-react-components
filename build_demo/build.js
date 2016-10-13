(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _todoReactComponents = require('../src/todo-react-components');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domElement = document.getElementById('app');

Object.defineProperty(window, 'state', { get: function get() {
    return _store2.default.getState();
  }, enumerable: true });
console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n ********************************************* \n');

_store2.default.subscribe(function () {
  return (0, _todoReactComponents.render)(_store2.default.getState(), domElement);
});

_store2.default.dispatch({ type: 'init' });

},{"../src/todo-react-components":29,"./store":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var selectedPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.HOME;
	var action = arguments[1];

	switch (action.type) {
		case _siteHeader.ON_CLICK_NAV:
			return action.selectedPage;

		default:
			return selectedPage;
	}
};

var _siteHeader = require('../../site/reducers/site-header');

var _pages = require('../../../src/site/constants/pages');

},{"../../../src/site/constants/pages":27,"../../site/reducers/site-header":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ON_CLICK_NAV = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var siteHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case ON_CLICK_NAV:
			return _extends({}, siteHeader, {
				selectedPage: action.selectedPage
			});

		default:
			return siteHeader;

	}
};

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _pages = require('../../../src/site/constants/pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_CLICK_NAV = exports.ON_CLICK_NAV = 'ON_CLICK_NAV';

var defaultState = {
	labelHome: 'Todo App',
	labelAbout: 'About',

	hrefHome: '/',
	hrefAbout: '/about',

	selectedPage: '/',

	onClickHome: function onClickHome() {
		return _store2.default.dispatch({ type: ON_CLICK_NAV, selectedPage: _pages.HOME });
	},
	onClickAbout: function onClickAbout() {
		return _store2.default.dispatch({ type: ON_CLICK_NAV, selectedPage: _pages.ABOUT });
	}
};

},{"../../../src/site/constants/pages":27,"../../store":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var action = arguments[1];

	switch (action.type) {
		case _siteHeader.ON_CLICK_NAV:
			if (action.selectedPage === _pages.ABOUT) {
				return '/about';
			}
			return '/';

		default:
			return url;

	}
};

var _siteHeader = require('../../site/reducers/site-header');

var _pages = require('../../../src/site/constants/pages');

},{"../../../src/site/constants/pages":27,"../../site/reducers/site-header":3}],5:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _todos = require('./todos/reducers/todos');

var _todos2 = _interopRequireDefault(_todos);

var _siteHeader = require('./site/reducers/site-header');

var _siteHeader2 = _interopRequireDefault(_siteHeader);

var _url = require('./site/reducers/url');

var _url2 = _interopRequireDefault(_url);

var _selectedPage = require('./site/reducers/selected-page');

var _selectedPage2 = _interopRequireDefault(_selectedPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// reducers
var reducers = {
	selectedPage: _selectedPage2.default,
	url: _url2.default,
	siteHeader: _siteHeader2.default,
	todos: _todos2.default
};

// console log middleware
var consoleLog = function consoleLog(store) {
	return function (next) {
		return function (action) {
			if (typeof action !== 'function') {
				console.log(action);
			}
			return next(action);
		};
	};
};

// middleware
var middleWare = void 0;
if (process.env.NODE_ENV !== 'production') {
	middleWare = (0, _redux.applyMiddleware)(consoleLog, _reduxThunk2.default);
} else {
	middleWare = (0, _redux.applyMiddleware)(_reduxThunk2.default);
}

// create store
exports.default = (0, _redux.createStore)((0, _redux.combineReducers)(reducers), middleWare);

}).call(this,require('_process'))

},{"./site/reducers/selected-page":2,"./site/reducers/site-header":3,"./site/reducers/url":4,"./todos/reducers/todos":6,"_process":7,"redux":16,"redux-thunk":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	var newTodos = void 0;

	switch (action.type) {
		case ON_NEW_SUBMIT:
			newTodos = _extends({}, todos);
			newTodos.list = addTodoToList(todos.list.slice(), action);
			newTodos.summary = makeSummary(newTodos.list);
			return newTodos;

		case ON_TODO_BUTTON_CLICKED:
			newTodos = _extends({}, todos);
			newTodos.list = todos.list.filter(function (todo) {
				return todo.id !== action.id;
			});
			newTodos.summary = makeSummary(newTodos.list);
			return newTodos;

		case ON_TODO_CHECKBOX_TOGGLED:
			newTodos = _extends({}, todos);
			var todoIndex = newTodos.list.findIndex(function (todo) {
				return todo.id === action.id;
			});
			newTodos.list[todoIndex] = _extends({}, newTodos.list[todoIndex], {
				isComplete: !newTodos.list[todoIndex].isComplete
			});
			newTodos.summary = makeSummary(newTodos.list);
			return newTodos;

		case ON_SUMMARY_STATUS_SELECTED:
			newTodos = _extends({}, todos);
			newTodos.list = newTodos.list.filter(function (todo) {
				return action.selectedSummaryStatus === _statuses.TOTAL || todo.isComplete && action.selectedSummaryStatus === _statuses.COMPLETE || !todo.isComplete && action.selectedSummaryStatus === _statuses.PENDING;
			});
			newTodos.summary = makeSummary(newTodos.list, action.selectedSummaryStatus);

			return newTodos;

		default:
			return todos;
	}
};

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _statuses = require('../../../src/todos/constants/statuses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_NEW_SUBMIT = 'ON_NEW_SUBMIT';
var ON_TODO_BUTTON_CLICKED = 'ON_TODO_BUTTON_CLICKED';
var ON_TODO_CHECKBOX_TOGGLED = 'ON_TODO_CHECKBOX_TOGGLED';
var ON_SUMMARY_STATUS_SELECTED = 'ON_SUMMARY_STATUS_SELECTED';

var defaultState = {
	newForm: {
		placeholder: 'What do you need to do?',
		onSubmit: function onSubmit(description) {
			return _store2.default.dispatch({ type: ON_NEW_SUBMIT, description: description });
		}
	},
	list: [],
	summary: makeSummary([], _statuses.TOTAL)
};

function addTodoToList(list, action) {
	var id = new Date().toISOString() + '-' + (Math.random() * 10000).toFixed(0);
	list.push({
		id: id,
		isComplete: false,
		description: action.description,
		buttonLabel: 'delete',
		onButtonClicked: function onButtonClicked() {
			return _store2.default.dispatch({ type: ON_TODO_BUTTON_CLICKED, id: id });
		},
		onCheckboxToggled: function onCheckboxToggled() {
			return _store2.default.dispatch({ type: ON_TODO_CHECKBOX_TOGGLED, id: id });
		}
	});
	return list;
}

function makeSummary(list, selectedSummaryStatus) {
	var newSummary = list.reduce(function (p, item) {
		p.countTotal++;
		item.isComplete && p.countComplete++;
		!item.isComplete && p.countIncomplete++;
		return p;
	}, {
		countTotal: 0,
		countComplete: 0,
		countIncomplete: 0
	});

	newSummary.countTotal = newSummary.countTotal + ' total';
	newSummary.countComplete = newSummary.countComplete + ' complete';
	newSummary.countIncomplete = newSummary.countIncomplete + ' remaining';

	newSummary.selectedSummaryStatus = selectedSummaryStatus;

	newSummary.onClickPending = function () {
		return _store2.default.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: _statuses.PENDING });
	};
	newSummary.onClickComplete = function () {
		return _store2.default.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: _statuses.COMPLETE });
	};
	newSummary.onClickTotal = function () {
		return _store2.default.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: _statuses.TOTAL });
	};

	return newSummary;
}

},{"../../../src/todos/constants/statuses":30,"../../store":5}],7:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],9:[function(require,module,exports){
module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		target: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	handleClick: function(e) {

		// if target is set (e.g. to "_blank"), let the browser handle it
		if (this.props.target || (this.props.href && this.props.href.indexOf('mailto:') === 0)) {
			return;
		}

		// if keyboard click, or not a left click, let the browser handle it
		if (!e.button === 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
			return;
		}

		// otherwise intercept the browser
		e.preventDefault();

		// if a handler was provided, run it
		if (this.props.onClick) {
			this.props.onClick(this.props.href);
		}
	},

	render: function() {
		return React.createElement('a', Object.assign({}, this.props, {
			href: this.props.href,
			className: 'link ' + this.props.className,
			onClick: this.handleClick
		}));
	}
});

},{}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;
},{}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = applyMiddleware;

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":14}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
},{}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = combineReducers;

var _createStore = require('./createStore');

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2['default'])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if ("development" !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2['default'])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
},{"./createStore":15,"./utils/warning":17,"lodash/isPlainObject":21}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}
},{}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}
},{"lodash/isPlainObject":21,"symbol-observable":22}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = require('./bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2['default'];
exports.combineReducers = _combineReducers2['default'];
exports.bindActionCreators = _bindActionCreators2['default'];
exports.applyMiddleware = _applyMiddleware2['default'];
exports.compose = _compose2['default'];
},{"./applyMiddleware":11,"./bindActionCreators":12,"./combineReducers":13,"./compose":14,"./createStore":15,"./utils/warning":17}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
},{}],18:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":19}],19:[function(require,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],20:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],21:[function(require,module,exports){
var getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;

},{"./_getPrototype":18,"./isObjectLike":20}],22:[function(require,module,exports){
module.exports = require('./lib/index');

},{"./lib/index":23}],23:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = require('./ponyfill');

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root = module; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ponyfill":24}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};
},{}],25:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _siteHeader = require('../site/site-header');

var _siteHeader2 = _interopRequireDefault(_siteHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = function AboutPage(p) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_siteHeader2.default, p.siteHeader),
		_react2.default.createElement(
			'main',
			{ className: (0, _classnames2.default)('page', p.className) },
			_react2.default.createElement(
				'p',
				null,
				'Read the article: ',
				_react2.default.createElement(
					'a',
					{ href: 'http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors', target: '_blank' },
					'Extreme Decoupling React Redux Selectors'
				)
			),
			_react2.default.createElement(
				'p',
				null,
				'See the code on github:'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'https://github.com/thinkloop/todo-app', target: '_blank' },
						_react2.default.createElement(
							'strong',
							null,
							'integration'
						),
						': selectors'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'https://github.com/thinkloop/todo-react-components', target: '_blank' },
						_react2.default.createElement(
							'strong',
							null,
							'view'
						),
						': react components'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'https://github.com/thinkloop/todo-redux-state', target: '_blank' },
						_react2.default.createElement(
							'strong',
							null,
							'state'
						),
						': redux container'
					)
				)
			)
		)
	);
};

AboutPage.propTypes = {
	className: _react2.default.PropTypes.string,
	siteHeader: _react2.default.PropTypes.object
};

exports.default = AboutPage;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../site/site-header":28,"classnames":8}],26:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (data, domElement) {
	var page = void 0;

	if (data.url !== window.location.pathname + window.location.search) {
		window.history.pushState(null, null, data.url);
	}

	switch (data.selectedPage) {
		case _pages.ABOUT:
			page = _react2.default.createElement(_aboutPage2.default, {
				className: 'about-page',
				siteHeader: data.siteHeader
			});
			break;
		default:
			page = _react2.default.createElement(_todosPage2.default, _extends({
				className: 'todos-page'
			}, data.todos, {
				siteHeader: data.siteHeader
			}));
			break;
	}

	(0, _reactDom.render)(page, domElement);
};

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _pages = require('./site/constants/pages');

var _todosPage = require('./todos/todos-page');

var _todosPage2 = _interopRequireDefault(_todosPage);

var _aboutPage = require('./about/about-page');

var _aboutPage2 = _interopRequireDefault(_aboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./about/about-page":25,"./site/constants/pages":27,"./todos/todos-page":34}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOME = exports.HOME = 'HOME';
var ABOUT = exports.ABOUT = 'ABOUT';

},{}],28:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pages = require('../site/constants/pages');

var _linkReact = require('link-react');

var _linkReact2 = _interopRequireDefault(_linkReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteHeader = function SiteHeader(p) {
	return _react2.default.createElement(
		'header',
		{ className: (0, _classnames2.default)('site-header', p.className) },
		_react2.default.createElement(
			'nav',
			null,
			_react2.default.createElement(
				_linkReact2.default,
				{ className: (0, _classnames2.default)({ selected: p.selectedPage === _pages.HOME }), href: p.hrefHome, onClick: p.onClickHome },
				p.labelHome
			),
			_react2.default.createElement(
				_linkReact2.default,
				{ className: (0, _classnames2.default)({ selected: p.selectedPage === _pages.ABOUT }), href: p.hrefAbout, onClick: p.onClickAbout },
				p.labelAbout
			)
		)
	);
};

SiteHeader.propTypes = {
	className: _react2.default.PropTypes.string,

	selectedPage: _react2.default.PropTypes.string,

	labelHome: _react2.default.PropTypes.string,
	labelAbout: _react2.default.PropTypes.string,

	hrefHome: _react2.default.PropTypes.string,
	hrefAbout: _react2.default.PropTypes.string,

	onClickHome: _react2.default.PropTypes.func,
	onClickAbout: _react2.default.PropTypes.func
};

exports.default = SiteHeader;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../site/constants/pages":27,"classnames":8,"link-react":9}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.constants = exports.render = undefined;

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _pages = require('./site/constants/pages');

var PAGES = _interopRequireWildcard(_pages);

var _statuses = require('./todos/constants/statuses');

var TODO_STATUSES = _interopRequireWildcard(_statuses);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
	PAGES: PAGES,
	TODO_STATUSES: TODO_STATUSES
};

exports.default = {
	render: _render2.default,
	constants: constants
};
exports.render = _render2.default;
exports.constants = constants;

},{"./render":26,"./site/constants/pages":27,"./todos/constants/statuses":30}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PENDING = exports.PENDING = 'PENDING';
var COMPLETE = exports.COMPLETE = 'COMPLETE';
var TOTAL = exports.TOTAL = 'TOTAL';

},{}],31:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoItem = function TodoItem(p) {
	return _react2.default.createElement(
		'article',
		{ className: (0, _classnames2.default)('list-item', { 'checked': p.isComplete }, p.className) },
		_react2.default.createElement(
			'label',
			{ className: 'description' },
			_react2.default.createElement('input', { className: 'checkbox', type: 'checkbox', checked: p.isComplete, onChange: p.onCheckboxToggled }),
			p.description
		),
		_react2.default.createElement(
			'button',
			{ className: 'button', onClick: p.onButtonClicked },
			p.buttonLabel
		)
	);
};

TodoItem.propTypes = {
	className: _react2.default.PropTypes.string,

	description: _react2.default.PropTypes.string,
	isComplete: _react2.default.PropTypes.bool,

	buttonLabel: _react2.default.PropTypes.string,

	onButtonClicked: _react2.default.PropTypes.func,
	onCheckboxToggled: _react2.default.PropTypes.func
};

exports.default = TodoItem;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"classnames":8}],32:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _todoItem = require('../todos/todo-item');

var _todoItem2 = _interopRequireDefault(_todoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosList = function TodosList(p) {
	return _react2.default.createElement(
		'section',
		{ className: (0, _classnames2.default)('list', p.className) },
		!!p.todos && p.todos.map(function (todo) {
			return _react2.default.createElement(_todoItem2.default, _extends({
				key: todo.id
			}, todo));
		})
	);
};

TodosList.propTypes = {
	className: _react2.default.PropTypes.string,
	todos: _react2.default.PropTypes.array
};

exports.default = TodosList;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../todos/todo-item":31,"classnames":8}],33:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodosNewForm = function (_Component) {
	_inherits(TodosNewForm, _Component);

	function TodosNewForm(props) {
		_classCallCheck(this, TodosNewForm);

		var _this = _possibleConstructorReturn(this, (TodosNewForm.__proto__ || Object.getPrototypeOf(TodosNewForm)).call(this, props));

		_this.handleOnChange = function (e) {
			_this.setState({ value: e.target.value });
		};

		_this.handleOnSubmit = function (e) {
			e.preventDefault();
			_this.setState({ value: '' });
			_this.props.onSubmit(_this.state.value);
		};

		_this.state = {
			value: _this.props.value || ''
		};

		_this.handleOnChange = _this.handleOnChange.bind(_this);
		_this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
		return _this;
	}

	_createClass(TodosNewForm, [{
		key: 'render',
		value: function render() {
			var p = this.props;
			var s = this.state;
			return _react2.default.createElement(
				'form',
				{ className: (0, _classnames2.default)(p.className), onSubmit: this.handleOnSubmit },
				_react2.default.createElement('input', { className: 'todos-new-form-input', value: s.value, placeholder: p.placeholder, onChange: this.handleOnChange })
			);
		}
	}]);

	return TodosNewForm;
}(_react.Component);

TodosNewForm.propTypes = {
	className: _react2.default.PropTypes.string,
	placeholder: _react2.default.PropTypes.string,
	onSubmit: _react2.default.PropTypes.func
};
exports.default = TodosNewForm;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"classnames":8}],34:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _siteHeader = require('../site/site-header');

var _siteHeader2 = _interopRequireDefault(_siteHeader);

var _todosNewForm = require('../todos/todos-new-form');

var _todosNewForm2 = _interopRequireDefault(_todosNewForm);

var _todosList = require('../todos/todos-list');

var _todosList2 = _interopRequireDefault(_todosList);

var _todosSummary = require('../todos/todos-summary');

var _todosSummary2 = _interopRequireDefault(_todosSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosPage = function TodosPage(p) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_siteHeader2.default, p.siteHeader),
		_react2.default.createElement(
			'main',
			{ className: (0, _classnames2.default)('page', p.className) },
			!!p.newForm && _react2.default.createElement(_todosNewForm2.default, _extends({ className: 'todos-new-form' }, p.newForm)),
			!!p.list && _react2.default.createElement(_todosList2.default, { className: 'todos-list', todos: p.list }),
			!!p.summary && _react2.default.createElement(_todosSummary2.default, _extends({ className: 'todos-summary' }, p.summary))
		)
	);
};

TodosPage.propTypes = {
	className: _react2.default.PropTypes.string,

	siteHeader: _react2.default.PropTypes.object,

	newForm: _react2.default.PropTypes.object,
	list: _react2.default.PropTypes.array,
	summary: _react2.default.PropTypes.object
};

exports.default = TodosPage;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../site/site-header":28,"../todos/todos-list":32,"../todos/todos-new-form":33,"../todos/todos-summary":35,"classnames":8}],35:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _statuses = require('../todos/constants/statuses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosSummary = function TodosSummary(p) {
	return _react2.default.createElement(
		'section',
		{ className: (0, _classnames2.default)('todo-summary', p.className) },
		_react2.default.createElement(
			'span',
			{ className: (0, _classnames2.default)('todo-summary-pending', { 'is-selected': p.selectedSummaryStatus === _statuses.PENDING }), onClick: p.onClickPending },
			p.countIncomplete
		),
		_react2.default.createElement(
			'span',
			{ className: (0, _classnames2.default)('todo-summary-complete', { 'is-selected': p.selectedSummaryStatus === _statuses.COMPLETE }), onClick: p.onClickComplete },
			p.countComplete
		),
		_react2.default.createElement(
			'span',
			{ className: (0, _classnames2.default)('todo-summary-total', { 'is-selected': p.selectedSummaryStatus === _statuses.TOTAL }), onClick: p.onClickTotal },
			p.countTotal
		)
	);
};

TodosSummary.propTypes = {
	className: _react2.default.PropTypes.string,

	countIncomplete: _react2.default.PropTypes.string,
	countComplete: _react2.default.PropTypes.string,
	countTotal: _react2.default.PropTypes.string,

	selectedSummaryStatus: _react2.default.PropTypes.oneOf([_statuses.PENDING, _statuses.COMPLETE, _statuses.TOTAL]),

	onClickPending: _react2.default.PropTypes.func,
	onClickComplete: _react2.default.PropTypes.func,
	onClickTotal: _react2.default.PropTypes.func
};

exports.default = TodosSummary;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../todos/constants/statuses":30,"classnames":8}]},{},[1])
//# sourceMappingURL=build.js.map
