// // pre-built ui.com

import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext"; // Assuming you have a context to manage user state

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	const { user } = useAppContext(); // Assuming you have a context to manage user state
	return (
		<>
			<nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
				<NavLink to="/">
					{" "}
					<img
						className="h-12"
						src={assets.logo}
						alt="Logo"
					/>
				</NavLink>

				{/* Desktop Menu */}
				<div className="hidden sm:flex items-center gap-8">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/products">Products</NavLink>
					<NavLink to="/contact">Contact Us</NavLink>

					<div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
						<input
							className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
							type="text"
							placeholder="Search products"
						/>
						<img
							src={assets.search_icon}
							alt="search"
							className="w-4 h-4"
						/>
					</div>

					<div className="relative cursor-pointer">
						<img
							src={assets.cart_icon}
							className="w-6 opacity-80"
							alt=""
						/>
						<button className="absolute -top-2 -right-3 text-xs text-white bg-primary-dull w-[18px] h-[18px] rounded-full">
							3
						</button>
					</div>

					<button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull  transition text-white rounded-full">
						Login
					</button>
				</div>

				<button
					onClick={() => (open ? setOpen(false) : setOpen(true))}
					aria-label="Menu"
					className="sm:hidden"
				>
					{/* Menu Icon SVG */}
					<img
						src={assets.menu_icon}
						alt="menu"
					/>
				</button>

				{/* Mobile Menu */}
				<div
					className={`${
						open ? "flex" : "hidden"
					} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
				>
					<NavLink
						to="/"
						onClick={() => setOpen(false)}
					>
						Home
					</NavLink>
					<NavLink
						to="/"
						onClick={() => setOpen(false)}
					>
						All Products
					</NavLink>
					{user && (
						<NavLink
							to="/"
							onClick={() => setOpen(false)}
						>
							My Orders
						</NavLink>
					)}
					<NavLink
						to="/"
						onClick={() => setOpen(false)}
					>
						Contact Us
					</NavLink>
					{!user ? (
						<button
							onClick={() => {
								setOpen(false);
							}}
							className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
						>
							Login
						</button>
					) : (
						<button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
							Logout
						</button>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
