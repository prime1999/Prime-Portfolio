import { motion } from "framer-motion";
const NavBar = () => {
	return (
		<nav className="fixed top-15 rounded-full px-4 py-2 text-light-100 dark-glass">
			<ul className="flex items-center justify-center gap-8 text-xs font-poppins">
				{["Home", "Contact", "Blog"].map((list) => (
					<li key={list} className="cursor-pointer">
						{list}
					</li>
				))}
				<motion.button
					whileHover="hover"
					className="relative overflow-hidden bg-dark rounded-full py-2 px-3 shadow-xl text-light-100 text-xs font-poppins flex items-center justify-center gap-2 cursor-pointer"
				>
					<motion.span
						initial={{ x: -200 }}
						variants={{ hover: { x: 0 } }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						className="absolute bg-darkGray top-0 left-0 w-full h-full"
					></motion.span>
					<span className="z-10">View Resume</span>
				</motion.button>
			</ul>
		</nav>
	);
};

export default NavBar;
