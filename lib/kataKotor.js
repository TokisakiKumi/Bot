const sastrawi = require('sastrawijs');

const kataKasar = [
	'аnjing',
	'mеmek',
	'јembut',
	'аnjing',
	'ајg',
    'anjing',
    'kontol',
    'memek',
    'jembut',
    'bangsat',
	'bangsad',
    'bgst',
    'bgsd',
    'kntl',
    'ktl',
	'anjg',
    'ajg',
    'mmk',
    'jmbut',
    'jmbt',
	'jmbot',
	'babi',
	'hentai',
	'jembod',
	'jembot',
	'pepek',
    'ppk',
    'titit',
    'titid',
    'ngentot',
	'ngentod',
	'ngntod',
	'ken2',
	'kentu',
	'kenthu'

];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve, reject) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})