import React from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Posts() {
    const posts = [
        {
            title: "Primeiro Post",
            content: "Este é o conteúdo do primeiro post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "Autor 1",
            date: "2023-10-01",
            image: "https://via.placeholder.com/400x200?text=Post+1"
        },
        {
            title: "Segundo Post",
            content: "Este é o conteúdo do segundo post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Autor 2",
            date: "2023-10-02",
            image: "https://via.placeholder.com/400x200?text=Post+2"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                date={post.date}
                                image={post.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
