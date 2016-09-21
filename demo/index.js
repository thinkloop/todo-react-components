import components from '../src/components';
import store from './store';

const appElement = document.getElementById('app');

Object.defineProperty(window, 'state', { get: () => store.getState(), enumerable: true });
console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n ********************************************* \n');

store.subscribe(() => components(appElement, store.getState()));

store.dispatch({ type: 'init' });
