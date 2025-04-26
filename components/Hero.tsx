"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineWifiCalling, MdOutlineContentCopy } from "react-icons/md";
import NavBar from "./NavBar";
import developer from "@/public/assets/images/developer.jpg";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
	const handleCopy = async () => {
		await navigator.clipboard.writeText("moshoodolabanji22@gmail.com");
		alert("✅ Copied!");
	};
	return (
		<section className="relative w-[100vw] pb-12 overflow-hidden">
			{/* Grid background */}
			<div className="absolute inset-0 z-0 grid" />

			{/* Radial fade overlay */}
			<div className="absolute inset-0 pointer-events-none radial-fade" />
			{/* This is your particle overlay */}
			<div className="absolute inset-0 z-[999] pointer-events-none">
				<ParticlesContainer />
			</div>

			{/* Hero content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				<NavBar />
				<div className="flex flex-col items-center justify-center gap-4 text-xl text-center font-semibold font-inter text-gray-400 mt-48 md:text-3xl">
					<span>
						<h1 className="">
							Hello,{" "}
							<motion.span
								animate={{
									rotate: [0, 20, -10, 20, -5, 0], // waving motion
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatDelay: 2,
								}}
								className="inline-block origin-[70%_70%] w-8 h-8 text-2xl"
							>
								👋
							</motion.span>
							<span className="ml-2 text-dark">I'm Moshood.</span>
						</h1>
					</span>
					<span className="flex gap-2 font-normal">
						<p className="text-dark font-semibold">Web developer </p>{" "}
						<span className="rounded-lg border-2 border-light-200">
							<Image
								src={developer.src}
								alt="developer-image"
								width={50}
								height={50}
								className="rounded-lg"
							/>
						</span>
					</span>
					<p className="font-normal">
						turning concepts into real,{" "}
						<span className="text-dark font-semibold">usable products.</span>
					</p>
				</div>
				<div className="w-10/12 mt-10 text-gray-400 font-poppins md:w-9/12 lg:w-1/2">
					<p className="font-inter text-inter text-sm mx-auto text-center leading-10">
						Bringing ideas to life by crafting interactive{" "}
						<span className="bg-light-200 text-dark py-1 px-2 font-semibold">
							websites
						</span>{" "}
						and building intelligent{" "}
						<span className="bg-light-200 text-dark py-1 px-2 font-semibold">
							digital tools
						</span>{" "}
						that elevate user experiences and solve{" "}
						<span className="bg-light-200 text-dark py-1 px-2 font-semibold">
							real-world problems
						</span>
						.
					</p>
				</div>
				<div className="flex justify-center items-center gap-4 mt-6">
					<a
						href="https://calendly.com/moshoodolabanji22"
						target="_blank"
						rel="noopener noreferrer"
					>
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
							<span className="z-10">Book a call</span>
							<MdOutlineWifiCalling className="z-10" />
						</motion.button>
					</a>
					<button
						onClick={() => handleCopy()}
						className="bg-white rounded-full py-2 px-3 text-dark text-xs font-poppins flex items-center justify-center gap-2 cursor-pointer hover:bg-light-100"
					>
						<MdOutlineContentCopy />
						Copy Email
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
