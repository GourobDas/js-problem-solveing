const names = ['abul', 'kabul', 'babul', 'sobul', 'mobul', 'bulbul', 'abul', 'sobul', 'kabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniquename = removeDuplicate(names);
console.log(uniquename);