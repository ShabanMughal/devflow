import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";
import LeftsideBar from "@/components/navigation/LeftSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex ">
        <LeftsideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
      {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;