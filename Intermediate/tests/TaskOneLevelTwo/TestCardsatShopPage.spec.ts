import { test, expect, type Page, type Locator } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ShopPage } from "./ShopPage";

test.use({
  launchOptions: { slowMo: 1200 },
});

test("Check HomeTab and ShopTab", async ({ page }) => {
  const homePageObject = new HomePage(page);
  const shopPageObject = new ShopPage(page, "cardName");

  await homePageObject.openHomePage();
  await homePageObject.clickOnSubmitButton();
  await shopPageObject.clickOnShopTab();

  await shopPageObject.filterCardAndClickOnAddButton("iphone X");
  await shopPageObject.filterCardAndClickOnAddButton("Blackberry");

  await expect(shopPageObject.checkoutLink).toContainText("2");
});
