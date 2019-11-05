const keyLayout = [
  [
    {
      code: 'Backquote',
      rus: {
        lower: 'ё',
        upper: 'Ё',
        isLetter: true,
      },
      eng: {
        lower: '`',
        upper: '~',
        isLetter: false,
      },
    },
    {
      code: 'Digit1',
      rus: {
        lower: '1',
        upper: '!',
        isLetter: false,
      },
      eng: {
        lower: '1',
        upper: '!',
        isLetter: false,
      },
    },
    {
      code: 'Digit2',
      rus: {
        lower: '2',
        upper: '\x22',
        isLetter: false,
      },
      eng: {
        lower: '2',
        upper: '@',
        isLetter: false,
      },
    },
    {
      code: 'Digit3',
      rus: {
        lower: '3',
        upper: '№',
        isLetter: false,
      },
      eng: {
        lower: '3',
        upper: '#',
        isLetter: false,
      },
    },
    {
      code: 'Digit4',
      rus: {
        lower: '4',
        upper: ';',
        isLetter: false,
      },
      eng: {
        lower: '4',
        upper: '$',
        isLetter: false,
      },
    },
    {
      code: 'Digit5',
      rus: {
        lower: '5',
        upper: '%',
        isLetter: false,
      },
      eng: {
        lower: '5',
        upper: '%',
        isLetter: false,
      },
    },
    {
      code: 'Digit6',
      rus: {
        lower: '6',
        upper: ':',
        isLetter: false,
      },
      eng: {
        lower: '6',
        upper: '^',
        isLetter: false,
      },
    },
    {
      code: 'Digit7',
      rus: {
        lower: '7',
        upper: ':',
        isLetter: false,
      },
      eng: {
        lower: '7',
        upper: '^',
        isLetter: false,
      },
    },
    {
      code: 'Digit8',
      rus: {
        lower: '8',
        upper: ':',
        isLetter: false,
      },
      eng: {
        lower: '8',
        upper: '^',
        isLetter: false,
      },
    },
    {
      code: 'Digit9',
      rus: {
        lower: '9',
        upper: '(',
        isLetter: false,
      },
      eng: {
        lower: '9',
        upper: '(',
        isLetter: false,
      },
    },
    {
      code: 'Digit0',
      rus: {
        lower: '0',
        upper: ')',
        isLetter: false,
      },
      eng: {
        lower: '0',
        upper: ')',
        isLetter: false,
      },
    },
    {
      code: 'Minus',
      rus: {
        lower: '-',
        upper: '_',
        isLetter: false,
      },
      eng: {
        lower: '-',
        upper: '_',
        isLetter: false,
      },
    },
    {
      code: 'Plus',
      rus: {
        lower: '=',
        upper: '+',
        isLetter: false,
      },
      eng: {
        lower: '=',
        upper: '+',
        isLetter: false,
      },
    },
    {
      code: 'Backspace',
      rus: {
        lower: 'Backspace',
        upper: 'Backspace',
        isLetter: false,
      },
      eng: {
        lower: 'Backspace',
        upper: 'Backspace',
        isLetter: false,
      },
    },
  ],
  [
    {
      code: 'Tab',
      rus: {
        lower: 'Tab',
        upper: 'Tab',
        isLetter: false,
      },
      eng: {
        lower: 'Tab',
        upper: 'Tab',
        isLetter: false,
      },
    },
    {
      code: 'KeyQ',
      rus: {
        lower: 'й',
        upper: 'Й',
        isLetter: true,
      },
      eng: {
        lower: 'q',
        upper: 'Q',
        isLetter: true,
      },
    },
    {
      code: 'KeyW',
      rus: {
        lower: 'ц',
        upper: 'Ц',
        isLetter: true,
      },
      eng: {
        lower: 'w',
        upper: 'W',
        isLetter: true,
      },
    },
    {
      code: 'KeyE',
      rus: {
        lower: 'у',
        upper: 'У',
        isLetter: true,
      },
      eng: {
        lower: 'e',
        upper: 'E',
        isLetter: true,
      },
    },
    {
      code: 'KeyR',
      rus: {
        lower: 'к',
        upper: 'К',
        isLetter: true,
      },
      eng: {
        lower: 'r',
        upper: 'R',
        isLetter: true,
      },
    },
    {
      code: 'KeyT',
      rus: {
        lower: 'е',
        upper: 'Е',
        isLetter: true,
      },
      eng: {
        lower: 't',
        upper: 'T',
        isLetter: true,
      },
    },
    {
      code: 'KeyY',
      rus: {
        lower: 'н',
        upper: 'Н',
        isLetter: true,
      },
      eng: {
        lower: 'y',
        upper: 'Y',
        isLetter: true,
      },
    },
    {
      code: 'KeyU',
      rus: {
        lower: 'г',
        upper: 'Г',
        isLetter: true,
      },
      eng: {
        lower: 'u',
        upper: 'U',
        isLetter: true,
      },
    },
    {
      code: 'KeyI',
      rus: {
        lower: 'ш',
        upper: 'Ш',
        isLetter: true,
      },
      eng: {
        lower: 'i',
        upper: 'I',
        isLetter: true,
      },
    },
    {
      code: 'KeyO',
      rus: {
        lower: 'щ',
        upper: 'Щ',
        isLetter: true,
      },
      eng: {
        lower: 'o',
        upper: 'O',
        isLetter: true,
      },
    },
    {
      code: 'KeyP',
      rus: {
        lower: 'з',
        upper: 'З',
        isLetter: true,
      },
      eng: {
        lower: 'p',
        upper: 'P',
        isLetter: true,
      },
    },
    {
      code: 'BracketLeft',
      rus: {
        lower: 'х',
        upper: 'Х',
        isLetter: true,
      },
      eng: {
        lower: '[',
        upper: '{',
        isLetter: false,
      },
    },
    {
      code: 'BracketRight',
      rus: {
        lower: 'ъ',
        upper: 'Ъ',
        isLetter: true,
      },
      eng: {
        lower: ']',
        upper: '}',
        isLetter: false,
      },
    },
    {
      code: 'Backslash',
      rus: {
        lower: '\x5c',
        upper: '/',
        isLetter: false,
      },
      eng: {
        lower: '\x5c',
        upper: '|',
        isLetter: false,
      },
    },
    {
      code: 'Delete',
      rus: {
        lower: 'Del',
        upper: 'Del',
        isLetter: false,
      },
      eng: {
        lower: 'Del',
        upper: 'Del',
        isLetter: false,
      },
    },
  ],
  [
    {
      code: 'CapsLock',
      rus: {
        lower: 'CapsLock',
        upper: 'CapsLock',
        isLetter: false,
      },
      eng: {
        lower: 'CapsLock',
        upper: 'CapsLock',
        isLetter: false,
      },
    },
    {
      code: 'KeyA',
      rus: {
        lower: 'ф',
        upper: 'Ф',
        isLetter: true,
      },
      eng: {
        lower: 'a',
        upper: 'A',
        isLetter: true,
      },
    },
    {
      code: 'KeyS',
      rus: {
        lower: 'ы',
        upper: 'Ы',
        isLetter: true,
      },
      eng: {
        lower: 's',
        upper: 'S',
        isLetter: true,
      },
    },
    {
      code: 'KeyD',
      rus: {
        lower: 'в',
        upper: 'В',
        isLetter: true,
      },
      eng: {
        lower: 'd',
        upper: 'D',
        isLetter: true,
      },
    },
    {
      code: 'KeyF',
      rus: {
        lower: 'а',
        upper: 'А',
        isLetter: true,
      },
      eng: {
        lower: 'f',
        upper: 'F',
        isLetter: true,
      },
    },
    {
      code: 'KeyG',
      rus: {
        lower: 'п',
        upper: 'П',
        isLetter: true,
      },
      eng: {
        lower: 'g',
        upper: 'G',
        isLetter: true,
      },
    },
    {
      code: 'KeyH',
      rus: {
        lower: 'р',
        upper: 'Р',
        isLetter: true,
      },
      eng: {
        lower: 'h',
        upper: 'H',
        isLetter: true,
      },
    },
    {
      code: 'KeyJ',
      rus: {
        lower: 'о',
        upper: 'О',
        isLetter: true,
      },
      eng: {
        lower: 'j',
        upper: 'J',
        isLetter: true,
      },
    },
    {
      code: 'KeyK',
      rus: {
        lower: 'л',
        upper: 'Л',
        isLetter: true,
      },
      eng: {
        lower: 'k',
        upper: 'K',
        isLetter: true,
      },
    },
    {
      code: 'KeyL',
      rus: {
        lower: 'д',
        upper: 'Д',
        isLetter: true,
      },
      eng: {
        lower: 'l',
        upper: 'L',
        isLetter: true,
      },
    },
    {
      code: 'Semicolon',
      rus: {
        lower: 'ж',
        upper: 'Ж',
        isLetter: true,
      },
      eng: {
        lower: ';',
        upper: ':',
        isLetter: false,
      },
    },
    {
      code: 'Quote',
      rus: {
        lower: 'э',
        upper: 'Э',
        isLetter: true,
      },
      eng: {
        lower: '\x27',
        upper: '\x22',
        isLetter: false,
      },
    },
    {
      code: 'Enter',
      rus: {
        lower: 'ENTER',
        upper: 'ENTER',
        isLetter: false,
      },
      eng: {
        lower: 'ENTER',
        upper: 'ENTER',
        isLetter: false,
      },
    },
  ],
  [
    {
      code: 'ShiftLeft',
      rus: {
        lower: 'Shift',
        upper: 'Shift',
        isLetter: false,
      },
      eng: {
        lower: 'Shift',
        upper: 'Shift',
        isLetter: false,
      },
    },
    {
      code: 'KeyZ',
      rus: {
        lower: 'я',
        upper: 'Я',
        isLetter: true,
      },
      eng: {
        lower: 'z',
        upper: 'Z',
        isLetter: true,
      },
    },
    {
      code: 'KeyX',
      rus: {
        lower: 'ч',
        upper: 'Ч',
        isLetter: true,
      },
      eng: {
        lower: 'x',
        upper: 'X',
        isLetter: true,
      },
    },
    {
      code: 'KeyC',
      rus: {
        lower: 'c',
        upper: 'C',
        isLetter: true,
      },
      eng: {
        lower: 'c',
        upper: 'C',
        isLetter: true,
      },
    },
    {
      code: 'KeyV',
      rus: {
        lower: 'м',
        upper: 'М',
        isLetter: true,
      },
      eng: {
        lower: 'v',
        upper: 'V',
        isLetter: true,
      },
    },
    {
      code: 'KeyB',
      rus: {
        lower: 'и',
        upper: 'И',
        isLetter: true,
      },
      eng: {
        lower: 'b',
        upper: 'B',
        isLetter: true,
      },
    },
    {
      code: 'KeyN',
      rus: {
        lower: 'т',
        upper: 'Т',
        isLetter: true,
      },
      eng: {
        lower: 'n',
        upper: 'N',
        isLetter: true,
      },
    },
    {
      code: 'KeyM',
      rus: {
        lower: 'ь',
        upper: 'Ь',
        isLetter: true,
      },
      eng: {
        lower: 'm',
        upper: 'M',
        isLetter: true,
      },
    },
    {
      code: 'Comma',
      rus: {
        lower: 'б',
        upper: 'Б',
        isLetter: true,
      },
      eng: {
        lower: ',',
        upper: '<',
        isLetter: false,
      },
    },
    {
      code: 'Period',
      rus: {
        lower: 'ю',
        upper: 'Ю',
        isLetter: true,
      },
      eng: {
        lower: '.',
        upper: '>',
        isLetter: false,
      },
    },
    {
      code: 'Slash',
      rus: {
        lower: '.',
        upper: ',',
        isLetter: false,
      },
      eng: {
        lower: '/',
        upper: '?',
        isLetter: false,
      },
    },
    {
      code: 'ArrowUp',
      rus: {
        lower: '▲',
        upper: '▲',
        isLetter: false,
      },
      eng: {
        lower: '▲',
        upper: '▲',
        isLetter: false,
      },
    },
    {
      code: 'ShiftRight',
      rus: {
        lower: 'Shift',
        upper: 'Shift',
        isLetter: false,
      },
      eng: {
        lower: 'Shift',
        upper: 'Shift',
        isLetter: false,
      },
    },
  ],
  [
    {
      code: 'ControlLeft',
      rus: {
        lower: 'Ctrl',
        upper: 'Ctrl',
        isLetter: false,
      },
      eng: {
        lower: 'Ctrl',
        upper: 'Ctrl',
        isLetter: false,
      },
    },
    {
      code: 'MetaLeft',
      rus: {
        lower: 'Win',
        upper: 'Win',
        isLetter: false,
      },
      eng: {
        lower: 'Win',
        upper: 'Win',
        isLetter: false,
      },
    },
    {
      code: 'AltLeft',
      rus: {
        lower: 'Alt',
        upper: 'Alt',
        isLetter: false,
      },
      eng: {
        lower: 'Alt',
        upper: 'Alt',
        isLetter: false,
      },
    },
    {
      code: 'Space',
      rus: {
        lower: ' ',
        upper: ' ',
        isLetter: false,
      },
      eng: {
        lower: ' ',
        upper: ' ',
        isLetter: false,
      },
    },
    {
      code: 'AltRight',
      rus: {
        lower: 'Alt',
        upper: 'Alt',
        isLetter: false,
      },
      eng: {
        lower: 'Alt',
        upper: 'Alt',
        isLetter: false,
      },
    },
    {
      code: 'ArrowLeft',
      rus: {
        lower: '◄',
        upper: '◄',
        isLetter: false,
      },
      eng: {
        lower: '◄',
        upper: '◄',
        isLetter: false,
      },
    },
    {
      code: 'ArrowDown',
      rus: {
        lower: '▼',
        upper: '▼',
        isLetter: false,
      },
      eng: {
        lower: '▼',
        upper: '▼',
        isLetter: false,
      },
    },
    {
      code: 'ArrowRight',
      rus: {
        lower: '►',
        upper: '►',
        isLetter: false,
      },
      eng: {
        lower: '►',
        upper: '►',
        isLetter: false,
      },
    },
    {
      code: 'ControlRight',
      rus: {
        lower: 'Ctrl',
        upper: 'Ctrl',
        isLetter: false,
      },
      eng: {
        lower: 'Ctrl',
        upper: 'Ctrl',
        isLetter: false,
      },
    },
  ],
];

class Key {
  constructor(values, DOMElement, isCapsOn) {
    this.values = values;
    this.DOMElement = DOMElement;
    this.isCapsOn = isCapsOn;
    this.currentLayoutIndex = 0;
    this.maxLayoutIndex = this.values.length - 1;
    this.setInitialValue(isCapsOn);
  }

  setInitialValue(isCapsOn) {
    if (isCapsOn) {
      this.DOMElement.innerHTML = this.getUppercase(false);
    } else {
      this.DOMElement.innerHTML = this.getLowercase(false);
    }
  }

  setCurrentValue(isCapsOn, isShiftOn) {
    if (isCapsOn) {
      if (isShiftOn) {
        this.DOMElement.innerHTML = this.getLowercase(isCapsOn);
      } else {
        this.DOMElement.innerHTML = this.getUppercase(isCapsOn);
      }
    } else if (isShiftOn) {
      this.DOMElement.innerHTML = this.getUppercase(isCapsOn);
    } else {
      this.DOMElement.innerHTML = this.getLowercase(isCapsOn);
    }
  }

  getLowercase(isCapsOn) {
    // no idea
    if (isCapsOn && !this.values[this.currentLayoutIndex].isLetter) {
      return this.values[this.currentLayoutIndex].upper;
    }
    return this.values[this.currentLayoutIndex].lower;
  }

  getUppercase(isCapsOn) {
    // no idea
    if (isCapsOn && !this.values[this.currentLayoutIndex].isLetter) {
      return this.values[this.currentLayoutIndex].lower;
    }

    return this.values[this.currentLayoutIndex].upper;
  }

  switchLayout(isCapsOn) {
    if (this.currentLayoutIndex === this.maxLayoutIndex) {
      this.currentLayoutIndex = 0;
    } else {
      this.currentLayoutIndex++;
    }

    this.setCurrentValue(isCapsOn, false);
  }
}

class Keyboard {
  constructor(keyLayout, keyboardObject, isCapsOn) {
    // set of pairs Code: key
    this.keys = {};
    this.isCapsOn = isCapsOn;
    this.isShiftOn = false;
    this.initKeys(keyLayout, keyboardObject, isCapsOn);
    this.initEvents();
  }

  initKeys(keyLayout, keyboardObject, isCapsOn) {
    for (const row of keyLayout) {
      const keyRow = document.createElement('div');
      for (const keyData of row) {
        const keyDOM = document.createElement('button'); // create element in DOM
        const key = new Key([keyData.rus, keyData.eng], keyDOM, isCapsOn);
        keyRow.append(keyDOM); // add to the row

        const initialValue = keyData.rus.lower;
        if (initialValue === 'Backspace' || initialValue === 'CapsLock' || initialValue === 'SHIFT' || initialValue === 'Shift' || initialValue === 'ENTER') {
          keyDOM.className = 'virtual-keyboard__key virtual-keyboard__key--wide';
        } else if (initialValue === ' ') {
          keyDOM.className = 'virtual-keyboard__key virtual-keyboard__key--extra-wide';
        } else {
          keyDOM.className = 'virtual-keyboard__key';
        }

        this.keys[keyData.code] = key; // key - value; value = object with key data
      }
      keyboardObject.append(keyRow);
    }
  }

  initEvents() {
    document.addEventListener('keydown', (event) => {
      const key = this.keys[event.code];
      key.DOMElement.style.background = 'purple';
      key.DOMElement.style.transform = 'translateY(-4px)';
      key.DOMElement.style.transition = 'transform 10ms ease-in';

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.onShiftDown();
      } else if (event.shiftKey && event.altKey) {
        this.onLayoutSwitch();
      } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {

      } else if (event.code === 'CapsLock') {
        this.onCapsPressed();
      } else if (event.code === 'Tab') {
        this.onTabDown();
      } else if (event.code === 'Backspace') {
        this.onBackspaceDown();
      } else if (event.code === 'Enter') {
        this.onEnterDown();
      } else {
        const value = this.keys[event.code].DOMElement.innerHTML;

        this.onLetterDown(value);
      }
    });

    document.addEventListener('keyup', (event) => {
      const key = this.keys[event.code];
      key.DOMElement.style.transform = 'translateY(0px)';
      key.DOMElement.style.background = 'rgba(255, 255, 255, 0.5)';

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.onShiftUp();
      }
    });

    for (const keyCode in this.keys) {
      const key = this.keys[keyCode];

      key.DOMElement.addEventListener('click', () => {
        if (keyCode == 'ControlLeft' || keyCode == 'ControlRight') {
          return;
        }

        if (keyCode == 'ShiftLeft' || keyCode == 'ShiftRight') {

        } else if (keyCode == 'MetaLeft' || keyCode == 'MetaRight') {

        } else if (keyCode == 'AltLeft' || keyCode == 'AltRight') {

        } else if (keyCode == 'CapsLock') {
          this.onCapsPressed();
        } else if (keyCode == 'Tab') {
          this.onTabDown();
        } else if (keyCode == 'Backspace') {
          this.onBackspaceDown();
        } else if (keyCode == 'Enter') {
          this.onEnterDown();
        } else {
          this.onLetterDown(key.DOMElement.innerHTML);
        }
      });

      key.DOMElement.addEventListener('mousedown', () => {
        key.DOMElement.style.background = 'purple';
        key.DOMElement.style.transform = 'translateY(-4px)';
        key.DOMElement.style.transition = 'transform 10ms ease-in';
      });

      key.DOMElement.addEventListener('mouseup', () => {
        key.DOMElement.style.transform = 'translateY(0px)';
        key.DOMElement.style.background = 'rgba(255, 255, 255, 0.5)';
      });
    }

    this.keys.ShiftLeft.DOMElement.addEventListener('mousedown', () => {
      this.onShiftDown();
    });

    this.keys.ShiftRight.DOMElement.addEventListener('mousedown', () => {
      this.onShiftDown();
    });

    this.keys.ShiftLeft.DOMElement.addEventListener('mouseup', () => {
      this.onShiftUp();
    });

    this.keys.ShiftRight.DOMElement.addEventListener('mouseup', () => {
      this.onShiftUp();
    });
  }


  onShiftDown() {
    this.isShiftOn = true;

    for (const keyCode in this.keys) {
      this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
    }
  }

  onShiftUp() {
    this.isShiftOn = false;

    for (const keyCode in this.keys) {
      this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
    }
  }

  onLayoutSwitch() {
    for (const keyCode in this.keys) {
      this.keys[keyCode].switchLayout(this.isCapsOn);
    }
  }

  onCapsPressed() {
    this.isCapsOn = !this.isCapsOn;

    for (const keyCode in this.keys) {
      this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
    }
  }

  onTabDown() {
    const textarea = document.querySelector('.textarea');

    textarea.append('  ');
  }

  onBackspaceDown() {
    const textarea = document.querySelector('.textarea');
    textarea.value = textarea.value.slice(0, -1);
  }

  onEnterDown() {
    const textarea = document.querySelector('.textarea');
    textarea.append('\n');
  }

  onLetterDown(value) {
    const textarea = document.querySelector('.textarea');
    textarea.append(value);
  }
}

textArea = document.createElement('textarea');
textArea.className = 'textarea';
document.body.append(textArea);
textArea.setAttribute('rows', 17);
textArea.setAttribute('cols', 100);

const virtualKeyboard = document.createElement('div');
virtualKeyboard.className = 'virtual-keyboard';
document.body.append(virtualKeyboard);

const keyboard = document.createElement('div');
keyboard.className = 'virtual-keyboard__keys';
virtualKeyboard.appendChild(keyboard);

const kb = new Keyboard(keyLayout, keyboard, false);
