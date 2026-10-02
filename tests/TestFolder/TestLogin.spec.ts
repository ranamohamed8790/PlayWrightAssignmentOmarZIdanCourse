import { expect, test } from "@playwright/test";
import { LoginPage } from "../PagesFolder/LoginPage";
import { HomeDashboard } from "../PagesFolder/HomeDashboard";

import fs from "fs";
import path from "path";

test.use({
  launchOptions: { slowMo: 500 },
});

const loginJsonPath = path.join(process.cwd(), "test-data/login-data.json");
const LoginCredentials = JSON.parse(fs.readFileSync(loginJsonPath, "utf-8"));

const productDataPath = path.join(
  process.cwd(),
  "../test-data/product-data.json",
);
const productsDatas = JSON.parse(fs.readFileSync(productDataPath, "utf-8"));

for (const credential of LoginCredentials) {
  test(`${credential.testCaseTitle}`, async ({ page }) => {
    const loginObject = new LoginPage(page);
    const expectedHomeURL =
      "https://rahulshettyacademy.com/client/#/dashboard/dash";

    // open the login Page
    await loginObject.openLoginPage();

    // login by user name and password
    await loginObject.logintoHomePage(credential.username, credential.password);

    if (credential.expectedResult === "valid") {
      await expect(page).toHaveURL(expectedHomeURL);
    } else {
      await loginObject.errorMessage(credential.expectedMessage);
    }
  });
}
//
for (const productData of productsDatas) {
  test(`${productData.testCaseName}`, async ({ page }) => {
    const expectedCartURL =
      "https://rahulshettyacademy.com/client/#/dashboard/cart";
    const expectedCheckoutURL =
      "https://rahulshettyacademy.com/client/#/dashboard/order?prop=%5B%226960eac0c941646b7a8b3e68%22%5D";

    const HomeObject = new HomeDashboard(page);
    const loginObject = new LoginPage(page);

    const validUser = LoginCredentials.find(
      (user: any) => user.expectedResult === "valid",
    );

    await loginObject.openLoginPage();
    await loginObject.logintoHomePage(validUser.username, validUser.password);
    await HomeObject.addProductInCart(productData.productName);

    if (productData.validity === "valid") {
      await HomeObject.addProductInCart(productData.productName);
      await expect(HomeObject.cartButton).toContainText("1");
    } else {
      const count = await HomeObject.getCardLocator()
        .filter({ hasText: productData.productName })
        .count();
      expect(count).toBe(0);
    }
  });
}
