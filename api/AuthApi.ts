import { expect, APIRequestContext, request } from "@playwright/test";

const Base_URL = "https://rahulshettyacademy.com/client/";

export type loginCredentials = {
  userEmail: string;
  userPassword: string;
};
export type invalidLoginResult = {
  status: number;
  message: string[];
};

export class AuthAPi {
  private constructor(private readonly apiContext: APIRequestContext) {}

  static async create(): Promise<AuthAPi> {
    const apiContext = await request.newContext({ baseURL: Base_URL });
    return new AuthAPi(apiContext);
  }

  async login({ userEmail, userPassword }: loginCredentials): Promise<string> {
    const loginReponse = await this.apiContext.post("/api/ecom/auth/login", {
      data: { userEmail, userPassword },
    });
    // why this code not shown the message of failure in terminal when run the test
    expect(
      loginReponse.ok(),
      `Login failed for user with ${userEmail} `,
    ).toBeTruthy();

    const loginReponseBodyJson = await loginReponse.json();

    expect(loginReponseBodyJson.token, `Token is missed`).toBeTruthy();
    return loginReponseBodyJson.token as string;
  }

  async LoginWithIncorrectData({
    userEmail,
    userPassword,
  }: loginCredentials): Promise<invalidLoginResult> {
    const loginReponse = await this.apiContext.post("/api/ecom/auth/login", {
      data: { userEmail, userPassword },
    });

    const loginReponseBodyJson = await loginReponse.json();

    return {
      status: loginReponse.status(),
      message: loginReponseBodyJson.message,
    };
  }

  async dispose(): Promise<void> {
    await this.apiContext.dispose();
  }
}
