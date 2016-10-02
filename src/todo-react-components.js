import render from './component';
import * as PAGES from './site/constants/pages';
import * as TODO_STATUSES from './todos/constants/statuses';

const constants = {
	PAGES,
	TODO_STATUSES
};


export default {
	render,
	constants
};

export {
	render,
	constants
};