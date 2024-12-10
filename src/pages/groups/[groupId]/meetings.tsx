import { useRouter } from "next/router";

export default function Meetings() {
  const { query } = useRouter();
  const { groupId } = query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Meetings for Group {groupId}</h1>
      <p>Here you can manage group meetings.</p>
    </div>
  );
}
