import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Calendar } from 'lucide-react'
import { AppSidebar } from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"

export default function Studyplan() {
  return (
    <div className="min-h-screen pb-16 bg-[#FFFDF9]">
      <header className="border-b p-4 bg-[#005397] text-white">
        <div>
          <Navbar/>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2 gap-2 rounded-lg bg-dimwhite p-1">
            <TabsTrigger 
              value="upcoming" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md px-3 py-2 font-semibold transition-all"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md px-3 py-2 font-semibold transition-all"
            >
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4 mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    No upcoming study sessions scheduled
                  </p>
                  <Button className="mt-4">Schedule Session</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed">
            {/* Similar empty state for completed sessions */}
          </TabsContent>
        </Tabs>
      </main>

      <AppSidebar/>
    </div>
  )
}

