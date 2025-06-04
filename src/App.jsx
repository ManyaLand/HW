import React from "react";

const now = new Date();

export const App = () => {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"main",
			null,
			React.createElement("h1", null, "Hello"),
		),
		React.createElement("footer", null, now.getFullYear()),
	);
};
