function modifyPage(locationElements, priceElements) {
    for (var i = 1; i < priceElements.length; i+=2) {
        originalPrice = priceElements[i].innerHTML
        donationAmount = 1
        totalPrice =  parseInt(originalPrice) + donationAmount

        locationElements[i].innerHTML = `
        <div class="popUp">
            <div class="email" onclick="expand(this)">
                <div class="from">
                    <div class="from-contents">
                        <div class="name">$${totalPrice}</div>
                    </div>
                </div>
                <div class="to">
                    <div class="to-contents">
                        <div class="top">
                            <div class="name-large">$${totalPrice}</div>
                            <div class="x-touch">
                                <div class="x" onclick="contract()">&#10006;</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="row">
                                <div class="link">Original: $${originalPrice}</div>
                            </div>
                            <div class="row">
                                <div class="link">You Donate:$${donationAmount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
    }
}


if (window.location.href.includes("amazon")) {
    var style = document.createElement('style');
    style.innerHTML = `
        .popUp {
            align-items: center;
            display: flex;
            height: 100px;
            justify-content: center;
            width: 105px;
            text-align: center;
            font-family: 'Segoe UI', Arial, serif;
        }
        
        .email {
            border-radius: 16px;
            height: 32px;
            overflow: hidden;
            position: relative;
            width: 100px;
            -webkit-tap-highlight-color: transparent;
            background-color: #1f690a;
            transition: width 300ms cubic-bezier(0.4, 0.0, 0.2, 1), height 300ms cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0.0, 0.2, 1), border-radius 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
            z-index: 1;
        }
        
        .email:not(.expand) {
            cursor: pointer;
        }
        
        .email:not(.expand):hover {
            background: #C2C0C2;
        }
        
        .from {
            position: absolute;
            padding-left: 25px;
            transition: opacity 200ms 100ms cubic-bezier(0.0, 0.0, 0.2, 1);
        }
        
        .from-contents {
            display: flex;
            flex-direction: row;
            transform-origin: 0 0;
            transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
            background-color: #98251e;
            color: white;
        }
        
        .to {
            opacity: 0;
            position: absolute;
            transition: opacity 100ms cubic-bezier(0.4, 0.0, 1, 1);
        }
        
        .to-contents {
            transform: scale(.55);
            transform-origin: 0 0;
            transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .name {
            font-size: 14px;
            line-height: 32px;
            margin-left: 10px;
            margin-right: 10px;
        }
        
        .top {
            background: #98251e;
            display: flex;
            flex-direction: row;
            height: 50px;
            transition: height 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
            width: 105px;
        }
        
        .name-large {
            color: #efd8ef;
            font-size: 16px;
            line-height: 70px;
            margin-left: 10px;
            margin-top: -8px;
        }
        
        .x-touch {
            align-items: center;
            align-self: center;
            cursor: pointer;
            display: flex;
            height: 50px;
            justify-content: center;
            margin-left: auto;
            width: 50px;
        }
        
        .x {
            background: #6dabe4;
            border-radius: 10px;
            height: 20px;
            position: relative;
            width: 20px;
            text-align: center;
        }
        
        .x-touch:hover .x {
            background: #d4ebff;
        }
        
        .bottom {
            background: #FFF;
            color: #444247;
            font-size: 14px;
            height: 100px;
            padding-top: 5px;
            width: 105px;
        }
        
        .row {
            align-items: center;
            display: flex;
            flex-direction: row;
            height: 45px;
        }
        
        .email.expand {
            border-radius: 6px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.10), 0 6px 6px rgba(0, 0, 0, 0.16);
            height: 150px;
            width: 125px;
        }
        
        .expand .from {
            opacity: 0;
            transition: opacity 100ms cubic-bezier(0.4, 0.0, 1, 1);
        }
        
        .expand .from-contents {
            transform: scale(1.91);
        }
        
        .expand .to {
            opacity: 1;
            transition: opacity 200ms 100ms cubic-bezier(0.0, 0.0, 0.2, 1);
        }
        
        .expand .to-contents {
            transform: scale(1);
        }
        
        .hiddenWrap {
            display: none;
        }
  `;
    document.head.appendChild(style);



    var popUpScript = document.createElement('script');

    popUpScript.innerHTML = `
    function expand(obj) {
        obj.classList.add('expand')
    }

    function contract() {
        var divList = document.getElementsByTagName("div")
        for (var i = 0; i < divList.length; i++) {
            if (divList[i].className === "email expand") {
              divList[i].className = "email"
         }
     }
    event.stopPropagation();
    }
  `;

    document.head.appendChild(popUpScript)



    var c = 1

    var amazonPriceVal = document.getElementsByClassName("a-price-whole");
    var amazonList = document.getElementsByClassName("a-section a-spacing-none a-spacing-top-small");

    var itemPrices = document.getElementsByClassName("priceBlockBuyingPriceString");
    var cartPrices = document.getElementsByClassName("sc-product-price");
    var subtotal = document.getElementsByClassName("sc-price");
    var gbtotal = document.getElementsByClassName("a-spacing-mini");



    // main price in gallery add hover to this
    modifyPage(amazonList, amazonPriceVal)

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

}
// else {
//     var myClasses = document.getElementsByClassName("css-2vqe5n esdkp3p0");
//     for (var i = 0; i < myClasses.length; i++) {
//         myClasses[i].innerHTML = 1;
//     }
// }
console.log("The URL of this page is: " + window.location.href)