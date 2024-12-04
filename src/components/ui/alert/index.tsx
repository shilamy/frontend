type AlertProps ={
    children:React.ReactNode
}

const Alert = ({children}:AlertProps) =>{
return(
    <div className="border-slate-100 border rounded bg-red-300">
        {children}
    </div>
)
}
export {Alert}