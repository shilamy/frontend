"use client";
import React, { useState } from "react";
import { AskButtonProps } from "@/types";

const AskButton = ({ title, btnType, containerStyles }: AskButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleAddQuestion = async () => {
    if (!question.trim()) {
      setError("Question cannot be empty.");
      return;
    }

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("Failed to save question. Please try again.");
      }

      console.log("Question added!");
      setShowModal(false);
      setQuestion("");
    } catch (error) {
      console.error(error);
      setError("An error occurred while saving your question.");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setQuestion("");
    setError(null);
  };

  return (
    <div>
      <button
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={() => setShowModal(true)} 
      >
        {title}
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your question here..."
              rows={4}
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setError(null);
              }}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddQuestion}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskButton;
