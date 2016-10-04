import React from 'react';
import classnames from 'classnames';

import SiteHeader from '../site/site-header';

const AboutPage = (p) => (
	<div>
		<SiteHeader { ...p.siteHeader } />

		<main className={ classnames('page', p.className) }>
			See the article for more details: <a href="http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors" target="_blank">Extreme Decoupling React Redux Selectors</a>
		</main>
	</div>
);

AboutPage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default AboutPage;
