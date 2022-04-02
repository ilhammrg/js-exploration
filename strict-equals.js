// This strictEquals function should return the same output as a === b
// TODO: add test cases for all possible inputs

function strictEquals(a, b) {
    if (Object.is(a, b)) {
        const isValueNaN = Number.isNaN(a);
        return !isValueNaN;
    } else {
        const isValuesFinite = Number.isFinite(a) && Number.isFinite(b);
        const isDivideResultNaN = Object.is(a/b, NaN);
        return isValuesFinite && isDivideResultNaN;
    }
}
