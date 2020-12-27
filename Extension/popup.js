window.onload= function() {
    var dash = document.getElementById("dashboard");
    var setti = document.getElementById("toSettings");
    var bal = document.getElementById("toBalance");

    var pct = document.getElementById("editPercent");
    var cst = document.getElementById("editConstant");

    if(dash) {
        dash.addEventListener("click", goToDash);
        function goToDash(){
            window.open('https://giftback.me/Dashboard/index.html','_blank');
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

    if(pct) {
        pct.addEventListener("click", editPct);
        function editPct(){
            if (cst.innerHTML=="") {            
                pct.setAttribute("contenteditable", "true")
            }
        }
    }

    if(cst) {
        cst.addEventListener("click", editCst);
        function editCst(){
            if (pct.innerHTML=="") {            
                cst.setAttribute("contenteditable", "true")
            }
        }
    }

}