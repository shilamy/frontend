
import { Hero, Navbar,  } from "@/components";
import { AppSidebar } from "@/components/AppSidebar";



export default function Home() {
  return (
  <div>
    
    
    
    <main className="overflow-hidden">
    
    <nav className=" bg-primary " >
      <Navbar/>
    </nav>
    
    <AppSidebar />
    <Hero/>
    
    
   
   

      </main>
      
  </div>
  );
}
