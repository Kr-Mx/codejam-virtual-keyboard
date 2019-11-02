const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.innerHTML = '<input class="textarea"> <div class="keyBoard"></div>';
document.body.prepend(wrapper);

const keyRow1 = [
  ['Backquote', 'ё', 'Ё', '`', '~'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '"', '2', '@'],
  ['Digit3', '3', '№', '3', '#'],
  ['Digit4', '4', ';', '4', '$'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', ':', '6', '^'],
  ['Digit7', '7', '?', '7', '&'],
  ['Digit8', '8', '', '8', ''],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Digit-', '-', '', '-', ''],
  ['Equal=', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
];

const keyRow2 = [
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'й', 'Й', 'q', 'Q'],
  ['KeyW', 'ц', 'Ц', 'w', 'W'],
  ['KeyE', 'у', 'У', 'e', 'E'],
  ['KeyR', 'к', 'К', 'r', 'R'],
  ['KeyT', 'е', 'Е', 't', 'T'],
  ['KeyY', 'н', 'Н', 'y', 'Y'],
  ['KeyU', 'г', 'Г', 'u', 'U'],
  ['KeyI', 'ш', 'Ш', 'i', 'I'],
  ['KeyO', 'щ', 'Щ', 'o', 'O'],
  ['KeyP', 'з', 'З', 'p', 'P'],
  ['BracketLeft', 'х', 'Х', '[', '{'],
  ['BracketRight', 'ъ', 'Ъ', ']', '}'],
  ['Backslash', '&#92;', '/', '&#92;', '|'],
];

const keyRow3 = [
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'ф', 'Ф', 'a', 'A'],
  ['KeyS', 'ы', 'Ы', 's', 'S'],
  ['KeyD', 'в', 'В', 'd', 'D'],
  ['KeyF', 'а', 'А', 'f', 'F'],
  ['KeyG', 'п', 'П', 'g', 'G'],
  ['KeyH', 'р', 'Р', 'h', 'H'],
  ['KeyJ', 'о', 'О', 'j', 'J'],
  ['KeyK', 'л', 'Л', 'k', 'K'],
  ['KeyL', 'д', 'Д', 'l', 'L'],
  ['Semicolon', 'ж', 'Ж', ';', ';'],
  ['Quote', 'э', 'Э', '\'', '\''],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
];

const keyRow4 = [
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'я', 'Я', 'z', 'Z'],
  ['KeyX', 'ч', 'Ч', 'x', 'X'],
  ['KeyC', 'с', 'С', 'c', 'C'],
  ['KeyV', 'м', 'М', 'v', 'V'],
  ['KeyB', 'и', 'И', 'b', 'B'],
  ['KeyN', 'т', 'Т', 'n', 'N'],
  ['KeyM', 'ь', 'Ь', 'm', 'M'],
  ['Comma', 'б', 'Б', ',', ','],
  ['Period', 'ю', 'Ю', '.', '.'],
  ['Slash', '.', '.', '/', '/'],
  ['ArrowUp', '&#8593;', '&#8593;', '&#8593;', '&#8593;'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
];

const keyRow5 = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' '],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '&#8592;', '&#8592;', '&#8592;', '&#8592;'],
  ['ArrowDown', '&#8595;', '&#8595;', '&#8595;', '&#8595;'],
  ['ArrowRight', '&#8594;', '&#8594;', '&#8594;', '&#8594;'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
];

const keyRow = [keyRow1, keyRow2, keyRow3, keyRow4, keyRow5];
for (let j = 0; j < keyRow.length; j++) {
  const keyBoard = document.querySelector('.keyBoard');
  const row = document.createElement('div');
  row.className = 'row';
  keyBoard.append(row);
  for (let i = 0; i < keyRow[j].length; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    key.innerHTML = `${keyRow[j][i][1]}`;
    row.append(key);
  }
}
