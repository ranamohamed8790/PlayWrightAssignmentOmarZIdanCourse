import { type Page } from "@playwright/test";
import { UtilityTool } from "./UtilityTool";

export class RegisterPage extends UtilityTool {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  //Methods
  async openRegisterPage(): Promise<RegisterPage> {
    await super.openLoginPage();
    await this.registerLink.click();
    return this;
  }

  async enterFirstName(firstNameField: string): Promise<RegisterPage> {
    await this.firstName.fill(firstNameField);
    return this;
  }

  async enterLastName(LastNameField: string): Promise<RegisterPage> {
    await this.lastName.fill(LastNameField);
    return this;
  }

  async enterEmail(emailField: string): Promise<RegisterPage> {
    await this.email.fill(emailField);
    return this;
  }

  async enterPhoneNumber(phoneNumberField: string): Promise<RegisterPage> {
    await this.phoneNumber.fill(phoneNumberField);
    return this;
  }

  async enterPasswordtRegister(passField: string): Promise<RegisterPage> {
    await this.passwordRegister.fill(passField);
    return this;
  }

  async enterConfirmPasswordatRegister(
    confirmpassField: string,
  ): Promise<RegisterPage> {
    await this.confirmPassword.fill(confirmpassField);
    return this;
  }

  async clickonCheckBox(): Promise<RegisterPage> {
    await this.ageCheck.click();
    return this;
  }

  async fillUserFieldinRegisterForm(
    firstNameField: string,
    LastNameField: string,
    emailField: string,
    phoneNumberField: string,
    passField: string,
    confirmpassField: string,
  ): Promise<RegisterPage> {
    await (
      await (
        await (
          await (
            await (
              await (
                await this.enterFirstName(firstNameField)
              ).enterLastName(LastNameField)
            ).enterEmail(emailField)
          ).enterPhoneNumber(phoneNumberField)
        ).enterPasswordtRegister(passField)
      ).enterConfirmPasswordatRegister(confirmpassField)
    ).clickonCheckBox();
    return this;
  }

  async clickOnRegistterButton(): Promise<RegisterPage> {
    await this.registerButton.click();
    return this;
  }
  async clickOnloginButtonafterRegistered(): Promise<RegisterPage> {
    await this.loginButtonafterRegister.click();
    return this;
  }
}
