import { type Page, type Locator } from "@playwright/test";
import { BasePageProtoComm } from "./BasePageProtoComm";

export class HomePage extends BasePageProtoComm {
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

  //Open HomePage
  async openHomePage(): Promise<void> {
    await super.openHomePage();
  }
  //Enter Value of Name
  async enterName(name: string): Promise<void> {
    await this.nameField.fill(name);
  }
  //Enter Value of email
  async enterEmail(email: string): Promise<void> {
    await this.email.fill(email);
  }
  //Enter Value of password
  async enterPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }

  //click on checkbox
  async clickONCheckbox(): Promise<void> {
    await this.checkbox.click();
  }
  //select Gender female or male
  async selectGender(optionDDL: string): Promise<void> {
    await this.genderDropdown.selectOption(optionDDL);
  }

  //select value of radiobutton
  async clickOnradioButton(optionRadioButton: string): Promise<void> {
    await this.genderDropdown.selectOption(optionRadioButton);
  }

  // click on submit button
  async clickOnSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }
}
