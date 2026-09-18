import { test, expect, type Page, type Locator } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ShopPage } from "./ShopPage";

test.use({
  launchOptions: { slowMo: 1200 },
});

test("Locate Element in Home Page and add product to cart from shop tab", async ({
  page,
}) => {
  const homePageObject = new HomePage(page);
  const shopPageObject = new ShopPage(page, "cardName");
  //Open Home Page
  await homePageObject.openHomePage();
  //Click on sumbit Button
  await homePageObject.clickOnSubmitButton();
  // Click on shopTab
  await shopPageObject.openShopPage();
  // select 1st card

  await shopPageObject.filterCardAndClickOnAddButton("iphone X");
  // select last  card

  await shopPageObject.filterCardAndClickOnAddButton("Blackberry");
  // Check the number in checout button

  await expect(shopPageObject.checkoutLink).toContainText("2");
});
