"use client"

import React from 'react'

function EmptyState({selectedQuestion}:any) {
  const QuestionList = [
    {
      id: 1,
      question: "What is the best way to learn React?",
    },
    {
      id: 2,
      question: "How can I improve my coding skills?",
    },
    {
      id: 3,
      question: "What are the latest trends in web development?",
    },
    {
      id: 4,
      question: "How do I get started with AI and machine learning?",
    },
    {
      id: 5,
      question: "What are the best practices for writing clean code?",
    },
  ]

  return (
    <div className="  p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Ask anything to AI Chat Agent
      </h2>

      <div className="space-y-3 w-[600px] text-center mx-auto">
        {QuestionList.map((item) => (
          <div
            key={item.id}
            onClick={() => selectedQuestion(item.question)}
            className="p-4 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer transition duration-200 text-gray-700"
          >
            {item.question}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmptyState
