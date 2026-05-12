function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
    var textArea = document.getElementById("userText");
    var fancy = document.getElementById("fancy");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    var textArea = document.getElementById("userText");
    var text = textArea.value.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[words.length - 1] !== "") {
            words[words.length - 1] = words[words.length - 1] + "-MOO";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ").trim();
}
