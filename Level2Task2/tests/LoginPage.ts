import { type Page } from "@playwright/test";
import { UtilityTool } from "./UtilityTool";

export class LoginPage extends UtilityTool {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  //Methods
  async acessLoginPage(): Promise<LoginPage> {
    await super.openLoginPage();
    return this;
  }

  async enterEmailAtLoginPage(email: string): Promise<LoginPage> {
    await this.userEmail.fill(email);
    return this;
  }

  async enterPasswordatLogin(passwordField: string): Promise<LoginPage> {
    await this.passwordLogin.fill(passwordField);
    return this;
  }

  async fillUsernameAndPassword(
    email: string,
    password: string,
  ): Promise<LoginPage> {
    await (
      await this.enterEmailAtLoginPage(email)
    ).enterPasswordatLogin(password);
    return this;
  }

  async clickOnLoginButton(): Promise<LoginPage> {
    await this.loginButton.click();
    return this;
  }
}
