import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

class MyOrders extends BasePage {
  constructor(page: Page) {
    super(page);
    // const myOrdersLocator = this.accessPage.locator(selector);
  }
}
