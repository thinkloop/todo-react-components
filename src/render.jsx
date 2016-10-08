import React from 'react';
import { render } from 'react-dom';

import { HOME, ABOUT } from './site/constants/pages';

import TodosPage from './todos/todos-page';
import AboutPage from './about/about-page';

export default function (data, domElement) {
	let page;

	if (data.url !== window.location.pathname + window.location.search) {
		window.history.pushState(null, null, data.url);
	}

	switch(data.selectedPage) {
	case ABOUT:
		page = <AboutPage
			className="about-page"
			siteHeader={ data.siteHeader }
		/>;
		break;
	default:
		page = <TodosPage
			className="todos-page"
			{ ...data.todos }
			siteHeader={ data.siteHeader }
		/>;
		break;
	}

	render(page, domElement);
}

