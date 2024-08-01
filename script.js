var btn = document.querySelector("#feed");
var clear = document.querySelectorAll("input");
var response = btn.addEventListener("click",function(){
    alert("Thanku! For Feedback, Your response is submmited.");
    clear.forEach(input => input.value = '');
});
