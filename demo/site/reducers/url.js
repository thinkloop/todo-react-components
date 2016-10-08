import { ON_CLICK_NAV } from '../../site/reducers/site-header';
import { HOME, ABOUT } from '../../../src/site/constants/pages';

export default function (url = '/', action) {
	switch (action.type) {
	case ON_CLICK_NAV:
		if (action.selectedPage === ABOUT) {
			return '/about';
		}
		return '/';

	default:
		return url;

	}
}
