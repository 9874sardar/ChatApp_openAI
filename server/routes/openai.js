import express from "express"
// import axios from "axios"
import dotenv from "dotenv"
import {openai} from "../index.js"
import axios from "axios";

dotenv.config();
const router = express.Router();

router.post("/text", async (req,res) =>{
    try {
        const file = req.body;
        // const {tex̥t , activeChatId} = file;
        const txt = file.text;
        const actvChatId = file.activeChatId;
        console.log("text ", file);

        //migartion from old openai to new 1 gpt-3.5 to gpt-4
        // https://github.com/openai/openai-node/discussions/217

        const response = await openai.chat.completions.create({
          "model":"gpt-3.5-turbo",
          "messages":[
             {
                "role":"user",
                "content": txt
             }
          ]
          });

          console.log("response : ",response.choices[0].message )

          await axios.post(
            `https://api.chatengine.io/chats/${actvChatId}/messages/`,
            { text : response.choices[0].message.content},
            {
                        headers: {
                          "Project-ID": process.env.PROJECT_ID,
                          "User-Name": process.env.BOT_USER_NAME,
                          "User-Secret": process.env.BOT_USER_SECRET,
                        },
                    },
          )

        res.status(200).json({text: response.choices[0].message.content});
    } catch (error) {
        console.error("error",error);
        res.status(500).json({error:error.message});
    }
})

export default router;