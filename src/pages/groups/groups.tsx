import { Navbar } from '@/components'
import React from 'react'

const groups = () => {
  return (
    <div>
      <nav className=" bg-primary " >
      <Navbar/>
      </nav>

    <h1 className="text-2xl font-bold">Groups</h1>
    <p className="text-muted-foreground">Connect with your study groups</p>
  </div>
  )
}

export default groups