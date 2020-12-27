
if (window.location.href.includes("amazon")) {
    var c = 1
    var myClasses = document.getElementsByClassName("a-price-whole");
    var itemPrices = document.getElementsByClassName("priceBlockBuyingPriceString");
    var myClasses = document.getElementsByClassName("a-price-whole");
    var cartPrices = document.getElementsByClassName("sc-product-price");
    var subtotal = document.getElementsByClassName("sc-price");
    var gbtotal = document.getElementsByClassName("a-spacing-mini");

    for (var i = 0; i < myClasses.length; i++) {
        myClasses[i].innerHTML = c+parseInt(myClasses[i].innerHTML);
    }

    for (var i = 0; i < itemPrices.length; i++) {
        price = itemPrices[i].innerHTML.split("&nbsp;")
        itemPrices[i].innerHTML = "CDN$ "+(parseFloat(price[1])+c)
        document.getElementById("price_inside_buybox").innerHTML = itemPrices[i].innerHTML
        localStorage.setItem("price", itemPrices[i].innerHTML);
    }

    for (var i = 0; i < cartPrices.length; i++) {
        cartPrices[i].innerHTML = localStorage.getItem("price");
    }

    for (var i = 0; i < subtotal.length; i++) {
        subtotal[i].innerHTML = localStorage.getItem("price");
    }

    for (var i = 0; i < gbtotal.length; i++) {
        if (gbtotal[i].innerHTML.includes("Prime")) {
            gbtotal[i].innerHTML = "Your GiftBack Wallet will increase by $1.00 for this purchase."
        }
    }

} else {
    var myClasses = document.getElementsByClassName("css-2vqe5n esdkp3p0");
    for (var i = 0; i < myClasses.length; i++) {
        myClasses[i].innerHTML = 1;
    }
}


console.log("The URL of this page is: " + window.location.href)