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

function modifyPage(elements) {
    for (var i = 0; i < elements.length; i++) {
        var tempPrice = elements[i].innerHTML
        console.log(tempPrice)
        var tempPopup = document.getElementsByClassName("popUp")[0]
        elements[i].innerHTML = (nodeToString(createPopUp(tempPrice, tempPopup)))
    }
}

function createPopUp(price, popUpInstance) {
    popUpInstance.getElementsByClassName("name")[0].innerText = "$".concat(price)
    popUpInstance.getElementsByClassName("name-large")[0].innerText = "$".concat(price)
    return popUpInstance
}

function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    return tmpNode.innerHTML;
}

var amazonTags = document.getElementsByClassName("amazon")
console.log(amazonTags)
modifyPage(amazonTags)