"use client";

import React, { useState } from "react";
import { FaShare, FaThumbsUp } from "react-icons/fa";

interface InteractiveSectionProps {
  slug: string;
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({ slug }) => {
  const [likes, setLikes] = useState(230);
  const [comments, setComments] = useState<
    { username: string; text: string }[]
  >([]);
  const [commentInput, setCommentInput] = useState("");
  const [username, setUsername] = useState("");

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim() && username.trim()) {
      setComments((prev) => [...prev, { username, text: commentInput }]);
      setCommentInput("");
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mb-6">
        <button
          onClick={handleLike}
          className="flex items-center text-gray-800 text-sm font-medium hover:text-blue-500 transition duration-200 mb-4 sm:mb-0"
        >
          <FaThumbsUp className="mr-2" />
          {likes} Likes
        </button>

        <div className="flex items-center text-gray-800 text-sm font-medium">
          <FaShare className="mr-2" />
          74 Shares
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mb-6"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
          />
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
          >
            Post
          </button>
        </form>

        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-sm rounded-md text-gray-700"
              >
                <strong className="text-blue-600">{comment.username}</strong>:{" "}
                {comment.text}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default InteractiveSection;
