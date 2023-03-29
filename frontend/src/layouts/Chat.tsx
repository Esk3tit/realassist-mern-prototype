import React, { useState } from "react";
import ExamplePrompt from "../components/ExamplePrompt";
import { ExamplePrompts } from "../constants";
import send from '../assets/send.svg';
import SubscribePopup from "../components/SubscribePopup";

interface ChatProps {
  newChat: boolean;
}

const Chat = ({ newChat }: ChatProps) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1 bg-[#F5F4F9] grow">
      {newChat ? (
        <div className="flex flex-col">
          <h2 className="font-bold text-[26px] leading-[34px] my-6 ml-6">Example of types of question to ask RealAssist</h2>
          <div className="flex flex-wrap flex-row gap-y-3">
            {ExamplePrompts.map((prompt) => (
              <ExamplePrompt text={prompt} />
            ))}
          </div>
          {showPopup && <SubscribePopup handleClose={handleClose} />}
        </div>
      ) : (
        <p></p>
      )}
      <div className="relative flex items-center justify-center py-1 px-8 my-3">
        <textarea className="rounded-[13px] w-full p-2.5 text-sm" rows={1} placeholder="Ask RealAssist Something" />
        <button className="rounded-full bg-[#304CEF] px-2 py-2 ml-3"><img src={send} /></button>
      </div>
    </main>
  );
};

export default Chat;
