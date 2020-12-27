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