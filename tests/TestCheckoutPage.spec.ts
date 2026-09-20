import { expect, test } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";
import { HomeDashboard } from "./HomeDashboard";
import { LoginPage } from "./LoginPage";
import { CheckoutPage } from "./CheckoutPage";
import { QaCareerPage } from "./QaCareerPage";

// test.use({
//   launchOptions: { slowMo: 500 },
// });

test("check Register,login and checkout", async ({ context, page }) => {
  const uniqueEmail: string = `rana${Date.now()}@test.com`;
  const password: string = "Pass@1234";

  const expectedHomeURL =
    "https://rahulshettyacademy.com/client/#/dashboard/dash";
  const expectedURLAfterRegister =
    "https://rahulshettyacademy.com/client/#/auth/register";
  const expectedLoginURL = "https://rahulshettyacademy.com/client/#/auth/login";
  const expectedCartURL =
    "https://rahulshettyacademy.com/client/#/dashboard/cart";
  const expectedCheckoutURL = /dashboard\/order/;

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
  await expect(page).toHaveURL(expectedURLAfterRegister); //user redirect to Home Page after register
  await page.waitForLoadState();

  // click on login button after register at page of success register
  await registerObject.clickOnloginButtonafterRegistered();
  await expect(page).toHaveURL(expectedLoginURL); //user here redirect to login page

  // login by user name and password
  await loginObject.logintoHomePage(uniqueEmail, password);
  await expect(page).toHaveURL(expectedHomeURL); // user redirect to Home Page after login

  // add product to cart
  await HomeObject.addProductInCart("ZARA COAT 3");
  await expect(HomeObject.cartButton).toContainText("1", { timeout: 100000 }); // check the cart has number of added product
  await HomeObject.clickOncarttButton(); // click on cart button
  await expect(page).toHaveURL(expectedCartURL); //user redierct to cart screen

  // click on checkoutbutton on cart screen
  await HomeObject.clickOnCheckoutOnAtCartScreen();
  await expect(page).toHaveURL(expectedCheckoutURL); // user redirect to checkout page
  await (
    await (
      await checkoutObject.enterCardNumber("12345678999999")
    ).enterCVV("1234")
  ).enterCardName("Rana Ahmed"); // user enter his payemnt data
});
