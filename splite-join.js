const lyrics = 'ami bOndhU kala pAkhi tumi jano ki. Bosonto kale tomay bolte pari ni.Kala kala sada sada';
const parts = lyrics.split('  ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);


const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);