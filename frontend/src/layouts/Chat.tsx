import React, { useState } from "react";
import ExamplePrompt from "../components/ExamplePrompt";
import { ExamplePrompts, ExampleChatEntries } from "../constants";
import send from '../assets/send.svg';
import SubscribePopup from "../components/SubscribePopup";
import { ChatMessage } from "../components/ChatMessage";

interface ChatProps {
  newChat: "new" | "old";
}

const Chat = ({ newChat }: ChatProps) => {
  const [showPopup, setShowPopup] = useState(true);
  const [prompt, setPrompt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prompt);

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      };

      const response = await fetch("/chat/ask", requestOptions);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const { message } = await response.json();

      // FULL APP WOULD SET STATE HERE FOR MESSAGE/ANSWER RECEIVED FROM OPENAI API
      // and display it...

    } catch (error) {
      console.error(error, "error");
    }
  };

  return (
    <main className="relative h-full w-full justify-between flex flex-col overflow-hidden items-stretch flex-1 bg-[#F5F4F9]">
      {newChat === "new" ? (
        <div className="flex flex-col overflow-y-auto">
          <h2 className="font-bold text-[26px] leading-[34px] my-6 ml-6">Example of types of question to ask RealAssist</h2>
          <div className="flex flex-wrap flex-row gap-y-3 ml-5 mb-9">
            {ExamplePrompts.map((prompt, index) => (
              <ExamplePrompt text={prompt} key={index} />
            ))}
          </div>
          <div className="flex justify-end pr-7">
            {showPopup && <SubscribePopup handleClose={handleClose} />}
          </div>
          
        </div>
      ) : (
        <div className="flex flex-col overflow-y-auto mt-9">
          {ExampleChatEntries.map((entry, index) => (
            <ChatMessage role={entry.role} message={entry.message} key={index} timestamp={entry.timestamp} />
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="relative flex items-center justify-center py-1 px-8 my-3">
        <textarea value={prompt} onChange={handleChange} className="rounded-[13px] w-full p-2.5 text-sm" rows={1} placeholder="Ask RealAssist Something" />
        <button className="rounded-full bg-[#304CEF] px-2 py-2 ml-3" type="submit"><img src={send} /></button>
      </form>
    </main>
  );
};

export default Chat;
