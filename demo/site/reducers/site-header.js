const ON_CLICK_NAV = 'ON_CLICK_NAV';

import store from '../../store';

import { HOME_HREF, ABOUT_HREF } from '../../../src/site/constants/pages';

const defaultState = {
	labelHome: 'Todo App',
	labelAbout: 'About',

	hrefHome: HOME_HREF,
	hrefAbout: ABOUT_HREF,

	selected: '/',

	onClickHome: () => store.dispatch({ type: ON_CLICK_NAV, selected: HOME_HREF }),
	onClickAbout: () => store.dispatch({ type: ON_CLICK_NAV, selected: ABOUT_HREF })
};

export default function (siteHeader = defaultState, action) {
	switch (action.type) {
	case ON_CLICK_NAV:
		return {
			...siteHeader,
			selected: action.selected
		};

	default:
		return siteHeader;

	}
}
