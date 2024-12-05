"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { DialogHeader } from "./ui/dialog";
import { Textarea } from "./ui/textarea";

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  btnType?: "button" | "submit" | "reset";
  containerStyles?: string;
}

export function QuestionModal({
  isOpen,
  onClose,
  title = "Ask a Question",
  btnType = "submit",
  containerStyles = "",
}: QuestionModalProps) {
  const [modalTitle, setModalTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted question:", { modalTitle, content });
    setModalTitle("");
    setContent("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {/* Modal Content */}
        <DialogContent className={`bg-white rounded-lg shadow-lg p-6 sm:max-w-[400px] ${containerStyles}`}>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              What would you like to ask the EduConnect community?
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Question Title</Label>
                <Input
                  id="title"
                  value={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  placeholder="Enter a brief title for your question"
                  className="border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Question Details</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Provide more details about your question"
                  className="border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
            <Button
              type="button"
              className="px-4 py-2 text-gray-700 bg-red-500 rounded-md hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type={btnType} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Submit
            </Button>
          </div>



          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}
