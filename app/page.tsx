import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillAndService from "@/components/SkillAndService";
import Skills from "@/components/Skills";

const page = () => {
	return (
		<main>
			<Hero />
			<SkillAndService />
			<Projects />
			<Skills />
		</main>
	);
};

export default page;
