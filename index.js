import keyLayout from './keylayout';
import Keyboard from './keyboard';

function initKetboard() {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';

  document.body.append(textArea);
  textArea.setAttribute('rows', 17);
  textArea.setAttribute('cols', 100);

  const virtualKeyboard = document.createElement('div');
  virtualKeyboard.className = 'virtual-keyboard';
  document.body.append(virtualKeyboard);

let textArea;
//DOM object with keyboard
let keyboard;
//list of pair code-key 
let keys = {};
let isCAPSOn = false;
let isShiftOn = false;

function initKeyboard() {
    textArea = document.createElement('textarea');
    textArea.className = 'textarea';
    document.body.append(textArea);
    textArea.setAttribute('rows', 17);
    textArea.setAttribute('cols', 100);

    let virtualKeyboard = document.createElement('div');
    virtualKeyboard.className = 'virtual-keyboard';
    document.body.append(virtualKeyboard);

    keyboard = document.createElement('div');
    keyboard.className = 'virtual-keyboard__keys';
    virtualKeyboard.appendChild(keyboard);
}

function initKeys() {
    for (let row of keyLayout) {
        let keyRow = document.createElement('div');   
        for (let keyData of row) {
            let keyVirtual = new Key(keyData.rus.lower, keyData.rus.upper, keyData.rus.isLetter);
            keyVirtual.addLayout(keyData.eng.lower, keyData.eng.upper, keyData.eng.isLetter); // add the second language

            key = document.createElement('button'); // create element in DOM
            key.innerHTML = keyData.rus.lower;
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
            
            keyVirtual.DOMElement = key; // 
            keys[keyData.code] = keyVirtual; // key - value; value = object with key data
        }
        keyboard.append(keyRow); 
    }
}

function initEvents() {  
    document.addEventListener('keydown', (event) => {
        let key = keys[event.keyCode].DOMElement;
        key.style.background = 'purple';
        key.style.transform = 'translateY(-4px)';
        key.style.transition = 'transform 10ms ease-in';
    });

    document.addEventListener('keydown', (event) => {  // может перенести в верхний ивент?
        if (event.altKey && event.shiftKey) {
            for (let keyCode in keys) { 
                let key = keys[keyCode]; 
                key.switchLayout();
            }
        };
    })  



    document.addEventListener('keypress', (event) => {
        textArea.append(event.key); 
    });

    document.addEventListener('keyup', (event) => {
        let key = keys[event.keyCode].DOMElement;
        key.style.transform = 'translateY(0px)';
        key.style.background = 'rgba(255, 255, 255, 0.5)'
        
        /*for (let keyCode in keys) {                    
            if (keyCode == 13) {  // enter
                let paragraph = '\n';
                textArea.append(paragraph);
                return;
            }
            if (keyCode == 9) {  // tab
                let tab = '   ';
                textArea.append(tab);
                return;
            }
        }*/
    });

    document.addEventListener('keyup', (event) => {    
        for (let keyCode in keys) {                    
            if (keyCode == 8) {  // backspace
                let focus = document.querySelector('.textarea');
                focus.focus();
                return;
            }
        }
    });

    // work with virtual keyboard
    for (let keyCode in keys) {
        let key = keys[keyCode]
        key.DOMElement.addEventListener('click', () => {
            if (keyCode == 20) {
                return onCapsPressed();
            }

            if (keyCode == 16 || keyCode == 17 || keyCode == 18 || keyCode == 91) {   //  shift, ctrl, alt
                return;
            }

            if (keyCode == 13) {   // enter
                let paragraph = '\n';
                textArea.append(paragraph);
                return ;
            }

            if (keyCode == 9) {  // tab
                let tab = '   ';
                textArea.append(tab);
                return;
            }

            let el = key.DOMElement.innerHTML;
            textArea = document.querySelector('.textarea');
            
            /*if (keyCode == 8 || keyCode == 46) {  // backspace, del
                return el.remove();
            }*/

            textArea.append(el);
        });

        key.DOMElement.addEventListener('mousedown', () => {
            key.DOMElement.style.background = 'purple';
            key.DOMElement.style.transform = 'translateY(-4px)';
            key.DOMElement.style.transition = 'transform 10ms ease-in';

            if (keyCode == 16) {
                return onShiftPressed();
            }
        });

        key.DOMElement.addEventListener('mouseup', () => {
            key.DOMElement.style.transform = 'translateY(0px)';
            key.DOMElement.style.background = 'rgba(255, 255, 255, 0.5)'

            if (keyCode == 16) {
                return onShiftDown();
            }
        });
    };

    document.addEventListener('keyup', (event) => {
        if (event.keyCode == 20) {
            onCapsPressed();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == 16) {
            onShiftPressed();
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.keyCode == 16) {
            onShiftDown();
        };
    })
}

function onCapsPressed() {  
    if (isCAPSOn === false) {
        for (let keyCode in keys) {
            let key = keys[keyCode];
            let el = key.getCAPSValues();
            key.DOMElement.innerHTML = el;
        }
    } else {
        for (let keyCode in keys) {
            let key = keys[keyCode];
            let el = key.getLowerValue();
            key.DOMElement.innerHTML = el;
        }
    }

    isCAPSOn = !isCAPSOn;
}

function onShiftPressed() {
    for (let keyCode in keys) {
        let key = keys[keyCode];
        let el = key.getUpperValue();
        key.DOMElement.innerHTML = el;
    }
}

function onShiftDown() {
    for (let keyCode in keys) {
        let key = keys[keyCode];
        let el = key.getLowerValue();
        key.DOMElement.innerHTML = el;
    }
}

initKetboard();
