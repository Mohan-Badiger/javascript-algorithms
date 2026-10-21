function checkInventory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("checking Inventory...")
            resolve()
        }, 1000);
    })
}

function createOrder() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("creating order...")
            resolve()
        }, 2000)
    })
    return promise
}

function chargePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("charging payment...")
            reject(new Error('Failed to charge payment'))
        }, 2000)
    })
}

function sendInvoice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending Invoice...")
        }, 1000)
    })
}

async function main() {
    await checkInventory()
    await createOrder()
    await chargePayment()
    await sendInvoice()
}

main()