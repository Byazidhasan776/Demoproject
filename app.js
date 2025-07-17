let tapCount = 0;
function tapSecret() {
    tapCount++;
    if (tapCount >= 5) {
        document.getElementById("admin-login").style.display = "block";
    }
}
function adminLogin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    if (user === "MAHIN-MESS" && pass === "MAHINMESSADMIN99@") {
        alert("Admin Mode Activated");
        // Load admin features
    } else {
        alert("Wrong credentials");
    }
}
window.onload = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js');
    }
    document.getElementById("content").innerText = "Welcome to Mahin Mess";
};