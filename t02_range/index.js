/*
    Task name: Range
*/

class Export {
    checkDivision(beginRange = 1, endRange = 60) {
        let str = '', divBy2 = false, divBy3 = false, divBy10 = false;

        if ( beginRange < endRange &&
             Number.isInteger(beginRange) &&
             Number.isInteger(endRange) ) {
            for (; beginRange <= endRange; beginRange++) {
                str += beginRange;
            if (beginRange % 2 === 0) {
                str += ' is divisible by 2';
                divBy2 = true;
            }
            if (beginRange % 3 === 0) {
                if (divBy2) {
                    str += ',';
                }
                str += ' is divisible by 3';
                divBy3 = true;
            }
            if (beginRange % 10 === 0) {
                if (divBy2 || divBy3) {
                    str += ',';
                }
                str += ' is divisible by 10';
                divBy10 = true;
            }
            if (!divBy2 &&
                !divBy3 &&
                !divBy10) {
                str += ' -';
            }
            str += `\n`;

        }
        console.log(str);
    } else {
            console.log('Wrong input! Please, retry!');
        }
    }
};


module.exports = new Export();


/* SYNOPSIS */
const i = require('./index');

console.log('*** Range is 3 - 7 checkDivision(3,7) ***');

i.checkDivision(3, 7);

console.log('\n*** Range is 58 - ... checkDivision(58) ***');

i.checkDivision(58);

console.log('\n*** Range is ... - ... checkDivision() ***');

i.checkDivision();