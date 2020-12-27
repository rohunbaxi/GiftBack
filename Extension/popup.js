window.onload= function() {
    var dash = document.getElementById("dashboard");
    var setti = document.getElementById("toSettings");
    var bal = document.getElementById("toBalance");

    if(dash) {
        dash.addEventListener("click", goToDash);
        function goToDash(){
            window.location.href = "https://giftback.me/Dashboard/index.html";
        }
    }

    if(setti) {
        setti.addEventListener("click", goSettings);
        function goSettings(){
            window.location.href = "popupSettings.html";
        }
    }

    if(bal) {
        bal.addEventListener("click", goBalance);
        function goBalance(){
            window.location.href = "popup.html";
        }
    }

}