import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { promises } from "fs";

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
  protected readonly blinkingBanner: Locator = this.accessPage.getByRole(
    "link",
    {
      name: /Explore the QA Career Accelerator/i,
    },
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

  async getBlinkingLink(): Promise<Locator> {
    return this.blinkingBanner;
  }

  async errorMessage(messages: string): Promise<void> {
    for (const msg of messages) {
      await expect(this.accessPage.getByText(msg)).toBeVisible();
    }
  }
}
