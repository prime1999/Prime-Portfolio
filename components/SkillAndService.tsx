import ListDesign from "./ListDesign";

const services = [
	"Landing pages",
	"Custom Websites",
	"Interactive Websites",
	"E-commerce Sites",
	"Custom Web Tools",
	"Utility Tools",
	"SaaS products",
	"Backend APIs",
	"Progressive Web Apps",
	"Mobile-first design",
];

const SkillAndService = () => {
	return (
		<section>
			<div className="relative bg-transparent w-full mx-auto overflow-hidden mt-12 p-2">
				<h4 className="text-center text-md mb-4 font-semibold text-gray-500">
					<span className="rotate-180">|</span>Services<span>|</span>
				</h4>

				<ListDesign list={services} />
			</div>
		</section>
	);
};

export default SkillAndService;
