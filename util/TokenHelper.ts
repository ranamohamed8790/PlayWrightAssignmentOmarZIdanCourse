import { Page } from "@playwright/test";

export class TokenHlper {
  static async inject(page: Page, token: string): Promise<void> {
    await page.addInitScript((value) => {
      window.localStorage.setItem("token", value);
    }, token);
  }
}
