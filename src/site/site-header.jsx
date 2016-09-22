import React from 'react';
import classnames from 'classnames';

import { HOME, ABOUT } from '../site/constants/pages';

import Link from '../common/link';

const SiteHeader = (p) => (
	<header className={ classnames('site-header', p.className) }>
		<nav>
			<Link className={ classnames({ selected: p.selectedPage === HOME }) } href={ p.hrefHome } onClick={ p.onClickHome }>{ p.labelHome }</Link>
			<Link className={ classnames({ selected: p.selectedPage === ABOUT }) } href={ p.hrefAbout } onClick={ p.onClickAbout }>{ p.labelAbout }</Link>
		</nav>
	</header>
);

SiteHeader.propTypes = {
	className: React.PropTypes.string,

	selectedPage: React.PropTypes.string,

	labelHome: React.PropTypes.string,
	labelAbout: React.PropTypes.string,

	hrefHome: React.PropTypes.string,
	hrefAbout: React.PropTypes.string,

	onClickHome: React.PropTypes.func,
	onClickAbout: React.PropTypes.func
};

export default SiteHeader;
