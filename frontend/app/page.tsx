export default async function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="h-12 flex">Navbar</div>
      <div className="w-screen flex grow bg-red-500">CodeEditor</div>
    </div>
  );
}