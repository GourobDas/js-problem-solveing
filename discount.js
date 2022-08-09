function ticketPrice(ticketQuantity) {
    const first100Reat = 100;
    const second100Reat = 90;
    const restTicketReat = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Reat;
        return price;

    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Reat;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Reat;
        const totelPrice = first100Price + restTicketPrice;
        return totelPrice;
    }
    else {
        const first100Price = 100 * first100Reat;
        const second100Price = 100 * second100Reat;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketReat;
        const totelPrice = first100Price + second100Price + restTicketPrice;
        return totelPrice;
    }

}

const price = ticketPrice(280);
console.log('My totel Price:', price);

