const body = document.querySelector(".body");
let lang = "Eng";
let capitalized = false;
//Таблицы клавиш клавиатуры. Для каждой строки клавиатуры таблица содержит код клавиши, её английский вариант прописной, заглавный, русский и русский заглавыный
//Доделать таблицы и сделать коммит!
const firstLine = [
    {code: 'Backquote', eng: "`", capEng: "~", rus: "ё", capRus: "Ё"},
    {code: 'Digit1', eng: "1", capEng: "!", rus: "1", capRus: "!"},
    {code: 'Digit2', eng: "2", capEng: "@", rus: "2", capRus: "\""},
    {code: 'Digit3', eng: "3", capEng: "#", rus: "3", capRus: "№"},
    {code: 'Digit4', eng: "4", capEng: "$", rus: "4", capRus: ";"},
    {code: 'Digit5', eng: "5", capEng: "%", rus: "5", capRus: "%"},
    {code: 'Digit6', eng: "6", capEng: "^", rus: "6", capRus: ":"},
    {code: 'Digit7', eng: "7", capEng: "&", rus: "7", capRus: "?"},
    {code: 'Digit8', eng: "8", capEng: "*", rus: "8", capRus: "*"}, 
    {code: 'Digit9', eng: "9", capEng: "(", rus: "9", capRus: "("},
    {code: 'Digit0', eng: "0", capEng: ")", rus: "0", capRus: ")"},
    {code: 'Minus', eng: "-", capEng: "_", rus: "-", capRus: "_"},
    {code: 'Equal', eng: "=", capEng: "+", rus: "=", capRus: "+"},
    {code: 'Backspace', eng: "Backspace", capEng: "Backspace", rus: "Backspace", capRus: "Backspace"}
];
const secondLine = [
    {code: 'Tab', eng: 'Tab', capEng: 'Tab', rus: 'Tab', capRus: 'Tab'},
    {code: 'KeyQ', eng: 'q', capEng: 'Q', rus: 'й', capRus: 'Й'},
    {code: 'KeyW', eng: 'w', capEng: 'W', rus: 'ц', capRus: 'Ц'},
    {code: 'KeyE', eng: 'e', capEng: 'E', rus: 'у', capRus: 'У'},
    {code: 'KeyR', eng: 'r', capEng: 'R', rus: 'к', capRus: 'К'},
    {code: 'KeyT', eng: 't', capEng: 'T', rus: 'е', capRus: 'Е'},
    {code: 'KeyY', eng: 'y', capEng: 'Y', rus: 'н', capRus: 'Н'},
    {code: 'KeyU', eng: 'u', capEng: 'U', rus: 'г', capRus: 'Г'},
    {code: 'KeyI', eng: 'i', capEng: 'I', rus: 'ш', capRus: 'Ш'},
    {code: 'KeyO', eng: 'o', capEng: 'O', rus: 'щ', capRus: 'Щ'},
    {code: 'KeyP', eng: 'p', capEng: 'P', rus: 'з', capRus: 'З'},
    {code: 'BracketLeft', eng: '[', capEng: '{', rus: 'х', capRus: 'Х'},
    {code: 'BracketRight', eng: ']', capEng: '}', rus: 'ъ', capRus: 'Ъ'},
    {code: 'Delete', eng: 'Del', capEng: 'Del', rus: 'Del', capRus: 'Del'}
];
const thirdLine = ["CapsLock", 65, 83, 68, 70, 71, 72, 74, 75, 76, ";", "\'", "\\", "Enter"];
const fourthLine = ["Shift", "\\", 90, 88, 67, 86, 66, 78, 77, ",", ".", "/", "Shift"];
const fifthLine = ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Ctrl"];
const arrows = ["^", "<", "v", ">"]; 

//Класс для более лёгкого заполнения таблиц клавиш (Потом удалить)
class keyButton {
    constructor(code,key,capKey) {
        this.code = `${code}`,
        this.eng = `${key}`,
        this.capEng = `${capKey}`,
        this.rus = "",
        this.capRus = ""
    }
}

//Генерация элементов оболочки клавиатуры
body.innerHTML =`
    <main class="keyboard-wrapper">
        <textarea name="keyboard-output" id="keyboard-output" cols="30" rows="10"></textarea>
        <div class="keyboard-body"></div>
    </main>
`

//Функция генерации одной строки клавиатуры со всеми кнопками, при смене языка, капитализации надо будет сделать реинициализацию
function initLine(line) {
    let out = "";
    const newLine = document.createElement("div");
    newLine.classList.add('keyboard-line');
    document.querySelector(".keyboard-body").append(newLine);
    line.forEach(key=> {
        if (lang === 'Eng' && capitalized === false) out += `<div class="keyboard-key" data="${key.code}">${key.eng}</div>`
        else if (lang === 'Eng' && capitalized === true) out += `<div class="keyboard-key" data="${key.code}">${key.capEng}</div>`
        else if (lang === 'Rus' && capitalized === false) out += `<div class="keyboard-key" data="${key.code}">${key.rus}</div>`
        else if (lang === 'Rus' && capitalized === true) out += `<div class="keyboard-key" data="${key.code}">${key.capRus}</div>`
    })
    newLine.innerHTML = out;
}

//Отрисовка клавиатуры
initLine(firstLine);

// Временная функция для облегчения заполнения таблиц клавиш (Потом удалить)
let amogus = [];
document.onkeydown = function(event) {

    let key = new keyButton(event.code,event.key,event.key.toUpperCase())
    amogus.push(key)
    console.log(amogus)
}

// Подсвет клавиши при кликах по физической клавиатуре
/*document.onkeydown = function(event) {
    document.querySelectorAll(".keyboard-key").forEach(key => key.classList.remove("active"))
    document.querySelector(`.keyboard-key[data="${event.code}"]`).classList.add('active');
};*/

// Подсвет клавиши при кликах по виртуальной клавиатуре
document.querySelectorAll(".keyboard-key").forEach(key => {
    key.onclick = function(event){
        document.querySelectorAll(".keyboard-key").forEach(key => key.classList.remove("active"));
        this.classList.add('active');
    }
});