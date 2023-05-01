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

const keyboard = [
    96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116,
    121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107,
    108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32,
];

const arr = [
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
    ''
];


document.onkeydown = function (event) {
    console.log(event)
    for (let i = 0; i < containerKeyboard.childNodes.length; i++) {
        if (event.key === containerKeyboard.childNodes[i].innerHTML) {
            containerKeyboard.childNodes[i].classList.add("active");
        }
        if (event.code === 'ControlLeft') {
            ctrlLeft.classList.add("active")
        }
        if (event.code === 'ControlRight') {
            ctrlRigth.classList.add("active")
        }
        if (event.code === 'ShiftLeft') {
            shiftLeft.classList.add("active")
        }
        if (event.code === 'ShiftRight') {
            shiftRigth.classList.add("active")
        }
        if (event.code === 'AltLeft') {
            altLeft.classList.add("active")
        }
        if (event.code === 'AltRight') {
            altRight.classList.add("active")
        }
        if (event.code === 'MetaLeft') {
            metaLeft.classList.add("active")
        }
        if (event.code === 'Delete') {
            deleteButton.classList.add("active")
        }
        if (event.code === 'CapsLock') {
            capsLock.classList.add("active")
        }
        if (event.code === 'ArrowLeft') {
            arowLeft.classList.add("active")
        }
        if (event.code === 'ArrowRight') {
            arowRigth.classList.add("active")
        }
        if (event.code === 'ArrowUp') {
            arowUp.classList.add("active")
        }
        if (event.code === 'ArrowDown') {
            arowDown.classList.add("active")
        }
        if (event.code === 'Space') {
            space.classList.add("active")
        }
    }
};

document.onkeyup = function (event) {
    console.log(event)
    for (let i = 0; i < containerKeyboard.childNodes.length; i++) {
        if (event.key === containerKeyboard.childNodes[i].innerHTML) {
            containerKeyboard.childNodes[i].classList.remove("active");
        }
        if (event.code === 'ControlLeft') {
            ctrlLeft.classList.remove("active")
        }
        if (event.code === 'ControlRight') {
            ctrlRigth.classList.remove("active")
        }
        if (event.code === 'ShiftLeft') {
            shiftLeft.classList.remove("active")
        }
        if (event.code === 'ShiftRight') {
            shiftRigth.classList.remove("active")
        }
        if (event.code === 'AltLeft') {
            altLeft.classList.remove("active")
        }
        if (event.code === 'AltRight') {
            altRight.classList.remove("active")
        }
        if (event.code === 'MetaLeft') {
            metaLeft.classList.remove("active")
        }
        if (event.code === 'Delete') {
            deleteButton.classList.remove("active")
        }
        if (event.code === 'CapsLock') {
            capsLock.classList.remove("active")
        }
        if (event.code === 'ArrowLeft') {
            arowLeft.classList.remove("active")
        }
        if (event.code === 'ArrowRight') {
            arowRigth.classList.remove("active")
        }
        if (event.code === 'ArrowUp') {
            arowUp.classList.remove("active")
        }
        if (event.code === 'ArrowDown') {
            arowDown.classList.remove("active")
        }
        if (event.code === 'Space') {
            space.classList.remove("active")
        }
    }
};

function init() {
    let out = "";
    for (let i = 0; i < arr.length; i++) {
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
        out += '<div class="key-keyboard">' + arr[i] + "</div>";
    }
    containerKeyboard.innerHTML = out;
}
init();

const ctrlLeft = document.querySelector('.ctrl-left');
const ctrlRigth = document.querySelector('.ctrl-rigth');
const shiftLeft = document.querySelector('.shift-left');
const shiftRigth = document.querySelector('.shift-rigth');
const altLeft = document.querySelector('.alt-left');
const altRight = document.querySelector('.alt-rigth');
const metaLeft = document.querySelector('.win');
const deleteButton = document.querySelector('.del');
const capsLock = document.querySelector('.caps-lock');
const arowLeft = document.querySelector('.arrow-left');
const arowRigth = document.querySelector('.arrow-rigth');
const arowUp = document.querySelector('.arrow-up');
const arowDown = document.querySelector('.arrow-down');
const space = document.querySelector('.space');

function writeButton() {
    const buttonKeybord = document.querySelectorAll(".key-keyboard");
    for (let i = 0; i < buttonKeybord.length; i++) {
        buttonKeybord[i].addEventListener("mouseup", writeButton1);
    }
}

writeButton();

function writeButton1() {
    textarea.innerHTML += event.target.textContent;
}
