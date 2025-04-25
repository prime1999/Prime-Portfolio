import React from "react";
import ListDesign from "./ListDesign";

const backend = [
	"Node.js",
	"Express.js",
	"RESTful API Development",
	"MongoDB",
	"Authentication & Authorization",
	"Appwrite (BaaS)",
];

const BackendSkills = () => {
	return (
		<section className="mt-8">
			<ListDesign list={backend} />
		</section>
	);
};

export default BackendSkills;
