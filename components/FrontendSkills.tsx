import React from "react";
import ListDesign from "./ListDesign";

const frontend = [
	"HTML5 & CSS3",
	"JavaScript (ES6+)",
	"React.js",
	"Next.js",
	"Tailwind CSS",
	"Responsive Web Design",
	"Framer Motion",
	"GSAP",
];

const FrontendSkills = () => {
	return (
		<section className="mt-8">
			<ListDesign list={frontend} />
		</section>
	);
};

export default FrontendSkills;
