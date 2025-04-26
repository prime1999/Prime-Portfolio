import Hero from "@/components/Hero";
import PostsSection from "@/components/PostsSection";
import Projects from "@/components/Projects";
import SkillAndService from "@/components/SkillAndService";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const page = async () => {
	return (
		<main>
			<Hero />
			<SkillAndService />
			<Projects />
			<Skills />
			<PostsSection />
			<ContactForm />
			<Footer />
		</main>
	);
};

export default page;
