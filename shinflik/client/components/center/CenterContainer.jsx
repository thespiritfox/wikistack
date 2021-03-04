import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../homepage/Homepage';


export default function CenterContainer() {
	return (
		<div className="center-container">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/" component={Homepage} />
				<Route exact path="/" component={Homepage} />
			</Switch>
		</div>
	);
}
