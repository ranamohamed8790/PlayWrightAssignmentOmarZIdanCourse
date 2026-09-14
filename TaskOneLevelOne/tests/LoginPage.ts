import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  public username: string;
  public password: string;

  constructor(page: Page, username: string, password: string) {
    super(page);
    this.username = username;
    this.password = password;
  }

  //Locator
  public readonly usernameLocator: Locator =
    this.accessPage.getByPlaceholder("Username");

  public readonly passwordLocator: Locator =
    this.accessPage.getByPlaceholder("Password");

  public readonly loginButtonLocator: Locator = this.accessPage.getByRole(
    "button",
    { name: "Login" },
  );

  public readonly logoLocator: Locator = this.accessPage.getByText("Swag Labs");

  //Methods
  //1. Open URL, Enter username and password
  override async open(): Promise<void> {
    await super.open();
    await this.usernameLocator.fill(this.username);
    await this.passwordLocator.fill(this.password);
  }
  //2. click on login Button
  public async login(): Promise<void> {
    this.loginButtonLocator.click();
  }
}
