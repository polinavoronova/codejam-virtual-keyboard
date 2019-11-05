const keyLayout = [
    [
        {
            code: 192,
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
            code: 49,
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
            code: 50,
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
            code: 51,
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
            code: 52,
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
            code: 53,
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
            code: 54,
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
            code: 55,
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
            code: 56,
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
            code: 57,
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
            code: 48,
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
            code: 189,
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
            code: 187,
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
            code: 8,
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
        }
    ],  
    [
        {
            code: 9,
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
            code: 81,
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
            code: 87,
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
            code: 69,
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
            code: 82,
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
            code: 84,
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
            code: 89,
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
            code: 85,
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
            code: 73,
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
            code: 79,
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
            code: 80,
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
            code: 219,
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
            code: 221,
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
            code: 220,
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
            code: 46,
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
        }
    ],  
    [
        {
            code: 20,
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
            code: 65,
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
            code: 83,
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
            code: 68,
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
            code: 70,
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
            code: 71,
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
            code: 72,
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
            code: 74,
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
            code: 75,
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
            code: 76,
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
            code: 186,
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
            code: 222,
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
            code: 13,
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
        }
    ],
    [
        {
            code: 16,
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
            code: 90,
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
            code: 88,
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
            code: 67,
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
            code: 86,
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
            code: 66,
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
            code: 78,
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
            code: 77,
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
            code: 188,
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
            code: 190,
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
            code: 191,
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
            code: 38,
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
            code: 16,
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
        }
    ],
    [
        {
            code: 17,
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
            code: 91,
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
            code: 18,
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
            code: 32,
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
            code: 18,
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
            code: 37,
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
            code: 40,
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
            code: 39,
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
            code: 17,
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
        }
    ]
] 

class Key {
    constructor(values, DOMElement, isCapsOn) {
        this.values = values;
        this.DOMElement = DOMElement;
        this.isCapsOn = isCapsOn;
        this.currentLayoutIndex = 0;
        this.maxLayoutIndex = this.values.length -1;
    }
 
    setCurrentValue(isCapsOn,isShiftOn) { 
        if (isCapsOn) {
            if(isShiftOn) {
                this.DOMElement.innerHTML = this.getLowercase(isCapsOn);
            } else {
                this.DOMElement.innerHTML = this.getUppercase(isCapsOn);
            }
        }
    }

    getLowercase(isCapsOn) {
        if (isCapsOn && this.values[this.currentLayoutIndex].isLetter) {
            return this.values[this.currentLayoutIndex].upper;
        }

        return this.values[this.currentLayoutIndex].lower;
    }

    getUppercase(isCapsOn) {
        if (isCapsOn && this.values[this.currentLayoutIndex].isLetter) {
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
    }

    initKeys(keyLayout, keyboardObject, isCapsOn) {
        for (let row of keyLayout) {
            let keyRow = document.createElement('div');   
            for (let keyData of row) {    
                let keyDOM = document.createElement('button'); // create element in DOM
                let key = new Key([keyData.rus, keyData.eng], keyDOM, isCapsOn); 
                keyRow.append(key); // add to the row
                
                let initialValue = keyData.rus.lower; 
                if (initialValue === 'Backspace' || initialValue === 'CapsLock' || initialValue === 'SHIFT' || initialValue === 'Shift' || initialValue === 'ENTER') {
                    key.className = 'virtual-keyboard__key virtual-keyboard__key--wide';
                }
                else if (initialValue === ' ') {
                    key.className = 'virtual-keyboard__key virtual-keyboard__key--extra-wide';
                } else {
                    key.className = 'virtual-keyboard__key';    
                }

                this.keys[keyData.code] = key; // key - value; value = object with key data
            }
            keyboardObject.append(keyRow); 
        }
    }

    initEvents(keyboardObject) {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                onShiftDown();
            }

            else if (event.shiftKey && event.altKey) {
                onLayoutSwitch();
            }

            else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
                return;
            }

            else if (event.code === 'CapsLock') {
                onCapsPressed();
            }

            else if (event.code === 'Tab') {
                onTabDown();
            }

            else if (event.code === 'Backspace') {
                onBackspaceDown();
            }

            else if (event.code === 'Enter') {
                onEnterDown();
            } else {
                onLetterDown(event.target.innerHTML);
            }
        
        });

        for (let keyCode in this.keys) {
            let key = this.keys[keyCode];

            key.DOMElement.addEventListener('click', (keyCode) => {
                if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
                    onShiftDown();
                }

                else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
                    return;
                }
    
                else if (keyCode === 'CapsLock') {
                    onCapsPressed();
                }
    
                else if (keyCode === 'Tab') {
                    onTabDown();
                }
    
                else if (keyCode === 'Backspace') {
                    onBackspaceDown();
                }
    
                else if (keyCode === 'Enter') {
                    onEnterDown();
                } else {
                    onLetterDown(keyCode);
                }
            })
        }
    }


    onShiftDown() {
        this.isShiftOn = true;

        for (let keyCode in this.keys) {
            this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
        }
    }

    onShiftUp() {
        this.isShiftOn = false;

        for (let keyCode in this.keys) {
            this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
        }
    }
    
    onLayoutSwitch() {
        for (let keyCode in this.keys) {
            this.keys[keyCode].switchLayout(this.isCapsOn);
        }
    }

    onCapsPressed() {
        this.isCapsOn = !this.isCapsOn;

        for (let keyCode in this.keys) {
            this.keys[keyCode].setCurrentValue(this.isCapsOn, this.isShiftOn);
        }
    }

    onTabDown() {
        const textarea = document.getElementsByClassName('.textarea');

        textarea.append('  ');
    }

    onBackspaceDown() {
        const textarea = document.getElementsByClassName('.textarea');
        textarea.value = textarea.value.slice(0, -1);

    }

    onEnterDown() {
        const textarea = document.getElementsByClassName('.textarea');
        textarea.append('\n');
    }

    onLetterDown(value) {
        const textarea = document.getElementsByClassName('.textarea');
        textarea.append(value);
    }
}
