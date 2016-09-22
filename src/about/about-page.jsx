import React from 'react';
import classnames from 'classnames';

import SiteHeader from '../site/site-header';

const AboutPage = (p) => (
	<div>
		<SiteHeader { ...p.siteHeader } />

		<main className={ classnames('page', p.className) }>
			About Page
		</main>
	</div>
);

AboutPage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default AboutPage;
