import { expect, test } from "@playwright/test";
import { HomeDashboard } from "../PagesFolder/HomeDashboard";
import fs from "fs";
import path from "path";
import { paths } from "../../config/paths";
import { AuthAPi } from "../../api/AuthApi";
import { TokenHlper } from "../../util/TokenHelper";

test.use({
  launchOptions: { slowMo: 1500 },
});

const loginJsonPath = path.join(__dirname, "../../test-data/login-data.json");
const LoginCredentials = JSON.parse(fs.readFileSync(loginJsonPath, "utf-8"));

for (const credential of LoginCredentials) {
  test(`LoginTestCase:${credential.testCaseTitle}`, async ({ page }) => {
    const authApiObject = await AuthAPi.create();

    if (credential.expectedResult === "valid") {
      const token = await authApiObject.login({
        userEmail: credential.userEmail,
        userPassword: credential.userPassword,
      });

      await authApiObject.dispose();

      await TokenHlper.inject(page, token);

      await page.goto(paths.home);
      await page.waitForLoadState();
      await expect(page).toHaveURL(/dashboard\/dash/);
    } else {
      const result = await authApiObject.LoginWithIncorrectData({
        userEmail: credential.userEmail,
        userPassword: credential.userPassword,
      });
      await authApiObject.dispose();

      expect(result.status).toBe(credential.status);
      expect(result.message).toContain(credential.expectedMessage[0]);
    }
  });
}
