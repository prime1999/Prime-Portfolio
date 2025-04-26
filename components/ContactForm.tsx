"use client";

import { motion } from "framer-motion";

const ContactForm = () => {
	return (
		<section className="my-16">
			<h4 className="text-center text-xl text-darkGray font-semibold">
				Send a Message
			</h4>
			<form
				action="https://formsubmit.co/moshoodolabanji22@gmail.com"
				method="POST"
				className="w-11/12 mx-auto mt-4 flex justify-center flex-col items-center text-sm font-inter text-dark md:w-10/12 lg:w-7/12"
			>
				<div className="w-full flex gap-4 items-center justify-between">
					<input
						type="text"
						placeholder="Your name..."
						name="name"
						className="w-1/2 border rounded-lg border-light-200 p-2"
					/>
					<input
						type="email"
						placeholder="Your email..."
						name="email"
						className="w-1/2 border rounded-lg border-light-200 p-2"
					/>
				</div>
				<textarea
					name="message"
					placeholder="Your message..."
					className="mt-4 border border-gray-200 rounded-lg p-2 w-full h-24"
				></textarea>
				<motion.button
					type="submit"
					whileHover="hover"
					className="relative w-full h-10 mt-2 rounded-lg bg-dark text-light-100 py-2 cursor-pointer overflow-hidden"
				>
					<motion.span
						initial={{ x: "-100%" }}
						variants={{ hover: { x: 0 } }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						className="absolute bg-darkGray top-0 left-0 w-full h-full"
					></motion.span>
					<span className="relative z-[999]">Send message</span>
				</motion.button>
			</form>
		</section>
	);
};

export default ContactForm;
