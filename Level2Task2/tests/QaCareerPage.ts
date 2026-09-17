import { type Page, type BrowserContext, Locator } from "@playwright/test";
import { UtilityTool } from "./UtilityTool";

export class QaCareerPage extends UtilityTool {
  protected readonly context;
  // Constructor
  constructor(page: Page, context: BrowserContext) {
    super(page);
    this.context = context;
  }

  //Methods

  async clickOnFlashBannerAndOpenNewTab(): Promise<Page> {
    const [openNewTab] = await Promise.all([
      this.context.waitForEvent("page"),
      this.blinkingText.click(),
    ]);
    return openNewTab;
  }

  get blinkingTextLocator(): Locator {
    return this.blinkingText;
  }
  get signUpButton(): Locator {
    return this.blinkingText;
  }
}
