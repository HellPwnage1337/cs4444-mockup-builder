const statuses = {
    '3': { "status": Status['OrderPending'], "help": Request['Refill'] },
    '6': { "status": Status['PaymentReceived'], "help": "" },
    '7': { "status": Status['AwaitingOrder'], "help": Request['Help'] }
};

$(window).ready(() => {
    for (let i in statuses) {
        $('#status-' + i).text(statuses[i]["status"]);
        $('#help-' + i).text(statuses[i]["help"]);
    }

    $('.show-table-modal').click(() => {
        let tableNumber = $(this).data('tableNumber');
        console.log('clicked on table %s', tableNumber);

        let tableStatus = statuses.hasOwnProperty(tableNumber) ? statuses[tableNumber] : {
            "status": Status['Inactive'], "help": Request['None']
        };

        $('#table-modal-number').text(tableNumber);
        $('#table-modal-status').text(tableStatus['status']);
        $('#table-modal-help').text(tableStatus['help']);

        $('#modal-show').click();
    });
});