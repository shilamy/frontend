
import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
  <div>
    <main className="overflow-hidden"> 
      <nav className=" bg-primary">
        <Navbar/>
      </nav>
      <Hero/>
      </main>
  </div>
  );
}
