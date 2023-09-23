export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  title: "WeEat",
  description: "WeEat",
};
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// import { AppContext } from "@/context/counter.context";
// import { useState } from "react";

export default function RootLayout({ children }) {
  // const [message, setMessage] = useState({
  //   userInformation: {
  //     role: "User",
  //   },
  // });
  return (
   
    <html lang="en">
      <body className={inter.className}>
      {/* <AppContext.Provider
        value={{
          message,
          setMessage,
        }}

      > */}

        {children}
        {/* </AppContext.Provider> */}
      </body>
    </html>
   
  );
}
