"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface QuestionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuestionModal({ isOpen, onClose }: QuestionModalProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // TO DO: implement the logic to submit the question
    console.log("Submitted question:", { title, content })
    setTitle("")
    setContent("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ask a Question</DialogTitle>
          <DialogDescription>
            What would you like to ask the EduConnect community?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Question Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a brief title for your question"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Question Details</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Provide more details about your question"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

