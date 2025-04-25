"use client";

import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import iPhone from "@/public/assets/images/iPhone-site.png";
import audioLift from "@/public/assets/images/audioLift-site.png";
import edge from "@/public/assets/images/edge-site.png";
import dreameWeave from "@/public/assets/images/dreamWeave-site.png";
import { useState } from "react";

const projectDetails = [
	{
		img: iPhone,
		main: "iPhone 16 Pro Clone",
		link: "https://i-phone-16-pro-clone-site.vercel.app",
		detail:
			"A stunning front-end clone of the iPhone 16 Pro product site, showcasing attention to detail and animations using Next.js, Tailwind CSS, and Framer Motion.",
	},
	{
		img: audioLift,
		main: "Audio Extractor Tool",
		link: "https://audio-lift.vercel.app",
		detail:
			"A handy web app for extracting audio from uploaded videos using FFmpeg. Lightweight, fast, and intuitive—ideal for quick media conversions.",
	},
	{
		img: edge,
		main: "Car Showcase Site",
		link: "https://edge-m3sw.onrender.com",
		detail:
			"A modern car browsing experience built with React and Framer Motion, featuring smooth animations and responsive UI for exploring vehicle models.",
	},
	{
		img: dreameWeave,
		main: "E-commerce Web App",
		link: "https://dreamweave.onrender.com",
		detail:
			"An end-to-end shopping platform developed using the MERN stack, complete with user authentication, product listings, cart management, and order flow.",
	},
];

const Projects = () => {
	const [id, setId] = useState<number>(0);
	useGSAP(() => {
		gsap.to("#slider", {
			transform:
				window.innerWidth < 760
					? `translateX(${-105 * id}%)` // mobile
					: window.innerWidth < 1200
					? `translateX(${-102 * id}%)` // tablet
					: `translateX(${-100 * id}%)`, // laptop
			duration: 2,
			ease: "power2.inOut",
		});
	}, [id]);
	return (
		<section className="relative w-11/12 mx-auto my-12">
			<div>
				<h1 className="text-center text-darkGray my-4 font-semibold">
					Projects
				</h1>
				<div className="flex gap-8 w-[100vw] overflow-hidden">
					{projectDetails.map((list: any, i: number) => (
						<div
							id="slider"
							key={i}
							className="shrink-0 relative w-[30vw] h-[40vh]"
						>
							<div
								style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
								className="p-4 text-light-100 rounded-lg absolute top-0 left-0 w-full h-full "
							>
								<div className="w-11/12 mx-auto translate-y-[50%]">
									<h4 className="font-semibold text-sm mb-2">{list.main}</h4>
									<hr className="border-1 border-light-100" />
									<p className="mt-2 mb-4 text-xs">{list.detail}</p>
									<Link
										href={list.link}
										target="blank"
										className="font-semibold mt-8 text-xs bg-dark rounded-full px-2 py-1 hover:bg-darkGray"
									>
										View Site
									</Link>
								</div>
							</div>
							<img
								src={list.img.src}
								alt={`image ${i + 1}`}
								className="rounded-lg w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="absolute -bottom-20 right-10 flex gap-2 mb-4">
				<button
					disabled={id === 0}
					onClick={() => setId(id - 1)}
					className={`p-1 rounded-[100%] bg-light-200 ${
						id === 0 && "cursor-default opacity-5"
					}`}
				>
					<MdKeyboardArrowLeft className="text-2xl cursor-pointer" />
				</button>
				<button
					disabled={id === 3}
					onClick={() => setId(id + 1)}
					className={`p-1 rounded-[100%] bg-light-200 ${
						id === 3 && "cursor-none opacity-9"
					}`}
				>
					<MdKeyboardArrowRight className="text-2xl cursor-pointer" />
				</button>
			</div>
		</section>
	);
};

export default Projects;
