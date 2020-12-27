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
            padding-left: 32px;
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



// function expand(obj) {
//     obj.classList.add('expand')
// }
//
// function contract() {
//     var divList = document.getElementsByTagName("div")
//     for (var i = 0; i < divList.length; i++) {
//         if (divList[i].className === "email expand") {
//             divList[i].className = "email"
//         }
//     }
//     event.stopPropagation();
// }

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

// function modifyPage(elements) {
//     for (var i = 0; i < elements.length; i++) {
//         var tempPrice = elements[i].innerHTML
//         console.log(tempPrice)
//         var tempPopup = document.getElementsByClassName("popUp")[0]
//         elements[i].innerHTML = (nodeToString(createPopUp(tempPrice, tempPopup)))
//     }
// }

// function createPopUp(price, popUpInstance) {
//     popUpInstance.getElementsByClassName("name")[0].innerText = "$".concat(price)
//     popUpInstance.getElementsByClassName("name-large")[0].innerText = "$".concat(price)
//     return popUpInstance
// }

// function nodeToString(node) {
//     var tmpNode = document.createElement("div");
//     tmpNode.appendChild(node.cloneNode(true));
//     return tmpNode.innerHTML;
// }

function modifyPage(elements) {
    for (var i = 0; i < elements.length; i++) {
        originalPrice = elements[i].innerHTML
        donationAmount = 1
        totalPrice =  parseInt(originalPrice) + donationAmount

        elements[i].innerHTML = `
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

var amazonTags = document.getElementsByClassName("amazon")
modifyPage(amazonTags)