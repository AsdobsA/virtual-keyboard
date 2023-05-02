const container = document.createElement("div");
container.classList.add("container-body");
document.body.prepend(container);

const title = document.createElement("p");
title.classList.add("title");
container.prepend(title);
title.innerHTML = "Виртуальная клавиатура";

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.innerHTML = "";
title.after(textarea);

const containerKeyboard = document.createElement("div");
containerKeyboard.classList.add("container-keyboard");
textarea.after(containerKeyboard);

const textLang = document.createElement("textlang");
textLang.classList.add("textlang");
containerKeyboard.after(textLang);
textLang.innerHTML = "Клавиатура создана в операционной системе Windows";

const textLangCheck = document.createElement("textlang-check");
textLangCheck.classList.add("textlang-check");
textLang.after(textLangCheck);
textLangCheck.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt";

const en = [
    "`",
    `1`,
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "",
];

const ru = [
    "ё",
    `1`,
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "",
];

let keyboard;

localStorage.setItem("en", JSON.stringify(en));
keyboard = JSON.parse(localStorage.getItem("en"));

function switchLanguage() {
    if (keyboard[0] === '`') {
        localStorage.clear()
        localStorage.setItem("ru", JSON.stringify(ru));
        keyboard = JSON.parse(localStorage.getItem("ru"));
        init();
    }
    else {
        localStorage.clear()
        localStorage.setItem("en", JSON.stringify(en));
        keyboard = JSON.parse(localStorage.getItem("en"));
        init();
    }
}


document.onkeydown = function (evt) {
    if (!evt) evt = event;
    if (evt.ctrlKey && evt.altKey) {
        switchLanguage();
    }
    for (let i = 0; i < containerKeyboard.childNodes.length; i++) {
        if (event.key === containerKeyboard.childNodes[i].innerHTML) {
            containerKeyboard.childNodes[i].classList.add("active");
            textarea.innerHTML += event.key;
        }
        if (event.code === "ControlLeft") {
            const ctrlLeft = document.querySelector(".ctrl-left");
            ctrlLeft.classList.add("active");
        }
        if (event.code === "ControlRight") {
            const ctrlRigth = document.querySelector(".ctrl-rigth");
            ctrlRigth.classList.add("active");
        }
        if (event.code === "ShiftLeft") {
            const shiftLeft = document.querySelector(".shift-left");
            shiftLeft.classList.add("active");
        }
        if (event.code === "ShiftRight") {
            const shiftRigth = document.querySelector(".shift-rigth");
            shiftRigth.classList.add("active");
        }
        if (event.code === "AltLeft") {
            const altLeft = document.querySelector(".alt-left");
            altLeft.classList.add("active");
        }
        if (event.code === "AltRight") {
            const altRight = document.querySelector(".alt-rigth");
            altRight.classList.add("active");
        }
        if (event.code === "MetaLeft") {
            const metaLeft = document.querySelector(".win");
            metaLeft.classList.add("active");
        }
        if (event.code === "Delete") {
            const deleteButton = document.querySelector(".del");
            deleteButton.classList.add("active");
        }
        if (event.code === "CapsLock") {
            const capsLock = document.querySelector(".caps-lock");
            capsLock.classList.toggle("active");
        }
        if (event.code === "ArrowLeft") {
            const arowLeft = document.querySelector(".arrow-left");
            arowLeft.classList.add("active");
        }
        if (event.code === "ArrowRight") {
            const arowRigth = document.querySelector(".arrow-rigth");
            arowRigth.classList.add("active");
        }
        if (event.code === "ArrowUp") {
            const arowUp = document.querySelector(".arrow-up");
            arowUp.classList.add("active");
        }
        if (event.code === "ArrowDown") {
            const arowDown = document.querySelector(".arrow-down");
            arowDown.classList.add("active");
        }
        if (event.code === "Space") {
            const space = document.querySelector(".space");
            space.classList.add("active");
        }
    }
};


document.onkeyup = function () {
    for (let i = 0; i < containerKeyboard.childNodes.length; i++) {
        if (event.key === containerKeyboard.childNodes[i].innerHTML) {
            containerKeyboard.childNodes[i].classList.remove("active");
        }
        if (event.code === "ControlLeft") {
            const ctrlLeft = document.querySelector(".ctrl-left");
            ctrlLeft.classList.remove("active");
        }
        if (event.code === "ControlRight") {
            const ctrlRigth = document.querySelector(".ctrl-rigth");
            ctrlRigth.classList.remove("active");
        }
        if (event.code === "ShiftLeft") {
            const shiftLeft = document.querySelector(".shift-left");
            shiftLeft.classList.remove("active");
        }
        if (event.code === "ShiftRight") {
            const shiftRigth = document.querySelector(".shift-rigth");
            shiftRigth.classList.remove("active");
        }
        if (event.code === "AltLeft") {
            const altLeft = document.querySelector(".alt-left");
            altLeft.classList.remove("active");
            event.preventDefault()
        }
        if (event.code === "AltRight") {
            const altRight = document.querySelector(".alt-rigth");
            altRight.classList.remove("active");
            event.preventDefault()
        }
        if (event.code === "MetaLeft") {
            const metaLeft = document.querySelector(".win");
            metaLeft.classList.remove("active");
        }
        if (event.code === "Delete") {
            const deleteButton = document.querySelector(".del");
            deleteButton.classList.remove("active");
        }
        if (event.code === "ArrowLeft") {
            const arowLeft = document.querySelector(".arrow-left");
            arowLeft.classList.remove("active");
        }
        if (event.code === "ArrowRight") {
            const arowRigth = document.querySelector(".arrow-rigth");
            arowRigth.classList.remove("active");
        }
        if (event.code === "ArrowUp") {
            const arowUp = document.querySelector(".arrow-up");
            arowUp.classList.remove("active");
        }
        if (event.code === "ArrowDown") {
            const arowDown = document.querySelector(".arrow-down");
            arowDown.classList.remove("active");
        }
        if (event.code === "Space") {
            const space = document.querySelector(".space");
            space.classList.remove("active");
        }
    }
};


function init() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
        if (i === 13) {
            out +=
                '<div class="backspace">Backspace</div>' +
                '<div class="tab">Tab</div>';
        }
        if (i === 26) {
            out +=
                '<div class="del">Del</div>' +
                '<div class="caps-lock">Caps Lock</div>';
        }
        if (i === 37) {
            out +=
                '<div class="enter">Enter</div>' +
                '<div class="shift-left">Shift.</div>';
        }
        if (i === 47) {
            out +=
                '<div class="arrow-up">&#9650;</div>' +
                '<div class="shift-rigth">Shift.</div>' +
                '<div class="ctrl-left">Ctrl</div>' +
                '<div class="win">Win</div>' +
                '<div class="alt-left">Alt.</div>' +
                '<div class="space"></div>' +
                '<div class="alt-rigth">Alt.</div>' +
                '<div class="arrow-left">&#9668;</div>' +
                '<div class="arrow-down">&#9660;</div>' +
                '<div class="arrow-rigth">&#9658;</div>' +
                '<div class="ctrl-rigth">Ctrl</div>';
        }
        out += '<div class="key-keyboard">' + keyboard[i] + "</div>";
    }
    containerKeyboard.innerHTML = out;
}
init();


const ctrlLeft = document.querySelector(".ctrl-left");
const ctrlRigth = document.querySelector(".ctrl-rigth");
const shiftLeft = document.querySelector(".shift-left");
const shiftRigth = document.querySelector(".shift-rigth");
const altLeft = document.querySelector(".alt-left");
const altRight = document.querySelector(".alt-rigth");
const metaLeft = document.querySelector(".win");
const deleteButton = document.querySelector(".del");
const capsLock = document.querySelector(".caps-lock");
const arowLeft = document.querySelector(".arrow-left");
const arowRigth = document.querySelector(".arrow-rigth");
const arowUp = document.querySelector(".arrow-up");
const arowDown = document.querySelector(".arrow-down");
const space = document.querySelector(".space");

function writeButton() {
    const buttonKeybord = document.querySelectorAll(".key-keyboard");
    for (let i = 0; i < buttonKeybord.length; i++) {
        buttonKeybord[i].addEventListener("mouseup", writeButton1);
    }
    const capsLock = document.querySelector(".caps-lock");
    capsLock.addEventListener("mouseup", capsLockButton);
}

function writeButton1() {
    textarea.innerHTML += event.target.textContent;
}

function capsLockButton() {
    capsLock.classList.toggle("active");
}

writeButton();



