"use client"

import {Home, BookOpen, FolderOpen, Users, Plus } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export function AppSidebar() {
  const pathname = usePathname()

  return (
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white">
      <nav className="flex justify-around p-2">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center p-2 text-xs",
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/study/studyplan"
          className={cn(
            "flex flex-col items-center p-2 text-xs",
            pathname === "/study/studyplan" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <BookOpen className="w-5 h-5" />
          <span>Study plan</span>
        </Link>
        <button className="flex flex-col items-center p-2">
          <div className="rounded-full bg-primary p-4">
            <Plus className="w-5 h-5 text-primary-foreground" />
          </div>
        </button>
        <Link
          href="/resources/resources"
          className={cn(
            "flex flex-col items-center p-2 text-xs",
            pathname === "/resources/resources" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <FolderOpen className="w-5 h-5" />
          <span>Resources</span>
        </Link>
        <Link
          href="/groups"
          className={cn(
            "flex flex-col items-center p-2 text-xs",
            pathname === "/groups" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Users className="w-5 h-5" />
          <span>Groups</span>
        </Link>
      </nav>
    </div>
  )
}

