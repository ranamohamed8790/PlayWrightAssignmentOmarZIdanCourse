import { type Page } from "@playwright/test";

export class BasePageProtoComm {
  private readonly page;
  public urlHome: string = "https://rahulshettyacademy.com/angularpractice/";

  constructor(page: Page) {
    this.page = page;
  }

  get accessPage() {
    return this.page;
  }

  // Open Home Page
  async openHomePage(): Promise<void> {
    await this.page.goto(this.urlHome);
  }
}
