const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler=document.querySelector(".chatbot-toggler");
const chatbotCloseBtn=document.querySelector(".close-btn");

let userMessage;
const API_KEY="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";
const inputInitHeight=chatInput.scrollHeight;

const createChatLi= (message, classname)=>{
    const chatLi=document.createElement("li");
    chatLi.classList.add("chat",classname);
    let chatContent=classname==="outgoing"? `<p></p>`:`                  <span class="material-symbols-outlined">&#129302</span><p></p>`
    chatLi.innerHTML=chatContent;
    chatLi.querySelector("p").textContent=message;
    return chatLi;
}

const generateResponse=(incomingChatLi)=>{
    const API_URL="https://api.openai.com/v1/chat/completions";
    const messageElement= incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }]
        })
      };
      
    //send post request to api to get response
    fetch(API_URL,requestOptions).then(res=> res.json()).then(data=>{
        messageElement.textContent=data.choices[0].message.content;
    }).catch((error)=>{
        messageElement.classList.add("error");
        messageElement.textContent="Oops! Something went wrong. Please try again";
    }).finally(()=>chatbox.scrollTo(0,chatbox.scrollHeight)); 
}
const handleChat=()=>{
    userMessage=chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value="";
    chatInput.style.height=`${inputInitHeight}px`;
   
    //append the user message to chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);

    setTimeout(()=>{
        //display thinking message while waiting for the response
        const incomingChatLi =createChatLi("Thinking...","incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0,chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    },600);


}

chatInput.addEventListener("input",()=>{
    //adjust the height of the input textarea based on its content
    chatInput.style.height=`${inputInitHeight}px`;
    chatInput.style.height=`${chatInput.scrollHeight}px`
});

chatInput.addEventListener("keydown",(e)=>{
    //if enter key is pressed without shift key and the window width is greater than 800px,handle the chat
    if(e.key==="Enter" && !e.shiftKey && window.innerWidth>800){
        e.preventDefault();
        handleChat();
    }
})


sendChatBtn.addEventListener("click",handleChat);
chatbotCloseBtn.addEventListener("click",()=>document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click",()=>document.body.classList.toggle("show-chatbot"));