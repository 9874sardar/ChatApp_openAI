import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "tariq/components/customHeader"
import StandardMessageForm from "tariq/components/customMessageForms/StandardMessageForm"

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
        return (
          <StandardMessageForm props={props} activeChat = {chatProps.chat} />
        )
      }}
    />
    </div>;
};

export default Chat;
