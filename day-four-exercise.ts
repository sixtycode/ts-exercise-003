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
const _revdrome: string = _inputdrome.split('').reverse().join('');
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
console.log(_inputwords.replace("ell", ""));

/**  ● Write a code to capitalize the first letter of each word in a string
 *  ○ Example : “hello world” → “Hello World”
 */


/** Exercise
 *  ● Write a code to swap the case of each character from string 
 * ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
 */


/**  ● Write a code to find the largest of two given integers
 *  ○ Example : num1 = 42, num2 = 27 → 42
 */


/**  ● Write a conditional statement to sort three numbers
 *  ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
 */


/**  ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
 * type.
 *  ○ Example : “hello” → 1
 */


/**  ● Write a code to change every letter a into * from a string of input
 *  ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
 */