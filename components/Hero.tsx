"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineWifiCalling, MdOutlineContentCopy } from "react-icons/md";
import NavBar from "./NavBar";
import developer from "@/public/assets/images/developer.jpg";
import ParticlesContainer from "./ParticlesContainer";

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

const Hero = () => {
	const handleCopy = async () => {
		await navigator.clipboard.writeText("moshoodolabanji22@gmail.com");
		alert("✅ Copied!");
	};
	return (
		<section className="relative w-[100vw] overflow-hidden">
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
				<div className="flex flex-col items-center justify-center gap-4 text-3xl font-semibold font-inter text-gray-400 mt-48">
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
				<div className="w-1/2 mt-10 text-gray-400 font-poppins">
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
						<button className="bg-dark rounded-full py-2 px-3 shadow-xl text-light-100 text-xs font-poppins flex items-center justify-center gap-2">
							Book a call
							<MdOutlineWifiCalling />
						</button>
					</a>
					<button
						onClick={() => handleCopy()}
						className="bg-white rounded-full py-2 px-3 text-dark text-xs font-poppins flex items-center justify-center gap-2"
					>
						<MdOutlineContentCopy />
						Copy Email
					</button>
				</div>
				<div className="relative bg-transparent w-full mx-auto overflow-hidden mt-8 p-2">
					<h4 className="text-center text-md mb-4 font-semibold text-gray-500">
						<span className="rotate-180">|</span>Services<span>|</span>
					</h4>
					<motion.div
						animate={{ x: ["0%", "-50%"] }} // move only halfway since we’re duplicating
						transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
						className="flex items-center gap-24 text-sm whitespace-nowrap"
					>
						{/* Original content */}
						{services.map((service, i) => (
							<p className="flex shrink-0" key={`original-${i}`}>
								{service}
							</p>
						))}

						{/* Duplicate content for seamless loop */}
						{services.map((service, i) => (
							<p className="flex shrink-0" key={`duplicate-${i}`}>
								{service}
							</p>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
