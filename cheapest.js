const phones = [
    { name: 'sumsung', camera: 12, storage: '32gb', price: 40000, colour: 'silver' },
    { name: 'Oneplus', camera: 12, storage: '32gb', price: 38000, colour: 'silver' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 140000, colour: 'silver' },
    { name: 'Htc', camera: 12, storage: '32gb', price: 48000, colour: 'silver' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, colour: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 30000, colour: 'silver' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myPhone = cheapestPhone(phones);
console.log(myPhone);