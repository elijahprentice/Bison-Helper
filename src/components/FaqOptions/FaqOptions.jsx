import React from "react";

const FaqOptions = (props) => {
	
	const options = [
		{ name: "academicFAQ", text: "Academics", id: 1 },
		{ name: "financialAid", text: "Financial Aid", id: 2 },
		{ name: "dormLife", text: "Dorm Life", id: 3 },
		{ name: "studentActivities", text: "Student Activities", id: 4 },
	];

	const optionsMarkup = options.map((option) => (
		<button
			className="options-button"
			key={option.id}
			onClick={props.actionProvider.handleTopicWidget}
			data-arg1={option.name}
			data-arg2="Great! Here are some possible questions you may have:"
		>
			{option.text}
		</button>
	));

	return <div className="options-container">{optionsMarkup}</div>;
}

export default FaqOptions;
