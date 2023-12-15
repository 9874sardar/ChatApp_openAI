import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAiCodeMutation } from "tariq/state/api";

const AiCode = ({ props, activeChat }) => {

  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [triggerCode] = usePostAiCodeMutation();

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
    triggerCode(form);
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

export default AiCode
