import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { paths } from "../../config/paths";

export class HomeDashboard extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }
  //Locator of Home Page

  protected readonly cardLocator: Locator = this.accessPage.locator("div.card");

  protected readonly addToCartButton: Locator = this.accessPage.getByRole(
    "button",
    { name: " Add To Cart" },
  );

  public readonly cartButton: Locator = this.accessPage.locator(
    'button[routerlink="/dashboard/cart"]',
  );
  public readonly cartNumber: Locator = this.accessPage.getByRole("button", {
    name: "Cart",
  });

  // this button at Summary Page before payment
  protected readonly checkoutButton: Locator = this.accessPage.getByRole(
    "button",
    {
      name: "Checkout",
    },
  );

  //Methods

  async openDashboard(): Promise<void> {
    await this.accessPage.goto(paths.home);
  }
  private productCard(productName: string): Locator {
    return this.cardLocator.filter({ hasText: productName });
  }

  async addProducttoCart(productName: string): Promise<HomeDashboard> {
    const card = this.productCard(productName);
    await card.getByRole("button", { name: /Add To Cart/i }).click();
    return this;
  }

  async openCartScreen(): Promise<HomeDashboard> {
    await this.cartButton.click();
    return this;
  }
}

