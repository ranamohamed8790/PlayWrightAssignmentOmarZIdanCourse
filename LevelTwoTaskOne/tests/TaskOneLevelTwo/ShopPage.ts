import { type Page } from "@playwright/test";
import { Helper } from "./Helper";

export class ShopPage extends Helper {
  public readonly cardName: string;

  constructor(page: Page, cardName: string) {
    super(page);
    this.cardName = cardName;
  }
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
