import BOBasePage from '@pages/BO/BOBasePage';

import type {Page} from 'playwright';

/**
 * Module configuration page, contains selectors and functions for the page.
 * Can be used as a base page for specific module configuration page.
 * @class
 * @extends BOBasePage
 */
export default class ModuleConfiguration extends BOBasePage {
  private readonly pageHeadSubtitle: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module configuration page
   */
  constructor() {
    super();

    // Header selectors
    this.pageHeadSubtitle = '.page-subtitle';
  }

  /* Methods */

  /**
   * Get module name from page title
   * @return {Promise<string>}
   */
  async getPageSubtitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.pageHeadSubtitle);
  }
}

module.exports = ModuleConfiguration;
