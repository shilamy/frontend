'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Login from "../login/Login"
import { Alert } from "@/components/ui/alert"

export const RegisterForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState<string | null>(null)

    const onSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        try{
            const res = await fetch('/api/register',{
                method: 'POST',
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(res.ok){
                //Redirecting to the login page
                Login()
            }
        } catch (error: any){
            setError(error?.message)
            
        }
    }
    return(
        <form onSubmit={onSubmit} className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="email">Email</label>
                <Input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email" 
                type="email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="password">Password</label>
                <Input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"/>
                </div>
                {error && <Alert>{error} </Alert>}
            <div className="w-full">
            <Button className="w-full" size={'lg'}>Register</Button>
            </div>
        </form>
    );

}