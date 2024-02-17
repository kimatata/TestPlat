import Sidebar from "./sidebar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex border-t-1 min-h-screen">
        <Sidebar />
        <div className="flex">
          <div className="flex-grow bg-white rounded-lg">{children}</div>
        </div>
      </div>
    </>
  );
}