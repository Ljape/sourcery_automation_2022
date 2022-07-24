const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 2, 8 is triangle', () => {
    expect(isTriangle(0, 2, 8)).toBe(false);
});

test('A, 4, 5 is triangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
});

test('-1, 4, 5 is triangle', () => {
    expect(isTriangle(-1, 4, 5)).toBe(false);
});