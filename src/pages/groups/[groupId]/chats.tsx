import { useRouter } from "next/router";

export default function Chats() {
  const { query } = useRouter();
  const { groupId } = query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chats for Group {groupId}</h1>
      <p>Group chat content will appear here.</p>
    </div>
  );
}
