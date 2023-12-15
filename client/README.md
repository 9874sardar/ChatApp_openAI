# ChatApp_openAI
creating a chat app with node , react and open AI's API which will automate and give suggestions and reply

*-------------------------------------------------*
SCSS: Syntactically Awesome Style Sheet SCSS (Sassy CSS) is a preprocessor scripting language that is a superset of CSS. It provides additional features and functionalities that are not available in regular CSS. SCSS syntax is very similar to CSS, but it allows for the use of variables, nesting, mixins, and other programming constructs. SCSS has a file extension of .scss.

*-------------------------------------------------*
vite doesnt ignores env file . soo we need to use .env.local to ignore the local file to be uploaded into github

*-------------------------------------------------*
VITE_BASE_URL=http://localhost:1337
Above is the localhost where we will have our backend running

*-------------------------------------------------*
"@types/node" -  we are using this to minimize the file directoryt . With the help of this package we will automatically start the file from the src directory path . 
we need to write the following extendtion to add it in our project - 
export default defineConfig({
  \\  plugins: [react()],
  * resolve: {
  *  alias: [{ find:"tariq", replacement: path.resolve(__dirname,"src")}]
  *}
})
 ** it will search for tariq in the find:"tariq" and will replace the path to the source file directly ** 

 need to add a jsconfig.json file 
 {
    "compilerOptions": {
        "paths": {
            "tariq/*" : ["./src/*"]
        }
    }
}

*-------------------------------------------------*

Blob URL || Object URL . why its used - It is used for the security of your privacy when we try to upload an image from our local machine .

what is it - it is a encoded string type method , it wont upload the direct path and will return a encoded string after uploading .
soo that server will not access our local storage with that image path.

*-------------------------------------------------*

import Dropzone from "react-dropzone";

it basically accepts an image from the UI where we can upload or drag and drop the image to the webpage

*-------------------------------------------------*

 const [trigger] = usePostAiTextMutation();

    trigger is the function that will trigger an actual call we need . 

    we will be able to trigger that call in our handlesubmit function 

     ------------

         trigger(form);

         with the help of trigger we are sending the form data to openai which is present in api . we are sending the payload to the url and in the body we have the form data


    Redux toolkit  - https://redux-toolkit.js.org/rtk-query/overview

    *-------------------------------------------------*

    