"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const SinglePost = ({ post }: any) => {
	return (
		<div>
			<motion.div
				whileHover="hover"
				className="relative w-[80vw] md:w-[60vw] lg:w-[30vw] rounded-lg font-inter overflow-hidden"
			>
				<motion.img
					variants={{
						hover: { scale: 1.07 },
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					src={post.coverImage.url}
					alt={post.coverImage.fileName}
					className="w-full h-full object-cover rounded-lg"
				/>
				<div className="absolute bottom-0 left-0 text-white z-10 w-full p-4 text-xs glass">
					<h6 className="font-semibold text-light-100">{post.title}</h6>
					<hr className="border-1 border-darkGray my-2" />
					<p className="text-light-200 mb-4">{post.slug}</p>
					<Link
						href={`/blog/${post.slug}`}
						className="w-24 flex gap-2 rounded-full px-2 py-1 bg-light-200 text-dark font-semibold hover:bg-white"
					>
						Read Post
						<MdOutlineArrowOutward />
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default SinglePost;
