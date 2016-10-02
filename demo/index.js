import { component } from '../src/todo-react-components';

import store from './store';

const domElement = document.getElementById('app');


Object.defineProperty(window, 'state', { get: () => store.getState(), enumerable: true });
console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n ********************************************* \n');

store.subscribe(() => component(store.getState(), domElement));

store.dispatch({ type: 'init' });
