import React from 'react';
import classnames from 'classnames';

import { HOME, ABOUT } from '../site/constants/pages';

import Link from 'link-react';

const SiteHeader = (p) => (
	<header className={ classnames('site-header', p.className) }>
		<nav>
			<Link className={ classnames({ selected: p.selectedPage === HOME }) } href={ p.homeLink.href } onClick={ p.homeLink.onClick }>{ p.homeLink.label }</Link>
			<Link className={ classnames({ selected: p.selectedPage === ABOUT }) } href={ p.aboutLink.href } onClick={ p.aboutLink.onClick }>{ p.aboutLink.label }</Link>
		</nav>
	</header>
);

SiteHeader.propTypes = {
	className: React.PropTypes.string,

	selectedPage: React.PropTypes.string,
	homeLink: React.PropTypes.object,
	aboutLink: React.PropTypes.object
};

export default SiteHeader;
