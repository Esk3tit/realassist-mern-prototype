import { useState } from "react";
import Chat from "./layouts/Chat";
import ChatHistory from "./layouts/ChatHistory";
import Navbar from "./layouts/Navbar";

function App() {
  const [chatState, setChatState] = useState<"new" | "old">("new");

  return (
    <div className="overflow-hidden w-full h-full relative flex flex-row">
      <ChatHistory handleChatState={setChatState}/>
      <div className="flex h-screen flex-1 flex-col md:pl-[260px]">
        <Navbar />
        <Chat newChat={chatState} />
      </div>
    </div>
  );
}

export default App;
