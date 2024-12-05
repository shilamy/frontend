"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockQuestions } from "@/constants";

export default function Home() {
  const [questions, setQuestions] = useState(mockQuestions);

  const addQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: prevQuestions.length + 1,
        title: "New Question",
        content: "This is a newly added question.",
        author: "New User",
        avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=NewUser",
      },
    ]);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/people03" alt="User" />
          <AvatarFallback>Alice</AvatarFallback>
        </Avatar>
        <Input 
          placeholder="Want to ask a question, or share your thoughts?"
          className="rounded-full bg-muted w-80 text-sm px-3 py-2"
        />
        <button 
        onClick={addQuestion} 
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Add Question
      </button>
      </div>
      
      <div className="space-y-4 ">
        {questions.map((question) => (
          <Card key={question.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={question.avatar} alt={question.author} />
                  <AvatarFallback>{question.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{question.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{question.author}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{question.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
