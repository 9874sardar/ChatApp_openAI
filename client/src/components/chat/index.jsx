import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "tariq/components/customHeader"
import StandardMessageForm from "tariq/components/customMessageForms/StandardMessageForm"
import Ai from "../customMessageForms/Ai";
import AiCode from "../customMessageForms/AiCode";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "sardar",
    "1234"
  )
  return <div  style={{ flexBasis:"100%"}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow 
      {...chatProps}
      style={{height: "100vh"}}
      renderChatHeader={(chat) =><Header chat={chat} /> }
      renderMessageForm={(props) => {
        if(chatProps.chat?.title.startsWith("AiChat_")){
          // console.log("chatprop ",chatProps.chat.last_message.text)
          return <Ai props={props} activeChat={chatProps.chat} />
        }
        if(chatProps.chat?.title.startsWith("AiCode_")){
          // console.log("chatprop ",chatProps.chat.last_message.text)
          return <AiCode props={props} activeChat={chatProps.chat} />
        }

        return (
          <StandardMessageForm props={props} activeChat = {chatProps.chat} />
        )
      }}
    />
    </div>;
};

export default Chat;
