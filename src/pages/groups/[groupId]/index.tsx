"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppSidebar } from "@/components/AppSidebar"
import { ArrowLeft, Users } from 'lucide-react'

export default function GroupDetail() {
  const [activeTab, setActiveTab] = useState("overview")

  const groupInfo = {
    name: "Team Alpha",
    avatar: "/placeholder.svg",
    description: "Hi, this team was created with the purpose of studying maths and economics, we will learn and share ideas together.",
    createdOn: "28/11/2024",
    createdBy: "@josephine",
    purpose: "Mathematics and economics",
    admin: "Josephine Mike",
    meetingTime: "Every Friday an Wednesday by 8pm"
  }

  const members = [
    { name: "Aisha Yusuf", avatar: "/placeholder.svg" },
    { name: "Michael Gaby", avatar: "/placeholder.svg" }
  ]

  return (
    <div className="min-h-screen pb-16 bg-[#FFFDF9]">
      <header className="border-b p-4 bg-[#005397] text-white">
        <div className="flex items-center gap-2">
          <Link href="/groups" className="text-white flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Group overview
          </Link>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          {["overview", "meetings", "chats", "assignments"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="rounded-none border-b-2 border-transparent px-4 py-2 capitalize data-[state=active]:border-[#005397] data-[state=active]:text-[#005397]"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="p-4 space-y-6">
          <Card className="p-4 bg-white">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={groupInfo.avatar} />
                  <AvatarFallback>{groupInfo.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">{groupInfo.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {groupInfo.description}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Member
              </Button>
            </div>
          </Card>

          <Card className="bg-[#0A2647] text-white">
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-semibold">Group Information</h3>
              <p className="text-sm opacity-80">
                This group was created on {groupInfo.createdOn} by {groupInfo.createdBy}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Group purpose</h4>
                  <p className="text-sm opacity-80">{groupInfo.purpose}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Group Admin</h4>
                  <p className="text-sm opacity-80">{groupInfo.admin}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Meeting time</h4>
                  <p className="text-sm opacity-80">{groupInfo.meetingTime}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Group members</h3>
            <div className="space-y-3">
              {members.map((member) => (
                <div key={member.name} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">Member</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-[#005397] border-[#005397]">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="meetings">
          <div className="p-4">
            <Link href="/groups/[id]/meetings" className="text-[#005397]">
              View all meetings
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="chats">
          <div className="p-4">
            <Link href="/groups/[id]/chats" className="text-[#005397]">
              View all chats
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="assignments">
          <div className="p-4">
            <Link href="/groups/[id]/assignments" className="text-[#005397]">
              View all assignments
            </Link>
          </div>
        </TabsContent>
      </Tabs>

      <AppSidebar/>
    </div>
  )
}

