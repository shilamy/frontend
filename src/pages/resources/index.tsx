import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload } from 'lucide-react'
import { AppSidebar } from "@/components/AppSidebar"
import Link from 'next/link'
import { Resource } from '@/types'



export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);

  return (
    <div className="min-h-screen pb-16 bg-[#FFFDF9]">
      <header className="border-b p-4 bg-[#005397] text-white">
        <div>
          <Navbar/> 
        </div>
      </header>

      <main className="p-4">
        {resources.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-sm text-muted-foreground">
                You have not uploaded any resources yet. Click the Upload button below to get started.
              </p>
              <Link href="/resources/upload">
                <Button className="mt-6 bg-[#005397] hover:bg-[#004380] text-white rounded-full">Upload</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Resources</h2>
              <Link href="/resources/upload">
                <Button className="bg-[#005397] hover:bg-[#004380] text-white">
                  Upload New Resource
                </Button>
              </Link>
            </div>
            
            {resources.map((resource) => (
              <Card key={resource.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.category}</p>
                    {resource.description && (
                      <p className="text-sm mt-2">{resource.description}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Uploaded on {new Date(resource.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(resource.fileUrl, '_blank')}
                    className="text-[#005397] border-[#005397]"
                  >
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <AppSidebar/>
    </div>
  )
}