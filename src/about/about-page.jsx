import React from 'react';
import classnames from 'classnames';

import SiteHeader from '../site/site-header';

const AboutPage = (p) => (
	<div>
		<SiteHeader { ...p.siteHeader } />

		<main className={ classnames('page', p.className) }>
			<p>
				Read the article for more details: <a href="http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors" target="_blank">Extreme Decoupling React Redux Selectors</a>
			</p>

			<p>
				See the code on github:
			</p>

			<ul>
				<li><a href="https://github.com/thinkloop/todo-app"><strong>integration</strong>: selectors</a></li>
				<li><a href="https://github.com/thinkloop/todo-react-components"><strong>view</strong>: react components</a></li>
				<li><a href="https://github.com/thinkloop/todo-redux-state"><strong>state</strong>: redux container</a></li>
			</ul>
		</main>
	</div>
);

AboutPage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default AboutPage;
