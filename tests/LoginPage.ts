import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  //Locator of Login Page

  protected readonly userEmail: Locator =
    this.accessPage.getByPlaceholder("email@example.com");

  protected readonly passwordLogin: Locator = this.accessPage.getByPlaceholder(
    "enter your passsword",
  );

  protected readonly loginButton: Locator = this.accessPage.getByRole(
    "button",
    { name: "Login" },
  );

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

  async logintoHomePage(email: string, password: string): Promise<LoginPage> {
    await (
      await this.enterEmailAtLoginPage(email)
    ).enterPasswordatLogin(password);
    await this.loginButton.click();

    return this;
  }
}
