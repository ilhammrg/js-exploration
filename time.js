let ms = 1000;

function generateOneMinuetOffsetISO() {
    return new Date(Date.now() + 60 * ms).toISOString();
}

function generateOneMinuetOffsetMs() {
    return Date.now() + 60 * ms;
}

function generateOffsetISO(second) {
    return new Date(Date.now() + second * ms).toISOString();
}

function generateOffsetMs(second) {
    return Date.now() + second * ms;
}
