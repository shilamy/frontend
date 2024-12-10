import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
export default function Assignments() {
  const { query } = useRouter();
  const { groupId } = query;

  return (
    <div className="min-h-screen pb-16 bg-[#FFFDF9]">
      <header className="border-b p-4 bg-[#005397] text-white">
        <div>
          <Navbar/>
        </div>
      </header>
    <div className="p-6">
      <h1 className="text-2xl font-bold">Assignments for Group {groupId}</h1>
      <p>Assignment-related details will appear here.</p>
    </div>
    </div>
  );
}
