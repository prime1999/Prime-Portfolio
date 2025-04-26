import Hero from "@/components/Hero";
import PostsSection from "@/components/PostsSection";
import Projects from "@/components/Projects";
import SkillAndService from "@/components/SkillAndService";
import Skills from "@/components/Skills";

const page = async () => {
	return (
		<main>
			<Hero />
			<SkillAndService />
			<Projects />
			<Skills />
			<PostsSection />
		</main>
	);
};

export default page;
