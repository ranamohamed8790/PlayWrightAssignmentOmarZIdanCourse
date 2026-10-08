import { type Page, type Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { paths } from "../../config/paths";

export class CartScreen extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }
  //Locator of Cart Screen

  protected readonly cardRowLocator: Locator =
    this.accessPage.locator("div.cartSection h3");

  protected readonly checkoutButton: Locator = this.accessPage.getByRole(
    "button",
    {
      name: "Checkout",
    },
  );

  //Methods

  private productCardRow(productName: string): Locator {
    return this.cardRowLocator.filter({ hasText: productName });
  }

  async checkVisibiltyOfProduct(productName: string): Promise<void> {
    await expect(
      this.productCardRow(productName),
      `Expected${productName} to be visible`,
    ).toBeVisible();
  }

  async clickonCheckoutButton() {
    await this.checkoutButton.click();
  }
  async checkRedirectToCheckout(): Promise<void> {
    await expect(this.accessPage).toHaveURL(/dashboard\/order/);
  }
}
