const lyrics = ' ami bOndhU kala pAkhi tumi jano ki. Bosonto kale tomay bolte pari ni';

const searchstrins = 'BonDhu'
// const doesExist = lyrics.includes(searchstrins);

const lyricsToLowerCase = lyrics.toLowerCase();
const searchToLowerCase = searchstrins.toLowerCase();
const doesExist = lyricsToLowerCase.includes(searchToLowerCase);
/************************************************/
// one lice code
// const doesExistInOneLine = lyrics.toLowerCase().includes(searchstrins.toLowerCase());
// console.log(doesExistInOneLine);
/************************************/
// console.log(lyricsToLowerCase);
// console.log(searchToLowerCase);
// console.log(doesExist);

// ---------------------------------
// indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kalla'));

if (lyrics.indexOf('tumi') !== -1) {
    console.log('exists inside to line');
}
else {
    console.log("dose not exisit");
}



