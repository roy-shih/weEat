'use client';
import Home from "@/components/Home";
import Bottonbar from "@/components/bottonbar";
import Navbar from "@/components/navbar";
import {NextUIProvider} from "@nextui-org/system";

export default function Page() {
  return (
    <NextUIProvider>
      <div className="h-screen">
      <Navbar />
      <Home />
      <Bottonbar />
    </div>
  </NextUIProvider>
  );
}
