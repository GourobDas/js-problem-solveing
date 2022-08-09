function woodCalculotor(chairQuantity, tableQuantity, bedQuantity) {
    const parChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;

    const chairWood = chairQuantity * parChairWood;
    const tableWood = tableQuantity * parTableWood;
    const bedWood = bedQuantity * parBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

const totalWood = woodCalculotor(0, 0, 3);
console.log(totalWood);