if (typeof (Storage) !== "undefined") {
    document.querySelector(".parntShp").innerHTML = localStorage.getItem("programming");
    calcTotal()

}

//shopping cart
let cart = document.querySelector(".cart");
let shoppingCart = document.querySelector(".shoppingCart");
let close = document.querySelector(".shoppingCart span");

close.addEventListener("click", function () {
    shoppingCart.classList.remove("show");
})
cart.addEventListener("click", function () {
    shoppingCart.classList.add("show");

})


// let remove = document.querySelectorAll(".remove")
// remove.forEach(el => {
//     let pro = document.querySelectorAll(".parntShp .product  h4")
//     el.addEventListener("click", function (e) {
//         e.target.parentElement.parentElement.remove();
//         if (document.querySelector(".parntShp").innerText == "") {
//             document.querySelector(".parntShp").innerHTML = localStorage.removeItem("programming");
//         }
//         calcTotal()
//         noDuplact(pro)
//     })
// })

let adto = document.querySelectorAll(".All_product .product .ad a");
let parntShp = document.querySelector(".parntShp");

adto.forEach(el => {
    el.addEventListener("click", function (e) {
        shoppingCart.classList.add("show");
        let title = e.target.parentElement.parentElement.querySelector("h5").innerText;
        let price = e.target.parentElement.parentElement.querySelector("span").innerText;
        let img = e.target.parentElement.querySelector("img").src;
        addToCart(title, price, img);



    })
})
function addToCart(title, price, img) {
    parntShp.innerHTML += `<div class="product">
    <div class="img">
        <img src="${img}">
    </div>
    <div class="infoPro">
        <h4>${title}</h4>
        <div class="price">
        <span>${price}</span>
      </div>
        <a class="remove" href="#">remove</a>
    </div>
    <input value="1" type="number"/>
</div>`
    let pro = document.querySelectorAll(".parntShp .product  h4")
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("programming", parntShp.innerHTML);
    }
    let remove = document.querySelectorAll(".remove");
    remove.forEach(el => {
        el.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.remove();
            if (document.querySelector(".parntShp").innerText == "") {
                document.querySelector(".parntShp").innerHTML = localStorage.removeItem("programming");
            }
            calcTotal()
        })
    })
    calcTotal()
    noDuplact(pro)
}
var qa = document.querySelectorAll("input");
for (let i = 0; i < qa.length; i++) {
    var input = qa[i];
    input.addEventListener("change", quantityChange)
    calcTotal()
}
function quantityChange(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    calcTotal()
}
function calcTotal() {
    let sum = 0;
    let product = document.querySelectorAll(".parntShp .product");
    for (let i = 0; i < product.length; i++) {
        let price = product[i].querySelectorAll(".price")[0].innerText;
        let quantity = product[i].querySelectorAll("input")[0];
        sum = sum + (parseInt(price) * parseInt(quantity.value));
    }

    document.querySelector(".total span").innerHTML = sum;
    document.querySelector(".total  a").addEventListener("click", function () {
        parntShp.innerHTML = "";
        document.querySelector(".parntShp").innerHTML = localStorage.removeItem("programming");
        document.querySelector(".total span").innerHTML = 0
    })

}
function noDuplact(pro) {
    for (let i = 0; i < pro.length; i++) {
        for (let j = i + 1; j < pro.length; j++) {
            if (pro[i].textContent == pro[j].textContent) {
                pro[i].parentElement.parentElement.remove();
                calcTotal()
            }
        }
    }
}