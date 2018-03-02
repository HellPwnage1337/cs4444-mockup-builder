function Order(tableNumber, orderId, items) {
    return {
        "id"    : orderId,
        "table" : tableNumber,
        "items" : items
    };
};

function Item(itemId, name, request, allergies) {
    return {
        "id": itemId,
        "name": name,
        "request": request,
        "allergies": allergies
    };
};

const Orders = [
    Order(3, 1438, [
        Item(3, "Diet Coke", "Wedge of lemon"),
        Item(7, "Hot Dog", undefined, "Gluten intolerant")
    ]),

    Order(6, 1439, [
        Item(2, "Coke"),
        Item(4, "Fried Pickles"),
        Item(8, "Hamburger", "No tomato, extra pickles")
    ])
];