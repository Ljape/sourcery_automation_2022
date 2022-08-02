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
  test.describe(version + ': Concatenate', () => {
    test('Concatenate two positive numbers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('33');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate number and letter', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('O');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0O');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate two letters and symbol', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('AB');
      await page.locator('#number2Field').type('&');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('AB&');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Only the First number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('A');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('A');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Only the Second number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number2Field').type('B');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('B');
    });
  });
});