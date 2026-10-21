function checkInventory(callback) {
    setTimeout(() => {
        console.log("checking Inventory...")
        callback()
    }, 1000);
}

function createOrder(callback) {
    setTimeout(() => {
        console.log("creating order...")
        callback()
    }, 2000)
}

function chargePayment(callback) {
    setTimeout(() => {
        console.log("charging payment...")
        callback()
    }, 2000)
}

function sendInvoice(callback) {
    setTimeout(() => {
        console.log("Sending Invoice...")
        callback()
    }, 1000)
}

function main() {
    checkInventory(() => {
        createOrder(() => {
            chargePayment(() => {
                sendInvoice(() => {
                    console.log("All Done!")
                })
            })
        })
    })
}

main()