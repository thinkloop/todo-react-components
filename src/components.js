import app from './app';
import * as PAGES from './site/constants/pages';
import * as TODO_STATUSES from './todos/constants/statuses';

const constants = {
	PAGES,
	TODO_STATUSES
};

const components = {
	app,
	constants
};
export default components;

// also adding this notation to allow for importing specific pieces: import { App } from '...';
export {
	app,
	constants
};

