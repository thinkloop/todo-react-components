import { component } from '../src/todo-react-components';

import store from './store';

const htmlElement = document.getElementById('app');


Object.defineProperty(window, 'state', { get: () => store.getState(), enumerable: true });
console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n ********************************************* \n');

store.subscribe(() => component(htmlElement, store.getState()));

store.dispatch({ type: 'init' });
