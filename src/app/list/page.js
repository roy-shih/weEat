'use client';
import Bottonbar from "@/components/bottonbar";
import Navbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/system";
import Landing from "@/components/landing";
import List from "@/components/list";

export default function Page() {
  return (
    <NextUIProvider>
      <div className="h-screen md:block hidden">
      <Landing />
      </div>
      
      <div className="max-h-screen overflow-hidden bg-white  block md:hidden">
      <Navbar />
      <List />
      <div className="h-[100px]"></div>
      <Bottonbar />
    </div>
  </NextUIProvider>
  );
}
