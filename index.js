function createProject() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.innerHTML = '<textarea class="area" wrap="soft"></textarea> <div class="keyBoard"></div> <img class="cactus" src="./asserts/cactus.svg" alt="cactus-image"> <div class="signal"></div>';
  document.body.prepend(wrapper);
}

createProject();
const storage = window.localStorage;
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
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&#8242;', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'],
];
const keysDescription = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];
const cactus = document.querySelector('.cactus');
const input = document.querySelector('.area');
const signal = document.querySelector('.signal');

function createElements() {
  for (let j = 0; j < keysDescription.length; j += 1) {
    const keyBoard = document.querySelector('.keyBoard');
    const row = document.createElement('div');
    row.className = 'row';
    keyBoard.append(row);
    for (let i = 0; i < ruKeyBoardDown[j].length; i += 1) {
      const key = document.createElement('div');
      key.id = `${keysDescription[j][i]}`;
      key.className = 'key';
      if (storage.getItem('lang')) {
        key.innerHTML = `<div class="ru on">
<span class="down active">${ruKeyBoardDown[j][i]}</span>
<span class="up passive">${ruKeyBoardUp[j][i]}</span></div> 
<div class="en off">
<span class="down active">${engKeyBoardDown[j][i]}</span>
<span class="up passive">${engKeyBoardUp[j][i]}</span>
</div>`;
        row.append(key);
      } else {
        key.innerHTML = `<div class="ru off">
<span class="down active">${ruKeyBoardDown[j][i]}</span>
<span class="up passive">${ruKeyBoardUp[j][i]}</span></div> 
<div class="en on">
<span class="down active">${engKeyBoardDown[j][i]}</span>
<span class="up passive">${engKeyBoardUp[j][i]}</span>
</div>`;
        row.append(key);
      }
    }
  }
}

createElements();
const down = document.querySelectorAll('.down');
const up = document.querySelectorAll('.up');
const en = document.querySelectorAll('.en');
const ru = document.querySelectorAll('.ru');

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
    ctrl.focus();
  }
}

function changeColor() {
  if (input.style.borderColor === 'white') {
    input.style.borderColor = 'black';
  } else input.setAttribute('style', 'border-color: white;');
}

function keyDown(e) {
  e.preventDefault();
  const key = document.querySelector(`#${e.code}`);
  input.focus();
  key.style.backgroundColor = 'red';
  key.style.transform = 'translateY(4px)';
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
    case ('ArrowUp'):
      setCaretPosition(input, 0);
      break;
    case ('ArrowRight'):
    case ('ArrowDown'):
      setCaretPosition(input, input.value.length);
      break;
    case ('CapsLock'):
      down.forEach((item) => {
        item.classList.toggle('active');
        item.classList.toggle('passive');
      });
      up.forEach((item) => {
        item.classList.toggle('passive');
        item.classList.toggle('active');
      });
      if (signal.style.backgroundColor === 'red') {
        signal.style.backgroundColor = 'white';
      } else signal.setAttribute('style', 'background-color: red;');
      break;
    case ('ShiftLeft'):
    case ('ShiftRight'):
      down.forEach((item) => {
        item.classList.toggle('active');
        item.classList.toggle('passive');
      });
      up.forEach((item) => {
        item.classList.toggle('passive');
        item.classList.toggle('active');
      });
      break;
    case ('ControlLeft'):
    case ('ControlRight'):
    case ('AltRight'):
    case ('AltLeft'):
      input.value += '';
      changeColor();
      break;
    case ('MetaLeft'):
      if (cactus.style.display === 'none') {
        cactus.style.display = 'flex';
      } else cactus.setAttribute('style', 'display: none;');
      break;
    default:
      input.value += key.innerText;
  }
}

function keyUp(e) {
  e.preventDefault();
  const key = document.querySelector(`#${e.code}`);
  key.style.backgroundColor = 'black';
  key.style.transform = 'translateY(0px)';
  switch (key.id) {
    case ('ShiftLeft'):
    case ('ShiftRight'):
      down.forEach((item) => {
        item.classList.toggle('passive');
        item.classList.toggle('active');
      });
      up.forEach((item) => {
        item.classList.toggle('active');
        item.classList.toggle('passive');
      });
      key.style.backgroundColor = 'black';
      break;
    default:
      key.style.backgroundColor = 'black';
  }
}

function click(e) {
  e.preventDefault();
  input.focus();
  const { target } = e;
  if (target.className === 'key'
    || target.className === 'down active'
    || target.className === 'ru on'
    || target.className === 'up active'
    || target.className === 'en on') {
    if (e.target.innerHTML === 'Tab' || e.target.id === 'Tab') {
      input.value += '\t';
    } else if (e.target.innerHTML === 'Enter' || e.target.id === 'Enter') {
      input.value += '\n';
    } else if (e.target.innerHTML === 'Space' || e.target.id === 'Space') {
      input.value += ' ';
    } else if (e.target.innerHTML === 'Backspace' || e.target.id === 'Backspace') {
      input.value = input.value.slice(0, input.value.length - 1);
    } else if (e.target.innerHTML === '←'
      || e.target.innerHTML === '↑'
      || e.target.id === 'ArrowLeft'
      || e.target.id === 'ArrowUp') {
      setCaretPosition(input, 0);
    } else if (e.target.innerHTML === '→'
      || e.target.innerHTML === '↓'
      || e.target.id === 'ArrowRight'
      || e.target.id === 'ArrowDown') {
      setCaretPosition(input, input.value.length);
    } else if (e.target.innerHTML === 'CapsLock' || e.target.id === 'CapsLock') {
      down.forEach((item) => {
        item.classList.toggle('active');
        item.classList.toggle('passive');
      });
      up.forEach((item) => {
        item.classList.toggle('passive');
        item.classList.toggle('active');
      });
      if (signal.style.backgroundColor === 'red') {
        signal.style.backgroundColor = 'yellow';
      } else signal.setAttribute('style', 'background-color: red;');
    } else if (e.target.innerHTML === 'Shift' || e.target.innerHTML === 'Shift'
      || e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight') {
      down.forEach((item) => {
        item.classList.toggle('active');
        item.classList.toggle('passive');
      });
      up.forEach((item) => {
        item.classList.toggle('passive');
        item.classList.toggle('active');
      });
    } else if (e.target.id === 'ControlLeft'
      || e.target.id === 'ControlRight'
      || e.target.id === 'AltRight'
      || e.target.id === 'AltLeft'
      || e.target.innerHTML === 'Ctrl'
      || e.target.innerHTML === 'Alt') {
      input.value += '';
      changeColor();
    } else if (e.target.innerHTML === 'Win' || e.target.id === 'MetaLeft') {
      if (cactus.style.display === 'none') {
        cactus.style.display = 'flex';
      } else cactus.setAttribute('style', 'display: none;');
    } else input.value += `${e.target.innerText}`;
  }
}


function switchLanguage(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < pressed.size; i += 1) {
      if (!pressed.has(codes[0]) || !pressed.has(codes[1])) {
        return;
      }
    }
    pressed.clear();
    func();
    if (Object.keys(storage).length === 0) {
      storage.setItem('lang', 'lang');
    } else storage.clear();
  });
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

switchLanguage(() => {
  en.forEach((item) => {
    item.classList.toggle('off');
    item.classList.toggle('on');
  });
  ru.forEach((item) => {
    item.classList.toggle('on');
    item.classList.toggle('off');
  });
}, 'ShiftLeft', 'ControlLeft');

switchLanguage(() => {
  en.forEach((item) => {
    item.classList.toggle('off');
    item.classList.toggle('on');
  });
  ru.forEach((item) => {
    item.classList.toggle('on');
    item.classList.toggle('off');
  });
}, 'ShiftRight', 'ControlRight');

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('click', click);
