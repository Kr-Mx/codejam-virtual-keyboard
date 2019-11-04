const ruKeyBoardDown = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'],
];
const ruKeyBoardUp = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'],
];
const engKeyBoardDown = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'],
];
const engKeyBoardUp = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '', '(', ')', '', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&#8242;', "Enter"],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'],
];
const keysDescription = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
]

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  }
}

function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.innerHTML = '<textarea class="area" wrap="soft"></textarea> <div class="keyBoard"></div>';
  document.body.prepend(wrapper);
}

createWrapper();


function createElements() {
  for (let j = 0; j < keysDescription.length; j++) {
    const keyBoard = document.querySelector('.keyBoard');
    const row = document.createElement('div');
    row.className = 'row';
    keyBoard.append(row);
    for (let i = 0; i < ruKeyBoardDown[j].length; i++) {
      const key = document.createElement('div');
      key.id = `${keysDescription[j][i]}`;
      key.className = 'key';
      key.innerHTML = `<span class="ruDown active">${ruKeyBoardDown[j][i]}</span> <span class="ruUp passive">${ruKeyBoardUp[j][i]}</span> <span class="engDown passive">${engKeyBoardDown[j][i]}</span> <span class="engUp passive">${engKeyBoardUp[j][i]}</span>`
      row.append(key);
    }
  }
}

createElements();
document.addEventListener('keydown', writeText);
document.addEventListener('keyup', afterWriteText);
document.addEventListener('click', click);

function writeText(e) {
  e.preventDefault();
  const input = document.querySelector('.area');
  const key = document.querySelector(`#${e.code}`);
  input.focus();
  key.style.backgroundColor = 'red';
  key.style.transform = 'translateY(4px)';
  const ruUp = document.querySelectorAll('.ruUp');
  const ruDown = document.querySelectorAll('.ruDown');
  const engUp = document.querySelectorAll('.engUp');
  const engDown = document.querySelectorAll('.engDown');
  switch (key.id) {
    case ('Tab'):
      input.value += '\t';
      break;
    case ('Enter'):
      input.value += '\n';
      break;
    case ('Space'):
      input.value += ' ';
      break;
    case ('Backspace'):
      input.value = input.value.slice(0, input.value.length - 1);
      break;
    case ('ArrowLeft'):
      setCaretPosition(input, input.value.length - 1);
      break;
    case ('ArrowRight'):
      setCaretPosition(input, input.value.length + 1);
      break;
    case ('ArrowDown'):
      setCaretPosition(input, 0);
      break;
    case ('ArrowUp'):
      setCaretPosition(input, input.value.length);
      break;
    case ('CapsLock'):
      ruDown.forEach((item) => {
        item.classList.toggle("active");
        item.classList.toggle("passive");
      });
      ruUp.forEach((item) => {
        item.classList.toggle("passive");
        item.classList.toggle("active");
      });
      break;
    default:
      input.value += key.innerText;
  }
}

function afterWriteText(e) {
  e.preventDefault();
  const key = document.querySelector(`#${e.code}`);
  key.style.backgroundColor = 'black';
  key.style.transform = 'translateY(0px)';
}

function click(e) {
  e.preventDefault();
  const input = document.querySelector('.area');
  const target = e.target;
  if (target.className === 'key') {
    input.value += `${e.target.innerText}`;
    key.style.backgroundColor = 'red';
    key.style.transform = 'translateY(4px)';
  }

}
