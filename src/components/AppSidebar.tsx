"use client"

import { useState } from 'react'
import { Home, BookOpen, Monitor, Users, Plus, User } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { QuestionModal } from "@/pages/dashboard/questions"

export function AppSidebar() {
  const pathname = usePathname()
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white">
        <div className="grid h-16 grid-cols-5 items-center">
          <Link href="/" className="flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-12",
                pathname === "/" && "text-primary"
              )}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <Link href="/study/studyplan" className="flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-12",
                pathname === "/studyplan" && "text-primary"
              )}
            >
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Study Plan</span>
            </Button>
          </Link>
          <Link href="/resources/resources" className="flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-12",
                pathname === "/resources/resources" && "text-primary"
              )}
            >
              <Monitor className="h-5 w-5" />
              <span className="sr-only">Resources</span>
            </Button>
          </Link>
          <Link href="/groups/groups" className="flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-12",
                pathname === "/groups/groups" && "text-primary"
              )}
            >
              <Users className="h-5 w-5" />
              <span className="sr-only">Groups</span>
            </Button>
          </Link>
          <Link href="/profile/profile" className="flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-12",
                pathname === "/profile" && "text-primary"
              )}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
        <Button
          size="icon"
          className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
          onClick={() => setIsQuestionModalOpen(true)}
        >
          <Plus className="h-6 w-6" />
          <span className="sr-only">Ask a Question</span>
        </Button>
      </div>
      <QuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
      />
    </>
  )
}

