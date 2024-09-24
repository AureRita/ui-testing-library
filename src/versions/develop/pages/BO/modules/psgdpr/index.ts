import {type ModulePsGdprBoMainPageInterface} from '@interfaces/BO/modules/psgdpr';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

/**
 * Module configuration page for module : psgdpr, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class PsGdprPage extends ModuleConfiguration implements ModulePsGdprBoMainPageInterface {
  public readonly pageSubTitle: string;

  private readonly menuTab: (nth: number) => string;

  private readonly currentTab: string;

  private readonly tabDataConfig: string;

  private readonly tabDataConsent: string;

  private readonly tabCustomerActivity: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on GDPR module configuration page
   */
  constructor() {
    super();

    this.pageSubTitle = 'Official GDPR compliance';

    this.menuTab = (nth: number) => `#psgdpr-menu .list-group:nth-child(1) a.list-group-item:nth-child(${nth})`;

    this.currentTab = '.psgdpr_menu:not(.addons-hide)';

    this.tabDataConfig = '#dataConfig .panel';

    this.tabDataConsent = '#dataConsent .panel';

    this.tabCustomerActivity = '#customerActivity .panel';
  }

  /**
   * Click on a specific tab and return if the tab is visible
   * @param page {Page} Browser tab
   * @param nth {number} Tab
   * @returns {Promise<boolean>}
   */
  async goToTab(page: Page, nth: number): Promise<boolean> {
    // Wait for current tab to be visible, if we click before the tabs are initialized the click doesn't work
    await this.elementVisible(page, this.currentTab, 500);
    await this.clickAndWaitForLoadState(page, this.menuTab(nth));

    let selectorBlock: string;

    switch (nth) {
      case 2:
        selectorBlock = this.tabDataConfig;
        break;
      case 3:
        selectorBlock = this.tabDataConsent;
        break;
      case 4:
        selectorBlock = this.tabCustomerActivity;
        break;
      default:
        throw new Error(`The block #${nth} has not defined a defined selector.`);
    }

    return this.elementVisible(page, selectorBlock, 3000);
  }
}

module.exports = new PsGdprPage();
