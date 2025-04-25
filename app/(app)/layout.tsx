import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppinSans = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-poppins-sans",
	subsets: ["latin"],
});
const inter = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Prime-Portfolio",
	description: "Digital response",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${poppinSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
