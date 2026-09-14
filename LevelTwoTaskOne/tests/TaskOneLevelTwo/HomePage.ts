import { type Page } from "@playwright/test";
import { Helper } from "./Helper";

export class HomePage extends Helper {
  constructor(page: Page) {
    super(page);
  }

  //Open HomePage
  async openHomePage(): Promise<void> {
    await super.openHomePage();
  }
  //Enter Value of Name
  async enterName(name: string): Promise<void> {
    await this.nameField.fill(name);
  }
  //Enter Value of email
  async enterEmail(email: string): Promise<void> {
    await this.email.fill(email);
  }
  //Enter Value of password
  async enterPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }

  //click on checkbox
  async clickONCheckbox(): Promise<void> {
    await this.checkbox.click();
  }
  //select Gender female or male
  async selectGender(optionDDL: string): Promise<void> {
    await this.genderDropdown.selectOption(optionDDL);
  }

  //select value of radiobutton
  async clickOnradioButton(optionRadioButton: string): Promise<void> {
    await this.genderDropdown.selectOption(optionRadioButton);
  }

  // click on submit button
  async clickOnSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }
}
