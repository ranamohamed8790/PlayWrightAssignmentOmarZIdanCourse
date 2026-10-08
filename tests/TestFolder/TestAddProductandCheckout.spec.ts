import { expect, test } from "@playwright/test";
import { HomeDashboard } from "../PagesFolder/HomeDashboard";
import fs from "fs";
import path from "path";
import { paths } from "../../config/paths";
import { AuthAPi } from "../../api/AuthApi";
import { TokenHlper } from "../../util/TokenHelper";
import { CartScreen } from "../PagesFolder/CartScreen";
import { CheckoutPage } from "../PagesFolder/CheckoutPage";

test.use({
  launchOptions: { slowMo: 500 },
});

const loginJsonPath = path.join(__dirname, "../../test-data/login-data.json");
const LoginCredentials = JSON.parse(fs.readFileSync(loginJsonPath, "utf-8"));

test("Purchase More Product", async ({ page }) => {
  const authAPIObject = await AuthAPi.create();
  const loginToken = await authAPIObject.login({
    userEmail: LoginCredentials[0].userEmail,
    userPassword: LoginCredentials[0].userPassword,
  });
  await authAPIObject.dispose();
  await TokenHlper.inject(page, loginToken);

  const homeObject = new HomeDashboard(page);
  await homeObject.openDashboard();
  await homeObject.addProducttoCart(
    LoginCredentials[0].productName.productName1,
  );
  await homeObject.addProducttoCart(
    LoginCredentials[0].productName.productName2,
  );
  await homeObject.openCartScreen();

  const cartObject = new CartScreen(page);
  await cartObject.checkVisibiltyOfProduct(
    LoginCredentials[0].productName.productName1,
  );
  await cartObject.checkVisibiltyOfProduct(
    LoginCredentials[0].productName.productName2,
  );
  await cartObject.clickonCheckoutButton();
  await cartObject.checkRedirectToCheckout();

  const checkoutObject = new CheckoutPage(page);
  await checkoutObject.enterCardNumber(LoginCredentials[0].cardNumber);
  await checkoutObject.enterCardName(LoginCredentials[0].cardName);
  await checkoutObject.enterCVV(LoginCredentials[0].cvv);
  await checkoutObject.selectcountry("Egy", "Egypt");
  await checkoutObject.clickOnPlaceOrderButton();
  await checkoutObject.checkConfirmScreen();
});
