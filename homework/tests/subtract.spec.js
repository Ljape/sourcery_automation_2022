// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting two positive numbers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting positive number from negative number', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('5');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-7');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting negative number from negative number', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('-5');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting non integer number from integer number ', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('0.5');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1.5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Only the First number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Only the Second number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number2Field').type('9');
      await page.selectOption('#selectOperationDropdown', { label: 'Subtract' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-9');
    });
  });
});

