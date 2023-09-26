'use client';
import User from "@/components/User";
import Bottonbar from "@/components/bottonbar";
import Navbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/system";
import Landing from "@/components/landing";
export default function Page() {
  return (
    <NextUIProvider>
     <div className="h-screen md:block hidden">
      <Landing />
      </div>
      <div className="max-h-screen overflow-hidden bg-white  block md:hidden">
      <Navbar />
      <User />
      <Bottonbar />
    </div>
  </NextUIProvider>
  );
}
