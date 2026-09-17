import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class UtilityTool extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locator of Register Page
  protected readonly registerLink: Locator =
    this.accessPage.getByText("Register here");

  public readonly firstName: Locator =
    this.accessPage.getByPlaceholder("First Name");

  protected readonly lastName: Locator =
    this.accessPage.getByPlaceholder("Last Name");

  protected readonly email: Locator =
    this.accessPage.getByPlaceholder("email@example.com");

  protected readonly phoneNumber: Locator =
    this.accessPage.getByPlaceholder("enter your number");

  protected readonly passwordRegister: Locator =
    this.accessPage.locator("#userPassword");

  protected readonly confirmPassword: Locator =
    this.accessPage.locator("#confirmPassword");

  protected readonly genderLocator: Locator =
    this.accessPage.getByLabel("Gender");

  protected readonly ageCheck: Locator = this.accessPage.getByRole("checkbox");

  protected readonly registerButton: Locator = this.accessPage.getByRole(
    "button",
    { name: "Register" },
  );
  protected readonly loginButtonafterRegister: Locator =
    this.accessPage.getByRole("button", { name: "Login" });

  //Locator of Login Page

  protected readonly userEmail: Locator =
    this.accessPage.getByPlaceholder("email@example.com");

  protected readonly passwordLogin: Locator = this.accessPage.getByPlaceholder(
    "enter your passsword",
  );

  protected readonly loginButton: Locator = this.accessPage.getByRole(
    "button",
    { name: "Login" },
  );

  //Locator of Home Page

  protected readonly blinkingText: Locator = this.accessPage.getByRole("link", {
    name: /Explore the QA Career Accelerator/i,
  });

  // // locator of sign up in carrer page
  // protected readonly signupLocator = this.accessPage.getByRole("link", {
  //   name: "Sign Up",
  // });

  protected readonly cardLocator: Locator = this.accessPage.locator("div.card");

  protected readonly signOutButton: Locator = this.accessPage.getByRole(
    "button",
    { name: " Sign Out " },
  );

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

  // this button at Summaary Page before payment
  protected readonly checkoutButton: Locator = this.accessPage.getByRole(
    "button",
    {
      name: "Checkout",
    },
  );

  //locator of checkoutPage
  protected readonly cardNumberLocator: Locator = this.accessPage
    .locator("div.field", {
      has: this.accessPage.locator("div.title", {
        hasText: "Credit Card Number",
      }),
    })
    .locator("input");

  protected readonly CVVLocator: Locator = this.accessPage
    .locator("div.field", {
      has: this.accessPage.locator("div.title", { hasText: "CVV" }),
    })
    .locator("input");

  protected readonly cardNameLoactor: Locator = this.accessPage
    .locator("div.field", {
      has: this.accessPage.locator("div.title", { hasText: "Name on Card " }),
    })
    .locator("input");

  protected readonly userNameShipperLocator: Locator = this.accessPage
    .locator("div.title")
    .locator("input");

  protected readonly selectCountryLocator: Locator =
    this.accessPage.getByPlaceholder("Select Country");

  protected readonly placeOrderLocator: Locator =
    this.accessPage.getByPlaceholder("Place Order ");
}
