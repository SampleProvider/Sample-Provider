let restartButton = document.createElement("button");
document.body.appendChild(restartButton);

restartButton.innerText = "Restart";
restartButton.onclick = function() {
    location.reload();
};