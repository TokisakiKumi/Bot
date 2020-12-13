const sastrawi = require('sastrawijs');

const kataOhayo = [
    'ohayo',
	'ohayou',
	'pagi',
	'morning',
	'ohayok',
	'bangun'

];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariOhayo = (kata) => new Promise((resolve, reject) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataOhayo)){
            resolve(true)
        }
    }
    resolve(false)
})