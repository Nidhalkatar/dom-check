const x = document.getElementById("cont");

var btnremove = x.getElementsByClassName("btn-danger");
for (i = 0; i < btnremove.length; i++) {
    x.getElementsByClassName("btn-danger")[i].addEventListener(
        "click",
        removeFromCart
    );
}

function removeFromCart(event) {
    let toremove = event.target;
    toremove.parentElement.remove();
    total(null, null, event.target);
}

var btnPlus = x.getElementsByClassName("btn-plus");
for (i = 0; i < btnPlus.length; i++) {
    x.getElementsByClassName("btn-plus")[i].addEventListener("click", addone);
}

function addone(event) {
    let addo = event.target;
    addo.previousElementSibling.value++;
    total(event.target);
}

const btnm = x.getElementsByClassName("btn-mins");
for (i = 0; i < btnm.length; i++) {
    x.getElementsByClassName("btn-mins")[i].addEventListener("click", moinsone); //appel add
}

function moinsone(event) {
    let ado = event.target;

    if (ado.nextElementSibling.value <= 0) {
        ado.nextElementSibling.value == 0;
    } else {
        ado.nextElementSibling.value--;
        total(null, ado, null);
    }
}
const rowcart = x.getElementsByClassName("shop-items");

const price = x.getElementsByClassName("shop-item-price");
const quantity = x.getElementsByClassName("cart-quantity-input");

var tot = 0;

function total(addBtn, minusBtn, rem) {
    const totalprice = document.getElementById("totalprice");
    if (addBtn) {
        let unitPrice = addBtn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace(
            "$", "");
        totalprice.innerHTML = +totalprice.innerHTML + parseInt(unitPrice);
    }

    if (minusBtn) {
        let unitPrice = minusBtn.previousElementSibling.innerHTML.replace("$", "");
        totalprice.innerHTML = +totalprice.innerHTML - parseInt(unitPrice);
    }
    if (rem) {
        let unitPrice = rem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML.replace(
            "$",
            ""
        );
        let quantite =
            rem.previousElementSibling.previousElementSibling.previousElementSibling
            .value;
        totalprice.innerHTML = +totalprice.innerHTML - parseInt(unitPrice) * quantite;
    }
    //     for(i=0;i< rowcart.length;i++){

    //     tot = quantity[i].value *(parseFloat(price[i].innerText.replace('$', '')))
    // }
    // totalprice.innerText = tot;
}

const iconLove = x.getElementsByClassName("fa fa-heart");
for (i = 0; i < iconLove.length; i++) {
    x.getElementsByClassName("fa fa-heart")[i].addEventListener("click", love);
    x.getElementsByClassName("fa fa-heart")[i].addEventListener(
        "dblclick",
        love2
    );
}

function love(event) {
    const loveelement = event.target;
    loveelement.style.color = "red";
    loveelement.onclick = love2;
}

function love2(event) {
    const lovelement = event.target;
    lovelement.style.color = "black";
}