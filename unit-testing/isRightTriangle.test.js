const isRightTriangle = require('./isRIghtTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('0, 2, 8 is not triangle', () => {
    expect(isRightTriangle(0, 2, 8)).toBe(false);
});

test('A, 4, 5 is not triangle', () => {
    expect(isRightTriangle('A', 4, 5)).toBe(false);
});

test('-1, 4, 5 is not triangle', () => {
    expect(isRightTriangle(-1, 4, 5)).toBe(false);
});
test('6.5, 4, 5 is not triangle', () => {
    let a = 6.5;
    let b = 4;
    let c = 5;

    let result = isRightTriangle(a, b, c);

    expect (result).tobe(false)
});