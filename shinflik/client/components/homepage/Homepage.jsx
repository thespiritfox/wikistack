import React from 'react';

import '../../css-components/Homepage.css'

import SuggestBar from '../suggestbar/SuggestBar';
import Welcome from '../welcome/Welcome'
import HeaderButton from '../headerButton/HeaderButton'
import MovScroll from '../movscroll/MovScroll'

export default function Homepage() {
	return (
		<div className="Homepage">
			<SuggestBar />
			<Welcome />
			<HeaderButton text="SHOWCASE" />
			<MovScroll />
			<HeaderButton text="PREMIERES" />
			<MovScroll />
			<HeaderButton text="CURATED" />
			<MovScroll />
		</div>
	);
}
