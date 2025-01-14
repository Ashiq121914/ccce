"use client";

import dynamic from "next/dynamic";

// importing the code editor dynamically
const CodeEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="h-12 flex">Navbar</div>
      <div className="w-screen flex grow ">
        <CodeEditor />
      </div>
    </div>
  );
}
