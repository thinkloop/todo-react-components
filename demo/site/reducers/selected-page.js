import { ON_CLICK_NAV } from '../../site/reducers/site-header';
import { HOME, ABOUT } from '../../../src/site/constants/pages';

export default function (selectedPage = HOME, action) {
	switch (action.type) {
	case ON_CLICK_NAV:
		return action.selectedPage;

	default:
		return selectedPage;
	}
}
