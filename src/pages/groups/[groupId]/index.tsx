"use client";

import { useRouter } from "next/router";

export default function GroupDetail() {
  const router = useRouter();
  const { groupId } = router.query;

  const tabs = [
    { name: "Group Overview", path: "overview" },
    { name: "Meetings", path: "meetings" },
    { name: "Chats", path: "chats" },
    { name: "Assignments", path: "assignments" },
  ];

  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      <header className="border-b p-4">
        <h1 className="text-xl font-semibold">Group {groupId}</h1>
      </header>

      <nav className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => router.push(`/groups/${groupId}/${tab.path}`)}
            className="px-6 py-4 text-sm font-medium text-blue-600"
          >
            {tab.name}
          </button>
        ))}
      </nav>

      <main className="p-4">
        <p>Select a tab to see more details.</p>
      </main>
    </div>
  );
}
