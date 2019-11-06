import Key from './key';

/* eslint class-methods-use-this: ["error", { "exceptMethods":
["onTabDown", "onTabClick", "onAltUp", "onBackspaceDown", "onBackspaceUp", "onEnterDown",
"onLetterDown"] }] */
export default class Keyboard {
  constructor(keyLayout, keyboardObject, isCapsOn) {
    // set of pairs Code: key
    this.keys = {};
    this.isCapsOn = isCapsOn;
    this.isShiftOn = false;
    this.initKeys(keyLayout, keyboardObject, isCapsOn);
    this.initEvents();
  }

  initKeys(keyLayout, keyboardObject, isCapsOn) {
    keyLayout.forEach((row) => {
      const keyRow = document.createElement('div');
      row.forEach((keyData) => {
        const keyDOM = document.createElement('button'); // create element in DOM
        const key = new Key([keyData.rus, keyData.eng], keyDOM, isCapsOn);
        keyRow.append(keyDOM); // add to the row

        const initialValue = key.values[key.currentLayoutIndex].lower;
        if (initialValue === 'Backspace' || initialValue === 'CapsLock' || initialValue === 'SHIFT' || initialValue === 'Shift' || initialValue === 'ENTER') {
          keyDOM.className = 'virtual-keyboard__key virtual-keyboard__key--wide';
        } else if (initialValue === ' ') {
          keyDOM.className = 'virtual-keyboard__key virtual-keyboard__key--extra-wide';
        } else {
          keyDOM.className = 'virtual-keyboard__key';
        }

        this.keys[keyData.code] = key; // key - value; value = object with key data
      });
      keyboardObject.append(keyRow);
    });
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
        return;
      } if (event.code === 'CapsLock') {
        this.onCapsPressed();
      } else if (event.code === 'Tab') {
        this.onTabDown();
      } else if (event.code === 'MetaLeft' || event.code === 'MetaRight') {
        return;
      } if (event.code === 'Backspace') {
        return;
      } if (event.code === 'AltLeft' || event.code === 'AltRight') {
        return;
      } if (event.code === 'Enter') {
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
      } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
        event.preventDefault();
        this.onAltUp();
      } else if (event.code === 'Backspace' || event.code === 'Backspace') {
        this.onBackspaceUp();
      }
    });

    Object.keys(this.keys).forEach((keyCode) => {
      const key = this.keys[keyCode];

      key.DOMElement.addEventListener('click', () => {
        if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
          return;
        }

        if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
          return;
        } if (keyCode === 'MetaLeft' || keyCode === 'MetaRight') {
          return;
        } if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
          return;
        } if (keyCode === 'Delete') {
          return;
        } if (keyCode === 'CapsLock') {
          this.onCapsPressed();
        } else if (keyCode === 'Tab') {
          this.onTabClick();
        } else if (keyCode === 'Backspace') {
          this.onBackspaceDown();
        } else if (keyCode === 'Enter') {
          this.onEnterDown();
        } else {
          this.onLetterDown(key.DOMElement.innerHTML);
        }
      });
    });

    Object.keys(this.keys).forEach((keyCode) => {
      const key = this.keys[keyCode];

      key.DOMElement.addEventListener('mousedown', () => {
        key.DOMElement.style.background = 'purple';
        key.DOMElement.style.transform = 'translateY(-4px)';
        key.DOMElement.style.transition = 'transform 10ms ease-in';
      });

      key.DOMElement.addEventListener('mouseup', () => {
        key.DOMElement.style.transform = 'translateY(0px)';
        key.DOMElement.style.background = 'rgba(255, 255, 255, 0.5)';
      });
    });

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

    this.keys.Backspace.DOMElement.addEventListener('mouseup', () => {
      this.onBackspaceUp();
    });

    this.keys.AltLeft.DOMElement.addEventListener('mouseup', () => {
      this.onAltUp();
    });

    this.keys.AltRigth.DOMElement.addEventListener('mouseup', () => {
      this.onAltUp();
    });
    this.keys.Alt.DOMElement.addEventListener('mouseup', () => {
      this.onAltUp();
    });
  }


  onShiftDown() {
    this.isShiftOn = true;

    Object.values(this.keys).forEach((key) => {
      key.setCurrentValue(this.isCapsOn, this.isShiftOn);
    });
  }

  onShiftUp() {
    this.isShiftOn = false;

    Object.values(this.keys).forEach((key) => {
      key.setCurrentValue(this.isCapsOn, this.isShiftOn);
    });
  }

  onLayoutSwitch() {
    Object.values(this.keys).forEach((key) => {
      key.switchLayout(this.isCapsOn);
    });
  }

  onCapsPressed() {
    this.isCapsOn = !this.isCapsOn;

    Object.values(this.keys).forEach((key) => {
      key.setCurrentValue(this.isCapsOn, this.isShiftOn);
    });
  }

  onTabDown() {
    const textarea = document.querySelector('.textarea');
    // textarea.selectionEnd;
    textarea.append('  ');
    textarea.focus();
  }

  onTabClick() {
    const textarea = document.querySelector('.textarea');
    textarea.append('  ');
    // textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }

  onAltUp() {
    const textarea = document.querySelector('.textarea');
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    textarea.focus();
  }

  onBackspaceDown() {
    const textarea = document.querySelector('.textarea');
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  }

  onBackspaceUp() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }

  onEnterDown() {
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    textarea.append('\n');
  }

  onLetterDown(value) {
    const textarea = document.querySelector('.textarea');
    textarea.append(value);
  }
}
