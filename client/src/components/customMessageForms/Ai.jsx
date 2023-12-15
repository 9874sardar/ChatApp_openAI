import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAiTextMutation } from "tariq/state/api";

const Ai = ({ props, activeChat }) => {

  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [trigger] = usePostAiTextMutation();

  // console.log("props ",props);
  // console.log("activeChat ",activeChat);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    const attachmnt = attachment ? [{blob : attachment, file : attachment.name}] : [];
    const form = {
        attachments : attachmnt,
        created: date,
        sender_username: props.username,
        text: message,
        activeChatId: activeChat.id,
    }
    // to check the documentation link - https://rest.chatengine.io/
    
    
    props.onSubmit(form);
    trigger(form);
    setMessage("");
    setAttachment("");
  };
  
  const handleChange = (e) => setMessage(e.target.value) ;
  
  return (
    <MessageFormUI 
    setAttachment={setAttachment}
    message={message}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />
  )
}

export default Ai
