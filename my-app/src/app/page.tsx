"use client";
import "../../styles/globals.css"
import "./page.css"
import ChatInput from "../components/ChatInput";
import Menu from '../components/Menu'
import SideBar from "../components/SideBar";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div>
      {isSidebarOpen && (
        <div className="z-10 md:hidden absolute bg-[#202123] w-3/4 h-[100dvh]">
          <SideBar onChange={setIsSidebarOpen} />
        </div>
      )}
      <div className="inline md:hidden">
        <Menu onChange={setIsSidebarOpen} />
      </div>
      <div className="text-gray-100 flex flex-col items-center justify-start lg:justify-center h-[calc(100dvh-37.33px-72px)] md:h-[calc(100vh-72.67px)] px-2 overflow-auto pb-10">
        <h1 className="text-5xl font-bold m-20 lg:mt-0">SecurityGPT</h1>
        <div className="flex space-x-0 space-y-10 text-center flex-col lg:flex-row lg:space-x-3 lg:space-y-0">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-3">
              <p className="infoText">{'"Explain something to me"'}</p>
              <p className="infoText">
                {'"How Can Quantum Computing Impact the Future of Cryptography?"'}
              </p>
              <p className="infoText">{'"What is a SQL Injection Attack?"'}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-3">
              <p className="infoText">Problem-Solving and Logical Reasoning</p>
              <p className="infoText">
              Education and Learning Support
              </p>
              <p className="infoText">
              Code Assistance and Explanation
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-3">
              <p className="infoText">
                May occasionally generate incorrect information
              </p>
              <p className="infoText">
                May occasionally produce harmful instructions or biased content
              </p>
              <p className="infoText">
                Generalist Nature
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ChatInput chatId={""} messages={[undefined]} />
      </div>
    </div>
  );
}
