/*
Task name: Anonymous
*/

const Anonymous = class {
    constructor() {}

    getAnonymous(name, alias, affiliation) {
        return {name, alias, affiliation};
    }

};

module.exports = new Anonymous();

/* SYNOPSYS */
const i = require('./index');

const mandarin = i.getAnonymous('Unknown', 'Mandarin', 'Ten Rings');

console.log([
    mandarin.name,
    mandarin.alias,
    mandarin.affiliation,
].join('\n'));

/* My own test */
/*
console.log( '\n' + (mandarin.affiliation).toUpperCase() );
console.log( (mandarin.alias).toUpperCase() );
console.log( (mandarin.name).toUpperCase() );*/
