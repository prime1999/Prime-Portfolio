const NavBar = () => {
	return (
		<nav className="fixed top-15 rounded-full px-4 py-2 text-light-100 dark-glass">
			<ul className="flex items-center justify-center gap-8 text-xs font-poppins">
				{["Home", "Contact", "Blog"].map((list) => (
					<li key={list}>{list}</li>
				))}
				<button className="bg-darkGray rounded-full px-3 py-2">
					View Resume
				</button>
			</ul>
		</nav>
	);
};

export default NavBar;
