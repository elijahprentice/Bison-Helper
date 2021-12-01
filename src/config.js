import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import FaqOptions from "./components/FaqOptions/FaqOptions";
import ButtonList from "./components/ButtonList/ButtonList";
import CampusUpdates from "./components/CampusUpdates/CampusUpdates";

const config = {

	botName: "Bison Helper",
	initialMessages: [createChatBotMessage("Hi, I'm your official Bison Helper! I'm here to help you learn more about Howard University and keep you updated on all important information provided by the university.")],
	customStyles: {
		botMessageBox: {
			backgroundColor: "#376B7E"
		},
		chatButton: {
			backgroundColor: "#376B7E"
		}
	},
	widgets: [
		{
			widgetName: "campusUpdates",
			widgetFunc: (props) => <CampusUpdates {...props} />,
			props: {
				options: [
					{
						text: "November 21st, 2021: A Call to Chapel",
						id: 1
					},
					{
						text: "November 12th, 2021: Spring 2022 Registration Reminder",
						id: 2
					},
					{
						text: "November 8th, 2021: Veterans Day will be observed Thursday, Nov 11.",
						id: 3
					}
				]
			}
		},
		{
			widgetName: "importantDates",
			widgetFunc: (props) => <CampusUpdates {...props} />,
			props: {
				options: [
					{
						text: "November 24th, 2021: Classes and University Services Suspended at Noon.",
						id: 1
					},
					{
						text: "November 25-28th, 2021: Unversity Closed for Thanksgiving.",
						id: 2
					},
					{
						text: "December 3rd, 2021: Formal Classes End.",
						id: 3
					},
					{
						text: "December 3rd, 2021: Deadline to clear incomplete grades from Spring 2021.",
						id: 4
					},
				]
			}
		},
		{
			widgetName: "faqOptions",
			widgetFunc: (props) => <FaqOptions {...props} />,
		},
		{
			widgetName: "academicFAQ",
			widgetFunc: (props) => <ButtonList {...props} />,
			props: {
				options: [
					{
						text: "What programs are available at Howard?",
						answer: "Howard offers a plethora of undergraduate and graduate programs ranging from Fine Arts to Communications to Education and Engineering. To see a full list of the programs offered at Howard, visit https://www2.howard.edu/academics.",
						id: 1,
						widName: "academicFAQ"
					},
					{
						text: "How do I find my academic advisor?",
						answer: "When you are admitted into Howard, you should be assigned an advisor before classes start. If you are not assigned an advisor or are just unsure of who they may be, your college's Howard site will have a page listing the faculty in your department. Email a faculty member in order to figure out who your advisor is.",
						id: 2,
						widName: "academicFAQ"
					},
					{
						text: "How do I study abroad?",
						answer: "Students who are in good academic standing and want to study abroad must complete the COAS Summer Study Abroad application as well as any program specific application. For more information on studying abroad, visit https://coas.howard.edu/experiential-learning/study-abroad.",
						id: 3,
						widName: "academicFAQ"
					},
					{
						text: "How do I decide what classes to take?",
						answer: "All students have a scheme to follow for their major (with the exception of students who's major is undeclared). Scheme's for your major can be found on your department's Howard site, but if you cannot find it or have questions about your classes then contact your advisor.",
						id: 4,
						widName: "academicFAQ"
					},
					{
						text: "What is the registrar?",
						answer: "The registrar is in charge of academic records. They are responsible for issuing transcripts, approving graduation application, recording grades, and much more. More information on Howard's registrar is available at https://www2.howard.edu/academics/registrar.",
						id: 5,
						widName: "academicFAQ"
					},
					{
						text: "How do I contact the registrar?",
						answer: "The registrar is available over the phone at (202) 806-2705 or over email at registrar@howard.edu.",
						id: 6,
						widName: "academicFAQ"
					},
					{
						text: "Where is the registrar office located?",
						answer: "The registrar office is located in the administration building in Suite 105.",
						id: 7,
						widName: "academicFAQ"
					},
					{
						text: "Go Back",
						answer: "Anything else I can help with?",
						id: 8,
						widName: "faqOptions"
					},
				]
			}
		},
		{
			widgetName: "dormLife",
			widgetFunc: (props) => <ButtonList {...props} />,
			props: {
				options: [
					{
						text: "What dorms are available at Howard?",
						answer: "Freshman boys are usually placed in the all-boys dorm, Drew Hall. Freshman girls can be placed in The Quad or College Hall North. Other freshmen can be placed in Cook Hall, a co-ed dorm. Visit https://studentaffairs.howard.edu/housing/residence-halls to learn more about the dorms including dorms for continuing students.",
						id: 1,
						widName: "dormLife"
					},
					{
						text: "What is the cost of on-campus housing at Howard?",
						answer: "The 2021-2022 estimation for the cost of housing at Howard is about $9300. This will vary depending on which dorm you stay in. See https://studentaffairs.howard.edu/housing/residence-halls for the per-semester rates of each on-campus dorm.",
						id: 2,
						widName: "dormLife"
					},
					{
						text: "What is the cost of off-campus housing at Howard?",
						answer: "The 2021-2022 estimated cost for off-campus housing at Howard is over $9400. A full listing of off-campus housing options can be found here: https://studentaffairs.howard.edu/housing/find-off-campus-housing.",
						id: 3,
						widName: "dormLife"
					},
					{
						text: "Go Back",
						answer: "Anything else I can help with?",
						id: 4,
						widName: "faqOptions"
					}
				]
			}
		},
		{
			widgetName: "financialAid",
			widgetFunc: (props) => <ButtonList {...props} />,
			props: {
				options: [
					{
						text: "How do I contact the financial aid office?",
						answer: "Financial aid can be reached over the phone at (855)-490-2875 or by email at finaid@howard.edu.",
						id: 1,
						widName: "financialAid"
					},
					{
						text: "Where is the financial aid office located?",
						answer: "The financial aid office can be found in Suite 205 of the administration building.",
						id: 2,
						widName: "financialAid"
					},
					{
						text: "How do I contact the bursar office?",
						answer: "The bursar can be reached over the phone at (855)-490-2875 or by email at bursarhelp@howard.edu.",
						id: 3,
						widName: "financialAid"
					},
					{
						text: "Where is the bursar office located?",
						answer: "The bursar office can be found in Suite 218 of the administration building.",
						id: 4,
						widName: "financialAid"
					},
					{
						text: "Go Back",
						answer: "Anything else I can help with?",
						id: 5,
						widName: "faqOptions"
					}
				]
			}
		},
		{
			widgetName: "studentActivities",
			widgetFunc: (props) => <ButtonList {...props} />,
			props: {
				options: [
					{
						text: "What sports does Howard play?",
						answer: "Howard is mostly known for its football team and its men and women's basketball teams, but Howard has plenty of other sports such as cross country and soccer. The full list of sports available at can be found here: https://hubison.com/index.aspx",
						id: 1,
						widName: "studentActivities"
					},
					{
						text: "Does Howard offer intramural sports?",
						answer: "Yes, they do! Howard offers flag football, dodgeball, soccer, men and women's basketball, and many more. Visit https://www.imleagues.com/spa/intramural/23f8a7f73e0c43ff91a065269bf33e90/home for more information on intramural sports.",
						id: 2,
						widName: "studentActivities"
					},
					{
						text: "What clubs and organizations are at Howard?",
						answer: "Howard has over 200 different clubs and organizations available for you to join, including Greek organizations, club sports, and honor societies. A complete list of the clubs available at Howard can be found here: https://howard.campuslabs.com/engage/organizations.",
						id: 3,
						widName: "studentActivities"
					},
					{
						text: "Can I start my own organization?",
						answer: "Yes, you can! To create an officially recognized club at Howard, you need to submit a completed petition for recognition packet. The criteria to become an official club can be found at https://studentaffairs.howard.edu/activities/start-new-organization.",
						id: 4,
						widName: "studentActivities"
					},
					{
						text: "Go Back",
						answer: "Anything else I can help with?",
						id: 5,
						widName: "faqOptions"
					},
				]
			}
		}
	]
}

export default config;
