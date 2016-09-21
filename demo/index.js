import app from '../src/app';
import store from './store';

const appElement = document.getElementById('app');

Object.defineProperty(window, 'state', { get: () => store.getState(), enumerable: true });
console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n ********************************************* \n');

store.subscribe(() => app(appElement, store.getState()));

store.dispatch({ type: 'init' });
