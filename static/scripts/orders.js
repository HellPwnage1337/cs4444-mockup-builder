function Order(tableNumber, orderId, items) {
    return {
        "id"    : orderId,
        "table" : tableNumber,
        "items" : items
    };
};

function Item(itemId, name, price, request, allergies) {
    return {
        "id": itemId,
        "name": name,
        "price": price,
        "request": request,
        "allergies": allergies
    };
};

const Orders = [
    Order(3, 1438, [
        Item(3, "Diet Coke", 3.99, "Wedge of lemon"),
        Item(7, "Hot Dog", 5.99, undefined, "Gluten intolerant")
    ]),

    Order(6, 1439, [
        Item(2, "Coke", 3.99),
        Item(4, "Fried Pickles", 4.99),
        Item(8, "Hamburger", 5.99, "No tomato, extra pickles")
    ])
];