const coffees = document.querySelector(".coffees");
const rightside = document.querySelector(".rightside");
const navigation = document.querySelector(".navigation");
const main = document.querySelector("main");
const body = document.querySelector("body");
const orderMenu = document.querySelector(".order");
const cofeeOrdered = document.getElementById("coffeeord");
const ordareImage = document.querySelector(".orderimage");
const orderedCoffee = document.getElementById("ordered");
const prices = document.querySelector(".prices");
let coffeesugarSizesButs = document.querySelector(".coffeesizes");
let coffeesugarsugarButs = document.querySelector(".coffee-sugar-sugar");
let coffeesugarMilksButs = document.querySelector(".coffee-sugar-milks");
let coffeeSelectors = [];
let orderedCoffeeList = [];

let selectedSize = "";
let selectedExtra = "";
let selectedMilk = "";


let coffee = [
    {
        "name": "Cappuccino 1",
        "price": "10",
        "image": "images/cappuccino.png",
        "type": "Cappuccino",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Cappuccino 2",
        "price": "12",
        "image": "images/cappuccino.png",
        "type": "Cappuccino",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Cappuccino 3",
        "price": "17",
        "image": "images/cappuccino.png",
        "type": "Cappuccino",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Latte 1",
        "price": "10",
        "image": "images/latte.png",
        "type": "Latte",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Latte 2",
        "price": "12",
        "image": "images/latte.png",
        "type": "Latte",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Latte 3",
        "price": "17",
        "image": "images/latte.png",
        "type": "Latte",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Americano 1",
        "price": "10",
        "image": "images/americano.png",
        "type": "Americano",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Americano 2",
        "price": "12",
        "image": "images/americano.png",
        "type": "Americano",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Americano 3",
        "price": "17",
        "image": "images/americano.png",
        "type": "Americano",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Expresso 1",
        "price": "10",
        "image": "images/espresso.jpg",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Expresso 2",
        "price": "12",
        "image": "images/espresso.jpg",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Expresso 3",
        "price": "17",
        "image": "images/espresso.jpg",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Flat White",
        "price": "5",
        "image": "images/flat-white.png",
        "type": "Flat White",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Flat White",
        "price": "6",
        "image": "images/flat-white.png",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

    {
        "name": "Flat White",
        "price": "7",
        "image": "images/flat-white.png",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },
    {
        "name": "Boba milk",
        "price": "20",
        "image": "images/boba-milk.png",
        "type": "Expresso",
        "sizes": ["SHORT", "TALL", "GRANDE", "VENTI"],
        "sugar": ["SUGAR", "NO SUGAR"],
        "milks": ["OAT MILK", "SOY MILK", "ALMOND MILK"]
    },

      
];
let types = [
    {
        "type": "Cappuccino"
    },

    {
        "type": "Latte"
    },

    {
        "type": "Americano"
    },

    {
        "type": "Expresso"
    },

    {
        "type": "Flat White"
    },
    
    {
        "type": "Boba milk"
    },

];

let totalPrice = 0;
let totalCount = 0;

let currFilter = "";

function UpdateLocalStorage() {
    localStorage.setItem("orderedCoffeeList", JSON.stringify(orderedCoffeeList));
}

function LoadLocalStorage() {
    orderedCoffeeList = JSON.parse(localStorage.getItem("orderedCoffeeList"));
    orderedCoffeeList.forEach(elem => {
        CreateOrder(elem.name, elem.count);
    })
}

LoadLocalStorage();

function Init() {
    let s = "";
    coffee.forEach(elem => {
        if (currFilter == "" || elem.name.toLowerCase().includes(currFilter.toLowerCase())) {
            s += `<div class="coffeecard" id="${elem.type}">`;
            s += `<a name="${elem.type}"></a>`;
            s += `<img src="${elem.image}">`;
            s += `<p>${elem.name}</p>`;
            s += `<div class="plusbutton">`;
            s += `<div class="ordertext">`;
            s += `<p>${elem.price} RUB</p>`;
            s += `</div>`;
            s += `<button class="plusbutton" onclick="OrderCoffee('${elem.name}')">+</button>`;
            s += `</div>`;
            s += `</div>`;
        }
    });
    coffees.innerHTML = s;
}

Init();

const items = document.querySelectorAll('.slider-item');
let currentIndex = 0;

// Обновление выделенного элемента
function updateSelection() {
    items.forEach((item, index) => {
        item.classList.toggle('selected', index === currentIndex);
    });
}

// Прокрутка вверх по слайдеру
function slideUp() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCoffee();
    }
}

// Прокрутка вниз по слайдеру
function slideDown() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        scrollToCoffee();
    }
}

// Скролл к выбранному кофе
function scrollToCoffee() {
    updateSelection();
    const targetId = items[currentIndex].getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            block: 'center'
        });
    }
}

// Обработчик клика по элементам слайдера
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        scrollToCoffee();
    });
});

// Инициализация
updateSelection();

function OrderCoffee(coffeeName) {
    OpenOrderMenu();
    let currCoffee = FindCoffee(coffeeName);
    let i = 0;

    let sizes = "<div class='extralist'>";
    currCoffee.sizes.forEach(elem => {
        sizes += 
        `
        <div class="coffeesizes" onclick="ChooseCoffeeSize(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    sizes += "</div>"

    let sugar = "<div class='extralist'>";
    i = 0;
    currCoffee.sugar.forEach(elem => {
        sugar += 
        `
        <div class="coffeesugar" onclick="ChooseCoffeeSugar(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    sugar += "</div>"
    i = 0;
    let milks = "<div class='extralist'>";
    currCoffee.milks.forEach(elem => {
        milks += 
        `
        <div class="coffeemilks" onclick="ChooseCoffeeMilk(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    milks += "</div>"

    if (currCoffee) {
        ordareImage.innerHTML = 
        `
        <img src="${currCoffee.image}">
        `
        cofeeOrdered.innerHTML = 
        `
        <h5>${currCoffee.name}</h5>
        <p class="low-opacity-text">Size</p>
        ${sizes}
        <p class="low-opacity-text">Extra</p>
        ${sugar}
        <p class="low-opacity-text">Milk</p>
        ${milks}
        <div class="buy-block">
        <div class="count-price">
        <p style="font-size: 3vw; font-weight: 800;">${currCoffee.price} RUB</p>
        <input type="number" min="1" max="10" value="1" id="order-count-input">
        </div>
        <button onclick="CreateOrder('${currCoffee.name}', 0)">PLACE ORDER</button>
        </div>
        `;
    }
}

function FindCoffee(name) {
    return coffee.find(element => element.name == name) || null;
}

function OpenMenu() {
    rightside.style.width = "25%";
    rightside.style.display = "flex";
    navigation.classList.add("deactivated");
    main.classList.add("deactivated");
    body.style.overflow = "hidden";
}

function CloseMenu() {
    rightside.style.width = "0%";
    rightside.style.display = "none";
    navigation.classList.remove("deactivated");
    main.classList.remove("deactivated");
    body.style.overflow = "auto";
}

function OpenOrderMenu() {
    orderMenu.style.display = "flex";
    body.style.overflow = "hidden";
    main.style.display = "none";
    navigation.style.display = "none";
}

function CloseOrderMenu() {
    orderMenu.style.display = "none";
    body.style.overflow = "auto";
    main.style.display = "flex";
    navigation.style.display = "flex";
}

function ChooseCoffeeSize(ind) {
    i = 0;
    coffeesugarSizesButs = document.querySelectorAll(".coffeesizes");
    coffeesugarSizesButs.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selectedce");
            selectedSize = elem.innerText;
        }
        else {
            elem.classList.remove("selectedce");
        }
        i += 1;
    })
}

function ChooseCoffeeSugar(ind) {
    i = 0;
    coffeesugarsugarButs = document.querySelectorAll(".coffeesugar");
    coffeesugarsugarButs.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selectedce")
            selectedExtra = elem.innerText;
        }
        else {
            elem.classList.remove("selectedce")
        }
        i += 1;
    })
}

function ChooseCoffeeMilk(ind) {
    i = 0;
    coffeesugarMilksButs = document.querySelectorAll(".coffeemilks");
    coffeesugarMilksButs.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selectedce")
            selectedMilk = elem.innerText;
        }
        else {
            elem.classList.remove("selectedce")
        }
        i += 1;
    })
}

function CreateOrder(name, count_json) {
    let selectedCoffee = FindCoffee(name);
    let count = 0;
    if (count_json == 0) {
        count = Number(document.getElementById("order-count-input").value);
    }
    else {
        count = count_json;
    }
    s = orderedCoffee.innerHTML;
    s += 
    `
    <div class="ordered-coffee-block">
    <div class="element-order-block">
    <img src="${selectedCoffee.image}">
    </div>
    <div class="element-order-block">
    <p>${selectedCoffee.name}</p>
    </div>
    <div class="block-count">
    <p>${count}</p>
    </div>
    </div>
    `
    orderedCoffee.innerHTML = s;
    totalPrice += count * selectedCoffee.price;
    totalCount += count;
    let counts = document.querySelectorAll(".ordercount");
    console.log(counts);
    counts.forEach(elem => {
        console.log(elem);
        elem.innerText = totalCount
    })

    let p = "";
    p += 
    `
    <div class="price-total-block">
    <p>Subtotal</p>
    <p>${totalPrice} RUB</p>
    </div>

    <div class="price-total-block">
    <p>Discount -10%</p>
    <p>${(totalPrice * 0.1).toFixed()} RUB</p>
    </div>

    <div class="price-total-block">
    <p style="font-size: 22px">Total</p>
    <p>${(totalPrice * 0.9).toFixed()} RUB</p>
    </div>
    `
    prices.innerHTML = p;
    if (count_json == 0) {
        orderedCoffeeList.push({"name": name, "count": count, "size": selectedSize, "extra": selectedExtra, "milk": selectedMilk});
        UpdateLocalStorage();
        CloseOrderMenu();
    } 
}

document.getElementById("search").addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        currFilter = this.value;
        Init();
    }
});
