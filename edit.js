var player1;
var player2;
function login() {
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    window.localStorage.setItem("player1", player1);
    window.localStorage.setItem("player2", player2);
}