'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const RegisterForm = () =>{
    const onSubmit = (e:React.FormEvent) => {
 
        e.preventDefault()
        console.log('Register!')
    }
    return(
        <form onSubmit={onSubmit} className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="email">Email</label>
                <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="password">Password</label>
                <Input type="password" id="password" placeholder="Password" />
                </div>
            <div className="w-full">
            <Button className="w-full" size={'lg'}>Register</Button>
            </div>
        </form>
    );

}