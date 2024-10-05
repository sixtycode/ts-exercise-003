/** ● Write a code to display the multiplication table of a given integer.
 *  ○ Example : Number → 9
 *  ○ Output :
 *      ■ 9 x 1
 *      ■ 9 x 2
 *      ■ …
 *      ■ 9 x 10
 */
const _inputmulti: number = 9;
let _counter: number = 1;
while (_counter <= 10) {
  console.log(_inputmulti + " x " + _counter);
  _counter++;
}

/**  ● Write a code to check whether a string is a palindrome or not.
 *  ○ Example : ‘madam’ → palindrome
 */
const _inputdrome: string = "madam";
const _revdrome: string = _inputdrome.split("").reverse().join("");
console.log(_inputdrome === _revdrome ? "palindrome" : "not palindrome");

/**  ● Write a code to convert centimeter to kilometer.
 *  ○ Example : 100000 → “1 km”
 */
const _centimeter: number = 100000;
console.log(`${_centimeter / 100000} km`);

/**  ● Write a code to format number as currency (IDR)
 *  ○ Example : 1000 → “Rp. 1.000,00”
 */
const _money: number = 1000;
function rupiahUang(_uang: number): string {
  let _converter: string = _uang.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
  });
  return _converter;
}
console.log(rupiahUang(_money));

/**  ● Write a code to remove the first occurrence of a given “search string” from a string
 *  ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
 */
const _inputwords: string = "Hello world";
const _searchstring: string = "ell";
console.log(_inputwords.replace(_searchstring, ""));

/**  ● Write a code to capitalize the first letter of each word in a string
 *  ○ Example : “hello world” → “Hello World”
 */
let _inputcapit: string = "hello world";
let _capitalize: string[] = [];
_capitalize[0] = _inputcapit[0].toUpperCase();
_counter = 1;
while (_counter < _inputcapit.length) {
  if (_inputcapit[_counter] === " ") {
    _capitalize.push(_inputcapit[_counter]);
    _counter++;
    if (_inputcapit[_counter] !== undefined) {
      _capitalize[_counter] = _inputcapit[_counter].toUpperCase();
    }
  } else {
    _capitalize.push(_inputcapit[_counter]);
  }
  _counter++;
}
console.log(_capitalize.toString().replace(/,/g, ""));

/** Exercise
 *  ● Write a code to swap the case of each character from string
 * ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
 */
let _inputswap: string = "The QuiCk BrOwN Fox";
let _swapize: string[] = [];
_counter = 0;
while (_counter < _inputswap.length) {
  if (_inputswap[_counter] === _inputswap[_counter].toLowerCase()) {
    _swapize[_counter] = _inputswap[_counter].toUpperCase();
  } else if (_inputswap[_counter] === " ") {
    _swapize.push(_inputswap[_counter]);
    _counter++;
    if (_inputswap[_counter] !== undefined) {
      if (_inputswap[_counter] === _inputswap[_counter].toLowerCase()) {
        _swapize.push(_inputswap[_counter].toUpperCase());
      } else {
        _swapize[_counter] = _inputswap[_counter].toLowerCase();
      }
    }
  } else {
    _swapize.push(_inputswap[_counter].toLowerCase());
  }
  _counter++;
}
console.log(_swapize.toString().replace(/,/g, ""));

/**  ● Write a code to find the largest of two given integers
 *  ○ Example : num1 = 42, num2 = 27 → 42
 */
const _numberone: number = 42;
const _numbertwo: number = 27;
console.log(_numberone > _numbertwo ? _numberone : _numbertwo);

/**  ● Write a conditional statement to sort three numbers
 *  ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
 */
const _numone: number = 42;
const _numtwo: number = 27;
const _numthree: number = 18;
if (_numone < _numtwo && _numone < _numthree) {
  if (_numtwo < _numthree) {
    console.log(`${_numone}, ${_numtwo}, ${_numthree}`);
  } else {
    console.log(`${_numone}, ${_numthree}, ${_numtwo}`);
  }
} else if (_numtwo < _numone && _numtwo < _numthree) {
  console.log(_numtwo);
  if (_numtwo < _numthree) {
    if (_numone > _numthree) {
      console.log(_numthree);
      console.log(_numone);
    } else {
      console.log(_numone);
      console.log(_numthree);
    }
  } else {
    console.log(_numthree);
    console.log(_numtwo);
  }
} else if (_numthree < _numone && _numthree < _numtwo) {
  console.log(_numthree);
  if (_numtwo < _numthree) {
    console.log(_numtwo);
    console.log(_numthree);
  } else {
    if (_numtwo > _numone) {
      console.log(_numone);
      console.log(_numtwo);
    } else {
      console.log(_numtwo);
      console.log(_numone);
    }
  }
} else {
  if (_numone < _numtwo && _numone < _numthree) {
    console.log(`${_numone}, ${_numtwo}, ${_numthree}`);
  } else {
    if (_numtwo < _numthree && _numtwo < _numone) {
      console.log(`${_numtwo}, ${_numthree}, ${_numone}`);
    } else {
      if (_numone > _numtwo && _numone > _numthree) {
        console.log(`${_numthree}, ${_numtwo}, ${_numone}`);
      } else {
        if (_numthree > _numone && _numthree > _numtwo) {
          console.log(`${_numone}, ${_numtwo}, ${_numthree}`);
        } else {
          console.log(`${_numthree}, ${_numone}, ${_numtwo}`);
        }
      }
    }
  }
}

/**  ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
 * type.
 *  ○ Example : “hello” → 1
 */
const _inputType: string = "hello";
// const _inputType: number = 123;
// const _inputType: boolean = true;

if (typeof _inputType === typeof "") {
  console.log(`${_inputType} -> 1`);
} else if (typeof _inputType === typeof 0) {
  console.log(`${_inputType} -> 2`);
} else {
  console.log(`typeof ${typeof _inputType} value ${_inputType} -> 3`);
}

/**  ● Write a code to change every letter a into * from a string of input
 *  ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
 */
const _inputchanger: string = "An apple a day keeps the doctor away";
console.log(_inputchanger.toLowerCase().replace(/[a]/g, "*"));
