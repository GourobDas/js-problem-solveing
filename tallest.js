function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        // let largest = numbers[0];
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;


}

const hights = [167, 190, 120, 165, 137];
const tallest = maxInArray(hights);
console.log('tallest persone is:', tallest);