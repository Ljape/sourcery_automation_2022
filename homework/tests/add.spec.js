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
  test.describe(version + ': Add', () => {
    test('Adding two positive numbers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding positive number with a negative number', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('-6');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding two negative numbers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding non integer number with integer number ', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('0.5');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('2.5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Only the First number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('5');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Only the Second number field is filled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number2Field').type('9');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('9');
    });
  });
});
