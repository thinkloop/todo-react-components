export const ON_CLICK_NAV = 'ON_CLICK_NAV';

import store from '../../store';

import { HOME, ABOUT } from '../../../src/site/constants/pages';

const defaultState = {
	labelHome: 'Todo App',
	labelAbout: 'About',

	hrefHome: '/',
	hrefAbout: '/about',

	selectedPage: '/',

	onClickHome: () => store.dispatch({ type: ON_CLICK_NAV, selectedPage: HOME }),
	onClickAbout: () => store.dispatch({ type: ON_CLICK_NAV, selectedPage: ABOUT })
};

export default function (siteHeader = defaultState, action) {
	switch (action.type) {
	case ON_CLICK_NAV:
		return {
			...siteHeader,
			selectedPage: action.selectedPage
		};

	default:
		return siteHeader;

	}
}
