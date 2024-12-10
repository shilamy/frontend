import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
export default function Chats() {
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
      <h1 className="text-2xl font-bold">Chats for Group {groupId}</h1>
      <p>Group chat content will appear here.</p>
    </div>
    </div>
  );
}
