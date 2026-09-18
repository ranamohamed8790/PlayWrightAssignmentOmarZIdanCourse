import { type Page, type BrowserContext, Locator } from "@playwright/test";
import { HomeDashboard } from "./HomeDashboard";

export class QaCareerPage extends HomeDashboard {
  protected readonly context;
  // Constructor
  constructor(page: Page, context: BrowserContext) {
    super(page);
    this.context = context;
  }

  //Methods
  // click on flashBlanner
  async clickOnFlashBannerAndOpenNewTab(): Promise<Page> {
    const [openNewTab] = await Promise.all([
      this.context.waitForEvent("page"),
      this.blinkingText.click(),
    ]);
    return openNewTab;
  }
  // get blinking test locator
  get blinkingTextLocator(): Locator {
    return this.blinkingText;
  }
  get signUpButton(): Locator {
    return this.blinkingText;
  }
}
