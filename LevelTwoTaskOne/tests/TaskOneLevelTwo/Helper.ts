import { type Page, type Locator } from "@playwright/test";
import { BasePageProtoComm } from "./BasePageProtoComm";

export class Helper extends BasePageProtoComm {
  //Construtctor
  constructor(page: Page) {
    super(page);
  }

  //Locator of Home Page

  public readonly title: Locator = this.accessPage.getByRole("link", {
    name: "ProtoCommerce",
  });
  public readonly homeTab: Locator = this.accessPage.getByRole("link", {
    name: "Home",
  });
  public readonly shopTab: Locator = this.accessPage.getByRole("link", {
    name: "Shop",
  });
  public readonly centeredTitle: Locator = this.accessPage.getByRole(
    "heading",
    {
      name: "Protractor Tutorial",
    },
  );
  public readonly subTitle: Locator = this.accessPage.getByRole("heading", {
    name: "by QAClick Academy",
  });
  public readonly bodyTextBanner: Locator = this.accessPage.getByRole(
    "heading",
    {
      name: "by QAClick Academy",
    },
  );

  public readonly nameField: Locator = this.accessPage.getByRole("cell", {
    name: "name",
  });
  public readonly email: Locator = this.accessPage.getByRole("cell", {
    name: "email",
  });
  public readonly password: Locator = this.accessPage.locator(
    "#exampleInputPassword1",
  );
  public readonly checkbox: Locator = this.accessPage.locator("#exampleCheck1");

  public readonly genderDropdown: Locator =
    this.accessPage.getByLabel("Gender");

  public readonly radioButtonselection: Locator = this.accessPage.getByRole(
    "radio",
    {
      name: "inlineRadioOptions",
    },
  );
  public readonly submitButton: Locator = this.accessPage.getByRole("button", {
    name: "Submit",
  });

  // Locator of Shop Page

  public readonly cardLocator: Locator = this.accessPage.locator("app-card");
  public readonly addButton: Locator = this.accessPage.getByRole("button", {
    name: "Add ",
  });
  public readonly checkoutLink: Locator = this.accessPage.getByText("Checkout");
}
