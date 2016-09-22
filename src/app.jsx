import React from 'react';
import { render } from 'react-dom';

import { HOME_HREF, ABOUT_HREF } from './site/constants/pages';

import TodosPage from './todos/todos-page';
import AboutPage from './about/about-page';

export default function (appElement, data) {
	let page;

	if (data.siteHeader.selected !== window.location.pathname) {
		window.history.pushState(null, null, data.siteHeader.selected);
	}

	switch(data.siteHeader.selected) {
	case ABOUT_HREF:
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

	render(page, appElement);
}

