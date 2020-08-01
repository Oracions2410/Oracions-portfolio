function maxLen(stringValues, max = 255) {

    let fields = []

    for (v in stringValues) {
        if (String(stringValues[v]).length > parseInt(max)) {
            fields.push(v)
        }
    }
    return fields.length === 0 ? { status: true } : { status: false, fields }
}

function minLen(stringValues, min = 2) {
    let fields = []

    for (v in stringValues) {
        if (String(stringValues[v]).length < parseInt(min)) {
            fields.push(v)
        }
    }
    return fields.length === 0 ? { status: true } : { status: false, fields }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


module.exports = { maxLen, minLen, validateEmail }