import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Meetings() {
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
      <h1 className="text-2xl font-bold">Meetings for Group {groupId}</h1>
      <p>Here you can manage group meetings.</p>
    </div>
    </div>
  );
}
