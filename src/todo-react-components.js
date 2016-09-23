import components from './components';
import * as PAGES from './site/constants/pages';
import * as TODO_STATUSES from './todos/constants/statuses';

const constants = {
	PAGES,
	TODO_STATUSES
};


export default {
	components,

	constants: {
		PAGES,
		TODO_STATUSES
	}
};

export {
	components,
	constants
};