// models/Search.js
class SearchPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
      this.searchTermInput = page.locator('[aria-label="Enter your search term"]');
    }
    async navigate() {
      await this.page.goto('https://bing.com');
    }
    async search(text) {
      await this.searchTermInput.fill(text);
      await this.searchTermInput.press('Enter');
    }
  }
  module.exports = { SearchPage };