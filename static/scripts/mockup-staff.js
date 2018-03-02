const statuses = {
    '3': { "status": Status['OrderPending'], "help": Request['Refill'] },
    '6': { "status": Status['PaymentReceived'], "help": "" },
    '7': { "status": Status['AwaitingOrder'], "help": Request['Help'] }
};

$(() => {
    for (let i in statuses) {
        $('#status-' + i).text(statuses[i]["status"]);
        $('#help-' + i).text(statuses[i]["help"]);
    }
});