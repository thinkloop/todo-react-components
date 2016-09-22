import React from 'react';
import classnames from 'classnames';

import SiteHeader from '../site/site-header';

import TodosNewForm from '../todos/todos-new-form';
import TodosList from '../todos/todos-list';
import TodosSummary from '../todos/todos-summary';

const TodosPage = (p) => (
	<div>
		<SiteHeader { ...p.siteHeader } />

		<main className={ classnames('page', p.className) }>
			{ !!p.newForm &&
				<TodosNewForm className="todos-new-form" { ...p.newForm } />
			}

			{ !!p.list &&
				<TodosList className="todos-list" todos={ p.list } />
			}

			{ !!p.summary &&
				<TodosSummary className="todos-summary" { ...p.summary } />
			}
		</main>
	</div>
);

TodosPage.propTypes = {
	className: React.PropTypes.string,

	siteHeader: React.PropTypes.object,

	newForm: React.PropTypes.object,
	list: React.PropTypes.array,
	summary: React.PropTypes.object
};

export default TodosPage;
