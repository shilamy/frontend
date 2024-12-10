"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AppSidebar } from "@/components/AppSidebar"
import {groups} from "@/constants"
import { GroupMember } from "@/types"
import Navbar from "@/components/Navbar"


export default function Groups() {
  const [filter, setFilter] = useState<"all" | "my">('all')
  
  
const filteredGroups = filter === 'my' 
? groups.filter(group => group.isMember)
: groups

  

  return (
    <div className="min-h-screen pb-16 bg-[#FFFDF9]">
      <header className="border-b p-4 bg-[#005397] text-white">
        <div>
          <Navbar/>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="groups" className="space-y-4">
          <TabsList className="bg-secondary text-white w-full grid grid-cols-2">
            <TabsTrigger value="groups" className="bg-dimWhite">Groups</TabsTrigger>
            <TabsTrigger value="forums" className="bg-dimWhite">Subject Forums</TabsTrigger>
          </TabsList>

          <Select value={filter} onValueChange={(value: "all" | "my") => setFilter(value)}>
            <SelectTrigger className="w-50 bg-[#0A2647] text-white">
              <SelectValue placeholder="All groups" />
            </SelectTrigger>
            <SelectContent className="bg-[#0A2647] text-white">
              <SelectItem value="all" >All groups</SelectItem>
              <SelectItem value="my">My groups</SelectItem>
            </SelectContent>
          </Select>

          <TabsContent value="groups" className="space-y-4">
            {filteredGroups.map((group) => (
              <Card key={group.id} className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={group.avatar} />
                    <AvatarFallback>{group.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <Link 
                        href={`/groups/${group.id}`} 
                        className="font-semibold hover:text-[#005397]"
                      >
                        {group.name}
                      </Link>
                      {group.isMember ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-[#005397] border-[#005397]"
                        >
                          Member
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          className="bg-[#005397] hover:bg-[#004380] text-white"
                        >
                          Join
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {group.description}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <div className="flex -space-x-2">
                        {group.members.slice(0, 3).map((member: GroupMember, i) => (
                          <Avatar key={i} className="h-6 w-6 border-2 border-background">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {group.memberCount} {group.memberCount === 1 ? 'member' : 'members'} left
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="forums" className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#00D5A0] rounded-lg flex items-center justify-center text-white font-bold">
                  Math
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Mathematics Forum</h3>
                  <p className="text-sm text-muted-foreground">
                    Dive into the world of numbers, shapes, and equations!
                  </p>
                  <Button className="mt-2 w-full bg-[#005397] hover:bg-[#004380] text-white">
                    Explore
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#00B2D5] rounded-lg flex items-center justify-center text-white font-bold">
                  Phy
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Physics Forum</h3>
                  <p className="text-sm text-muted-foreground">
                    Welcome to the ultimate forum for physics enthusiasts!
                  </p>
                  <Button className="mt-2 w-full bg-[#005397] hover:bg-[#004380] text-white">
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <AppSidebar />
    </div>
  )
}

