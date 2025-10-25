import React from "react";

const Post = ({ title, content, author, date, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>By {author}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
