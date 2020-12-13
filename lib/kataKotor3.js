const sastrawi = require('sastrawijs');

const kataJahat = [
    'rein',
	'kucing',
	'kucingnya',
	'reinya',
	'pussy',
	'cat',
	'neko',
	'catgirl',
	'puss'

];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariJahat = (kata) => new Promise((resolve, reject) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataJahat)){
            resolve(true)
        }
    }
    resolve(false)
})