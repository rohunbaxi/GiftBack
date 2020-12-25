if (window.location.href.includes("amazon")) {
    var myClasses = document.getElementsByClassName("a-price-whole");
    for (var i = 0; i < myClasses.length; i++) {
        myClasses[i].innerHTML = 1;
    }
} else {
    var myClasses = document.getElementsByClassName("css-2vqe5n esdkp3p0");
    for (var i = 0; i < myClasses.length; i++) {
        myClasses[i].innerHTML = 1;
    }
}


console.log("The URL of this page is: " + window.location.href)