import "../../styles/globals.css"
import { Inter } from "next/font/google";
import ClientProvider from "../components/ClientProvider";
import Login from "../components/Login";
import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
// import Menu from "@/components/Menu";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "SecurityGPT",
//   description: "AI for Cyber Security and IT help",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="hidden bg-[#202123] h-screen overflow-y-auto md:inline md:w-[260px]">
                <SideBar />
              </div>

              <ClientProvider />
              <div className="bg-black flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
