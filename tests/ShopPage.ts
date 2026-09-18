import { type Page, type Locator } from "@playwright/test";
import { BasePageProtoComm } from "./BasePageProtoComm";

export class ShopPage extends BasePageProtoComm {
  public readonly cardName: string;

  constructor(page: Page, cardName: string) {
    super(page);
    this.cardName = cardName;
  }

  // Locator of Shop Page
  public readonly shopTab: Locator = this.accessPage.getByRole("link", {
    name: "Shop",
  });

  public readonly cardLocator: Locator = this.accessPage.locator("app-card");
  public readonly addButton: Locator = this.accessPage.getByRole("button", {
    name: "Add ",
  });
  public readonly checkoutLink: Locator = this.accessPage.getByText("Checkout");

  //Open Shop tab

  async clickOnShopTab(): Promise<ShopPage> {
    await this.shopTab.click();
    return this;
  }
  //Filter Card
  async filterCardAndClickOnAddButton(cardName: string): Promise<ShopPage> {
    await this.cardLocator
      .filter({ hasText: cardName })
      .getByRole("button", {
        name: "Add ",
      })
      .click();
    return this;
  }
}
