import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col justify-center items-center mb-4">
			<div className="w-full flex justify-center items-center gap-4 text-lg">
				{" "}
				<Link href="https://x.com/iminent_24" target="blank">
					<FaXTwitter />
				</Link>
				<Link
					href="https://www.linkedin.com/in/moshood-yakubu-b7a7b3256/"
					target="blank"
				>
					<FaLinkedin />
				</Link>
				<Link href="https://github.com/prime1999" target="blank">
					<FaGithub />
				</Link>
			</div>
			<p className="font-poppins text-sm font-semibold mt-2 text-dark">
				© <span>Eminence</span>
			</p>
		</footer>
	);
};

export default Footer;
