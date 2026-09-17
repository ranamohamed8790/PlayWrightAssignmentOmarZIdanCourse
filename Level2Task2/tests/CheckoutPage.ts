import { type Page } from "@playwright/test";
import { UtilityTool } from "./UtilityTool";

export class CheckoutPage extends UtilityTool {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  //Methods
  async enterCardNumber(CardNumberField: string): Promise<CheckoutPage> {
    await this.cardNumberLocator.click();
    await this.cardNumberLocator.clear();
    await this.cardNumberLocator.fill(CardNumberField);
    return this;
  }

  async enterCVV(CVVField: string): Promise<CheckoutPage> {
    await this.CVVLocator.click();
    await this.CVVLocator.fill(CVVField);
    return this;
  }

  async enterCardName(cardName: string): Promise<CheckoutPage> {
    await this.cardNameLoactor.click();
    await this.cardNameLoactor.fill(cardName);
    return this;
  }

  // async enterShipper(shipperUserName: string): Promise<CheckoutPage> {
  //   await this.userNameShipperLocator.click();
  //   await this.userNameShipperLocator.fill(shipperUserName);
  //   return this;
  // }
}
