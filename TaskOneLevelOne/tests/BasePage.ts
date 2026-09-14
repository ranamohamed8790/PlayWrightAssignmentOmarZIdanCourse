import { type Page } from "@playwright/test";
export class BasePage {
  // Variables
  private readonly page: Page;
  public url: string = "https://www.saucedemo.com/";

  //Constructor
  constructor(page: Page) {
    this.page = page;
  }

  get accessPage() {
    return this.page;
  }

  // open Demo Website
  async open(): Promise<void> {
    await this.page.goto(this.url);
  }
}
