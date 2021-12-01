class ActionProvider {
	
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	handleTopicWidget = (widName) => {
		const message = this.createChatBotMessage (
			widName.target.getAttribute('data-arg2'),
			{
				widget: widName.target.getAttribute('data-arg1'),
			}
		);

		this.updateChatbotState(message);
	};

	displayFAQ() {
		const message = this.createChatBotMessage (
			"Select a topic.",
			{
				widget: 'faqOptions',
			}
		);

		this.updateChatbotState(message);
	}
	
	importantDates() {
		const message = this.createChatBotMessage (
			"Important Dates 11/22-11/28:",
			{
				widget: 'importantDates',
			}
		);

		this.updateChatbotState(message);
	}

	campusUpdates() {
		const message = this.createChatBotMessage (
			"Most recent updates:",
			{
				widget: 'campusUpdates',
			}
		);

		this.updateChatbotState(message);
	}

	locateHoward = (building) => {
		const message = this.createChatBotMessage (
			"Lets find " + building + "!",
		);

		this.updateChatbotState(message);
	}

	askingQuestions = (question,answer) => {
		const message = this.createChatBotMessage (
			"'" + question + "' " + answer,
		);

		this.updateChatbotState(message);
	}

	updateChatbotState(message) {
		this.setState(prevState => ({
			...prevState, messages: [...prevState.messages, message]
		}));
	}
}

export default ActionProvider;
