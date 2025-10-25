import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Home Page</h1>
                    <p className="text-lg text-center mb-8">
                        Explore our blog posts and discover amazing content.
                    </p>
                    <div className="text-center">
                        <NavLink
                            to="/posts"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Ir para página posts usando componente
                        </NavLink>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

