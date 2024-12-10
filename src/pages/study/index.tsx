import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Calendar } from 'lucide-react'
import { AppSidebar } from "@/components/AppSidebar"
import React from "react"

export default function Studyplan() {
  return (
    <div className="min-h-screen pb-16">
      <header className="border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Study Plan</h1>
        </div>
      </header>

      <main className="p-4">
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
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

