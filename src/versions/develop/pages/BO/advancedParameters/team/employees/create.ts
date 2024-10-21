import {type BOEmployeesCreatePageInterface} from '@interfaces/BO/advancedParameters/team/employees/create';
import EmployeeBasePage from '@pages/BO/advancedParameters/team/base';
import {type Page} from '@playwright/test';

import FakerEmployee from '@data/faker/employee';

/**
 * Add employee page, contains functions that can be used on the page
 * @class
 * @extends EmployeeBasePage
 */
class BOEmployeesCreatePage extends EmployeeBasePage implements BOEmployeesCreatePageInterface {
  public readonly pageTitleCreate: string;

  private readonly passwordInput: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add employee page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New employee • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.passwordInput = '#employee_password';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit page Employee
   * @param page {Page} Browser tab
   * @param employeeData {FakerEmployee} Data to set on add/edit employee form
   * @returns {Promise<string>}
   */
  async createEditEmployee(page: Page, employeeData: FakerEmployee): Promise<string> {
    await this.setValue(page, this.firstNameInput, employeeData.firstName);
    await this.setValue(page, this.lastNameInput, employeeData.lastName);
    await this.setValue(page, this.emailInput, employeeData.email);
    await this.setValue(page, this.passwordInput, employeeData.password);
    await this.selectByVisibleText(page, this.permissionProfileSelect, employeeData.permissionProfile);
    await this.selectByVisibleText(page, this.languageSelect, employeeData.language);
    await this.selectDefaultPage(page, employeeData.defaultPage);
    // replace toggle by 1 in the selector if active = YES / 0 if active = NO
    await this.setChecked(page, this.statusToggleInput(employeeData.active ? 1 : 0));
    await this.clickAndWaitForLoadState(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOEmployeesCreatePage();