import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 bg-background min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};