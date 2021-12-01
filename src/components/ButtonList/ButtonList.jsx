import React from "react";

const ButtonList = (props) => {

	const buttonMarkup = props.options.map((option) => (
		<button
			className="options-button"
			key={option.id}
			onClick={props.actionProvider.handleTopicWidget}
			data-arg1={option.widName}
			data-arg2={option.answer}
		>
			{option.text}
		</button>
	));

	return <div className="options-container">{buttonMarkup}</div>;
}

export default ButtonList;
