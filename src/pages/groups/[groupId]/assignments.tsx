import { useRouter } from "next/router";

export default function Assignments() {
  const { query } = useRouter();
  const { groupId } = query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Assignments for Group {groupId}</h1>
      <p>Assignment-related details will appear here.</p>
    </div>
  );
}
