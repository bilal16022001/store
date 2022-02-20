if (typeof (Storage) !== "undefined") {
    document.querySelector(".parntShp").innerHTML = localStorage.getItem("programming");
    calcTotal()
}

//shopping cart
let cart = document.querySelector(".cart");
let shoppingCart = document.querySelector(".shoppingCart");
let close = document.querySelector(".shoppingCart span");
let allmodl = document.querySelector(".allmodl");

close.addEventListener("click", function () {
    shoppingCart.classList.remove("show");
    allmodl.classList.remove("modl");
})
cart.addEventListener("click", function () {
    shoppingCart.classList.add("show");
    allmodl.classList.add("modl");

})
let remove = document.querySelectorAll(".remove")
remove.forEach(el => {
    let pro = document.querySelectorAll(".parntShp .product  h4")
    el.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
        if (document.querySelector(".parntShp").innerText == "") {
            document.querySelector(".parntShp").innerHTML = localStorage.removeItem("programming");
        }
        calcTotal()
        noDuplact(pro)
    })
})
let adto = document.querySelectorAll(".All_product .product .ad a");
let parntShp = document.querySelector(".parntShp");

adto.forEach(el => {
    el.addEventListener("click", function (e) {
        shoppingCart.classList.add("show");
        allmodl.classList.add("modl");
        let title = e.target.parentElement.parentElement.querySelector("h5").innerText;
        let price = e.target.parentElement.parentElement.querySelector("span").innerText;
        let img = e.target.parentElement.querySelector("img").src
        addToCart(title, price, img)

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
</div>`
    let pro = document.querySelectorAll(".parntShp .product  h4");
    if (typeof (Storage) !== "undefined") {
        // Store
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
    noDuplact(pro);
}


function calcTotal() {
    let sum = 0;
    let product = document.querySelectorAll(".parntShp .product");
    for (let i = 0; i < product.length; i++) {
        let price = product[i].querySelectorAll(".price")[0].innerText;
        sum += parseInt(price)
    }
    document.querySelector(".total span").innerHTML = sum;
    document.querySelector(".total  a").addEventListener("click", function () {
        parntShp.innerHTML = localStorage.removeItem("programming");
        parntShp.innerHTML = "";
        document.querySelector(".total span").innerHTML = 0
    })
}
function noDuplact(pro) {
    for (let i = 0; i < pro.length; i++) {
        for (let j = i + 1; j < pro.length; j++) {
            if (pro[i].textContent == pro[j].textContent) {
                pro[i].parentElement.parentElement.remove();
                calcTotal();
            }
        }
    }
}
//filter searchBar
function srch() {
    let search = document.querySelector(".filterProducts .search input");
    let title = document.querySelectorAll("h5");
    title.forEach(el => {
        if (el.textContent.toUpperCase().indexOf(search.value.toUpperCase()) > -1) {
            el.parentElement.style.display = ""
        } else {
            el.parentElement.style.display = "none"
        }
    })
}

let nav = document.querySelectorAll(".filterProducts nav ul li");
let titlPro = document.querySelectorAll("h5");

nav.forEach(el => {
    el.addEventListener("click", function (e) {
        titlPro.forEach(ti => {
            if (ti.getAttribute("class") == e.target.textContent) {
                ti.parentElement.style.display = ""
            }
            else if (e.target.textContent == "All") {
                ti.parentElement.style.display = ""
            }
            else {
                ti.parentElement.style.display = "none"
            }
        })
    })
})

