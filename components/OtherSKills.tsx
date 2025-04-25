import React from "react";
import ListDesign from "./ListDesign";

const otherSkills = [
	"UI/UX Implementation",
	"State Management (Context API, Redux if applicable)",
	"Media File Handling",
	"Deployment & Hosting",
	"SEO Basics",
	"Problem Solving & Debugging",
	"Git & GitHub",
];

const OtherSKills = () => {
	return (
		<section className="mt-8">
			<ListDesign list={otherSkills} />
		</section>
	);
};

export default OtherSKills;
