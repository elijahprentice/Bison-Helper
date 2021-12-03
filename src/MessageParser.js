
// all questions and answers
let questions = [
	"What programs are available at Howard?",
	"How do I find my academic advisor?",
	"How do I study abroad?",
	"How do I decide what classes to take?",
	"What is the registrar?",
	"How do I contact the registrar?",
	"Where is the registrar office located?",
	"What dorms are available at Howard?",
	"What is the cost of on-campus housing at Howard?",
	"What is the cost of off-campus housing at Howard?",
	"How do I contact the financial aid office?",
	"Where is the financial aid office located?",
	"How do I contact the bursar office?",
	"Where is the bursar office located?",
	"What sports does Howard play?",
	"Does Howard offer intramural sports?",
	"What clubs and organizations are at Howard?",
	"Can I start my own organization?"
]

let answers = [
	"Howard offers a plethora of undergraduate and graduate programs ranging from Fine Arts to Communications to Education and Engineering. To see a full list of the programs offered at Howard, visit https://www2.howard.edu/academics.",
	"When you are admitted into Howard, you should be assigned an advisor before classes start. If you are not assigned an advisor or are just unsure of who they may be, your college's Howard site will have a page listing the faculty in your department. Email a faculty member in order to figure out who your advisor is.",
	"Students who are in good academic standing and want to study abroad must complete the COAS Summer Study Abroad application as well as any program specific application. For more information on studying abroad, visit https://coas.howard.edu/experiential-learning/study-abroad.",
	"All students have a scheme to follow for their major (with the exception of students who's major is undeclared). Scheme's for your major can be found on your department's Howard site, but if you cannot find it or have questions about your classes then contact your advisor.", 
	"The registrar is in charge of academic records. They are responsible for issuing transcripts, approving graduation application, recording grades, and much more. More information on Howard's registrar is available at https://www2.howard.edu/academics/registrar.", 
	"The registrar is available over the phone at (202) 806-2705 or over email at registrar@howard.edu.", 
	"The registrar office is located in the administration building in Suite 105.", 
	"Freshman boys are usually placed in the all-boys dorm, Drew Hall. Freshman girls can be placed in The Quad or College Hall North. Other freshmen can be placed in Cook Hall, a co-ed dorm. Visit https://studentaffairs.howard.edu/housing/residence-halls to learn more about the dorms including dorms for continuing students.",
	"The 2021-2022 estimation for the cost of housing at Howard is about $9300. This will vary depending on which dorm you stay in. See https://studentaffairs.howard.edu/housing/residence-halls for the per-semester rates of each on-campus dorm.",
	"The 2021-2022 estimated cost for off-campus housing at Howard is over $9400. A full listing of off-campus housing options can be found here: https://studentaffairs.howard.edu/housing/find-off-campus-housing.",
	"Financial aid can be reached over the phone at (855)-490-2875 or by email at finaid@howard.edu.",
	"The financial aid office can be found in Suite 205 of the administration building.",
	"The bursar can be reached over the phone at (855)-490-2875 or by email at bursarhelp@howard.edu.",
	"The bursar office can be found in Suite 218 of the administration building.",
	"Howard is mostly known for its football team and its men and women's basketball teams, but Howard has plenty of other sports such as cross country and soccer. The full list of sports available at can be found here: https://hubison.com/index.aspx",
	"Yes, they do! Howard offers flag football, dodgeball, soccer, men and women's basketball, and many more. Visit https://www.imleagues.com/spa/intramural/23f8a7f73e0c43ff91a065269bf33e90/home for more information on intramural sports.",
	"Howard has over 200 different clubs and organizations available for you to join, including Greek organizations, club sports, and honor societies. A complete list of the clubs available at Howard can be found here: https://howard.campuslabs.com/engage/organizations.",
	"Yes, you can! To create an officially recognized club at Howard, you need to submit a completed petition for recognition packet. The criteria to become an official club can be found at https://studentaffairs.howard.edu/activities/start-new-organization."
]

// Wagner-Fischer
// https://github.com/tallesl/wagner-fischer/blob/master/lib/wagner-fischer.js
function wagner(string_a, string_b) {
	
	var str_distances = []

	for (var i = 0; i <= string_a.length; ++i) {
		str_distances[i] = [i]
	}
	for (var i = 0; i <= string_b.length; ++i) {
		str_distances[0][i] = i
	}

	for (var j = 1; j <= string_b.length; ++j)
		for (var i = 1; i <= string_a.length; ++i)
			str_distances[i][j] = 
				string_a[i-1] === string_b[j-1] ?
				str_distances[i-1][j-1] :

				Math.min.apply(Math, [
					str_distances[i-1][j] + 1,
					str_distances[i][j-1] + 1,
					str_distances[i-1][j-1] + 1
				])
	return str_distances[string_a.length][string_b.length]
}

class MessageParser {

	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {

		const lowerCaseMessage = message.toLowerCase();

		if (lowerCaseMessage.length > 0) {
			if (lowerCaseMessage.includes('faq')) {
				this.actionProvider.displayFAQ();
			} else if (lowerCaseMessage.includes('important dates')) {
				this.actionProvider.importantDates();
			} else if (lowerCaseMessage.includes('updates')) {
				this.actionProvider.campusUpdates();
			} else if (lowerCaseMessage.includes('locate')) {
				this.actionProvider.locateHoward('Admin');
			} else {
				let idx = 1000;
				let leven_dist = 1000;
				for (var i = 0; i < questions.length; ++i) {
					let new_leven = wagner(lowerCaseMessage,questions[i]);
					if (new_leven < leven_dist) {
						leven_dist = new_leven;
						idx = i;
					}
				}
				this.actionProvider.askingQuestions(questions[idx],answers[idx]);
			}
		}
	}
}

export default MessageParser;
