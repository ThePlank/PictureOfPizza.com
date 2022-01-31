class Action {
    text = "funny";
    image = "funny";
    constructor(text, image) {
        this.text = text;
        this.image = image;
    }
}

let things = [
    new Action('Put vegemite on it', 'vegit.png'),
    new Action('Put marmite on it', 'marmite.png'),
    new Action('Put a bomb on it', 'bomb.png'),
    new Action('Put a cake on it', 'cakee.png'),
    new Action('Put a grandma on it', 'cook.png'),
    new Action('Put a cookie on it', 'cooks.png'),
    new Action('Put peperoni on it', 'pepor.png'),
    new Action('Put extra peperoni on it', 'expepor.png'),
    new Action('Put a single peperoni on it', 'singlepeppor.png'),
    new Action('Make a infinite pizza', 'infinpizza.png'),
    new Action('Make a minipizza', 'minipiza.png'),
    new Action('Put a hamburger on it', 'hamburg.png'),
    new Action('Make it a BFDI character', 'bfdip.png'),
    new Action('Put a teacup on it', 'teacupit.png'),
    new Action('Put a spoon on it', 'spoon_it.png'),
    new Action('Grab the pizza', 'grabit.png'),
    new Action('Eat the pizza', 'eatit.png'),
    new Action('Burn the pizza', 'burn_it.png'),
    new Action('Put a Wii U on it', 'wiiuit.png'),
    new Action('Crash the pizza', 'crashit.png'),
    new Action('Plank-ify', 'plankit.png'),
    new Action('End the madness', 'piza.png'),
]

let pizzaimage = document.getElementById("pizzaImage")
let themeToggle = document.getElementById("themeToggler")

themeToggle.addEventListener('click', () => {
    if (localStorage.getItem('mode') == null)
        return localStorage.setItem('mode', "dark")

    localStorage.setItem('mode', (localStorage.getItem('mode') == "dark" ? "light" : "dark"))

    

    switch (localStorage.getItem('mode')) {
        case "dark":
            document.body.classList = "dark";
            break
        case "light":
            document.body.classList = "light";
            break
    }
})

const addActionToFooter = (action, callback) => {
    let buttonThing = document.createElement("button")
    buttonThing.innerText = action
    buttonThing.style = "color: currentColor;"
    // buttonThing.id = id;
    document.querySelector('footer').appendChild(buttonThing)
    buttonThing.addEventListener('click', callback)
}

things.forEach((thing) => {
    addActionToFooter(thing.text, () => {
        pizzaimage.src = 'img/' + thing.image;
        localStorage.setItem('lastestThing', thing.image)
    })
})

if (localStorage.getItem('lastestThing') != null)
    pizzaimage.src = 'img/' + localStorage.getItem('lastestThing')

if (localStorage.getItem('mode') != null) {
    console.log(localStorage.getItem('mode'))
    switch (localStorage.getItem('mode')) {
        case "dark":
            console.log("dark?")
            document.body.classList = "dark";
            break;
        case "light":
            console.log("light?")
            document.body.classList = "light";
            break;
    }
}
