
//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment() {
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

function showDetails() {
    var commentAreaContent = document.getElementById("comment-textarea").value;
    var tur = document.getElementById("tur");

    // Append the new comment to the existing content
    tur.innerHTML += "<br><hr>" + commentAreaContent + "<br><div class='comment'><button onclick='showReply()'>Reply</button></div>";

    // Clear the comment area after submitting
    document.getElementById("comment-textarea").value = "";

    // Hide the comment area after submitting
    document.getElementById("comment-area").classList.add("hide");
}

function showReply() {
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

function submitReply() {
    var replyAreaContent = document.getElementById("reply-textarea").value;

    // You can handle the submission of replies as needed

    // Clear the reply area after submitting
    document.getElementById("reply-textarea").value = "";

    // Hide the reply area after submitting
    document.getElementById("reply-area").classList.add("hide");
}