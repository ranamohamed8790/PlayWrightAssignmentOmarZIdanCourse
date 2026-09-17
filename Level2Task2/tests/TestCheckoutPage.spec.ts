import { expect, test } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";
import { HomeDashboard } from "./HomeDashboard";
import { LoginPage } from "./LoginPage";
import { CheckoutPage } from "./CheckoutPage";
import { QaCareerPage } from "./QaCareerPage";

test.use({
  launchOptions: { slowMo: 500 },
});

test("check checout and some button", async ({ context, page }) => {
  const uniqueEmail: string = `rana${Date.now()}@test.com`;
  const expectedHomeURL =
    "https://rahulshettyacademy.com/client/#/dashboard/dash";
  const expectedURLAfterRegister =
    "https://rahulshettyacademy.com/client/#/auth/register";
  const expectedLoginURL = "https://rahulshettyacademy.com/client/#/auth/login";
  const expectedCartURL =
    "https://rahulshettyacademy.com/client/#/dashboard/cart";
  const expectedCheckoutURL =
    "https://rahulshettyacademy.com/client/#/dashboard/order?prop=%5B%226960eac0c941646b7a8b3e68%22%5D";

  const registerObject = new RegisterPage(page);
  const HomeObject = new HomeDashboard(page);
  const loginObject = new LoginPage(page);
  const checkoutObject = new CheckoutPage(page);
  const QaCareerObject = new QaCareerPage(page, context);

  // Open Login Page
  await (
    await (
      await registerObject.openRegisterPage()
    ).fillUserFieldinRegisterForm(
      "rana15454645",
      "ahmed192465465",
      uniqueEmail,
      "1234565895",
      "Pass@1234",
      "Pass@1234",
    )
  ).clickOnRegistterButton();
  //user redirect to Home Page after register
  await expect(page).toHaveURL(expectedURLAfterRegister);

  await page.waitForLoadState();

  // click on login button after register at page of success register
  await registerObject.clickOnloginButtonafterRegistered();
  //user here redirect to login page
  await expect(page).toHaveURL(expectedLoginURL);

  // login by user name and password
  await (
    await loginObject.fillUsernameAndPassword(
      "rana.mohamed8790@gmail.com",
      "Pass@1234",
    )
  ).clickOnLoginButton();

  // user redirect to Home Page after login
  await page.screenshot({ path: "after-Logged-in.png" });
  await expect(page).toHaveURL(expectedHomeURL);

  // click on blinkingbanner
  const openNewtab = await QaCareerObject.clickOnFlashBannerAndOpenNewTab();

  await openNewtab.waitForLoadState();

  // check  new tab redirect to correct link
  await expect(openNewtab).toHaveURL(
    "https://rahulshettyacademy.com/qa-career-accelerator-job-ready",
  );

  //close new tab
  await openNewtab.close();
  // ensure the 1st tab still open
  await expect(QaCareerObject.blinkingTextLocator).toBeVisible();

  // add product to cart
  await HomeObject.addProductInCart("ZARA COAT 3");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "added-product.png" });

  // check the cart has number of added product
  await expect(HomeObject.cartButton).toContainText("1", { timeout: 10000 });

  // click on cart button
  await HomeObject.clickOncarttButton();

  //user redierct to cart screen
  await expect(page).toHaveURL(expectedCartURL);

  // click on checkoutbutton on cart screen
  await HomeObject.clickOnCheckoutOnAtCartScreen();

  // user redirect to checkout page
  await expect(page).toHaveURL(expectedCheckoutURL);

  // user enter his payemnt data

  await (
    await (
      await checkoutObject.enterCardNumber("12345678999999")
    ).enterCVV("1234")
  ).enterCardName("Rana Ahmed");

  await page.screenshot({ path: "filling-checkout.png" });
});
