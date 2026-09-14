import { test, expect } from "@playwright/test";
import { LoginPage } from "./LoginPage";

test.use({
  launchOptions: { slowMo: 1200 },
});
// Test Method
test("Check that USer logged in successfully ", async ({ page }) => {
  const username: string = "standard_user";
  const password: string = "secret_sauce";

  const expectedUrl: string = "https://www.saucedemo.com/inventory.html";
  const testLogin = new LoginPage(page, username, password);

  await testLogin.open();
  await testLogin.login();

  await expect(page).toHaveURL(expectedUrl);
  await expect(testLogin.logoLocator).toContainText("Swag Labs");
});
