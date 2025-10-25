import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ title = "Minha Marca" }) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <NavLink
                        to="/"
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 hover:text-indigo-600"
                        aria-label="Logomarca"
                    >
                        {title}
                    </NavLink>
                    <nav className="flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-indigo-600 font-semibold"
                                    : "text-gray-900 hover:text-indigo-600"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/posts"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-indigo-600 font-semibold"
                                    : "text-gray-900 hover:text-indigo-600"
                            }
                        >
                            Posts
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
