import { type Page } from "@playwright/test";
import { UtilityTool } from "./UtilityTool";

export class HomeDashboard extends UtilityTool {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  //Methods
  async addProductInCart(productName: string): Promise<HomeDashboard> {
    await this.cardLocator
      .filter({ hasText: productName })
      .getByRole("button", { name: " Add To Cart" })
      .click();
    return this;
  }

  async clickOncarttButton(): Promise<HomeDashboard> {
    await this.cartButton.click();
    return this;
  }

  async clickOnCheckoutOnAtCartScreen(): Promise<HomeDashboard> {
    await this.checkoutButton.click();
    return this;
  }
}
