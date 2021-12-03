//import logo from './logo.svg';
import './App.css';

import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider.js';
import MessageParser from './MessageParser.js';
import config from './config.js';

function App() {
	return (
		<div className="App">
			<div style={{ maxWidth: "400px" }}>
				<Chatbot 
				config={config}
	  			actionProvider={ActionProvider}
	  			messageParser={MessageParser}
				/>
			</div>
			<div className="command-list">
				<p>
					A list of commands to send Bison Helper using the chat. Try them out!
					<ul>
						<li>'FAQ' to display Frequently Asked Questions.</li>
						<li>'Important Dates' for upcoming dates such as registration deadlines or holiday closures.</li>
						<li>'Updates' for any important campus updates such as Calls to Chapel and new COVID regulations.</li>
					</ul>
					You can also ask questions in the chat.
				</p>
			</div>
		</div>
  );
}

export default App;
