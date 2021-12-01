import React from "react";

import "./CampusUpdates.css";

const CampusUpdates = (props) => {
	
	const updateMarkup = props.options.map((option) => (
		<li className="update-list-item">
			{option.text}
		</li>
	));

	return <ul className="update-list">{updateMarkup}</ul>;
};

export default CampusUpdates;
