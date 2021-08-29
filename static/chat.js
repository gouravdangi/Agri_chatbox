// document.getElementById("chatbot_toggle").onclick = function () {
//     // if (document.getElementById("chatbot").classList.contains("collapsed")) {
//     //     document.getElementById("chatbot").classList.remove("collapsed");
//     // }
//     // else {
//     //     document.getElementById("chatbot").classList.add("collapsed");
//     // }
//     document.getElementById("chatbot").classList.toggle("collapsed");
// }
function chatbotToggle() {
    document.getElementById("chatbot").classList.toggle("collapsed");
    $('#chatbot_toggle').toggle()
}


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}


function firstBotMessage() {
    let firstMessage = "Hi, How can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    // document.getElementById("userInput").scrollIntoView(false);
}


firstBotMessage();


let findResponseAndShow = async (input) => {
    let response = await findResponse(input);
    // response = "I am fine";
    let resposnseText = response[0];
    let resposnselink = response[1];
    console.log(resposnselink[0])
    let responseHtml;
    if (resposnselink[0] == "/")
        responseHtml = `<p class = 'botText'><span>${resposnseText}<br><a href="${resposnselink}">here</a></span></p>`;
    else
        responseHtml = `<p class = 'botText'><span>${resposnseText}</span></p>`;
    let waitingHtml = `<p class = 'botText'><span>...</span></p>`
    $(".waiting").remove();
    $("#message-box").append(responseHtml);
    document.getElementById("message-box").scrollTop = document.getElementById(
        "message-box"
    ).scrollHeight;
}


let getResponse = () => {
    let userText = $("#message").val();
    if (userText != "") {
        console.log(userText);
        let userHtml = `<p class = 'userText'><span>${userText}</span></p>`
        console.log(userHtml);
        $("#message").val("");
        $("#message-box").append(userHtml);
        let waitingHtml = `<p class = 'botText waiting'><span>...</span></p>`
        $("#message-box").append(waitingHtml);
        document.getElementById("message-box").scrollTop = document.getElementById(
            "message-box"
        ).scrollHeight;
        findResponseAndShow(userText);
    }

}

$("#message").keypress(async (e) => {
    if (e.key == "Enter") {
        console.log('pressed enter');
        getResponse();
    }
})

$("#chat-icon").click(async (e) => {
    e.preventDefault();
    getResponse();
})


