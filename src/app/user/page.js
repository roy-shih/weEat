'use client';
import User from "@/components/User";
import Bottonbar from "@/components/bottonbar";
import Navbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/system";

export default function Page() {
  return (
    <NextUIProvider>
      <div className="h-screen">
      <Navbar />
      <User />
      <Bottonbar />
    </div>
  </NextUIProvider>
  );
}
