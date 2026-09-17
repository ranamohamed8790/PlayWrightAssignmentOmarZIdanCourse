import { type Page } from "@playwright/test";
export class BasePage {
  private readonly page;
  //username:rana.mohamed8790@gmail.com
  //password:Pass@1234
  public urlLogin: string =
    "https://rahulshettyacademy.com/client/#/auth/login";

  constructor(page: Page) {
    this.page = page;
  }

  get accessPage() {
    return this.page;
  }

  // Open Login  Page
  async openLoginPage(): Promise<void> {
    await this.page.goto(this.urlLogin);
    await this.page.waitForLoadState();
  }
}
