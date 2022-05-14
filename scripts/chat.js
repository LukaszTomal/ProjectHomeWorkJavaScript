var coll = document.getElementsByClassName("container");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

function firstBotMessage() {
    let firstMessage = "Dzień dobry, jestem wirtualnym przewodnikiem po zabytkach Krakowa. Jak mogę pomóc?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</p>';
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();


function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 5000)
}

function sendButton() {
    getResponse();
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});