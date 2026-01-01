var namei = document.getElementById("iname");
var submit = document.getElementById("enter");

submit.addEventListener("click", function () {
    // Accept empty input and default to 'Guest' to avoid blocking the flow
    if (namei.value === "") {
        localStorage.setItem("name", "Guest");
    } else {
        localStorage.setItem("name", namei.value);
    }
    window.top.location.href = "/";
});