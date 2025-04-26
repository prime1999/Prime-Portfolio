"use client";

import React, { useState } from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSKills from "./OtherSKills";

const Skills = () => {
	const [status, setStatus] = useState<string>("frontend");
	return (
		<section className="w-10/12 mx-auto my-32">
			<div>
				<h4 className="text-center font-mono font-semibold text-xl text-darkGray mb-4">
					Skills
				</h4>
				<div>
					<ul className="flex gap-16 items-center justify-center">
						{["frontend", "backend", "Other-Skills"].map(
							(list: string, i: number) => (
								<li
									key={i}
									onClick={() => setStatus(list)}
									className={`text-md font-semibold capitalize cursor-pointer hover:text-dark ${
										status === list && "border-b border-darkGray"
									}`}
								>
									{list}
								</li>
							)
						)}
					</ul>
					<div>
						{status === "frontend" ? (
							<FrontendSkills selectedPath={status} />
						) : status === "backend" ? (
							<BackendSkills />
						) : (
							<OtherSKills />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
