import { test as setup, expect} from "@playwright/test";

setup("Create customer 01 auth", async ({ page, context }) => {
  const email = "customer@practicesoftwaretesting.com";
  const password = "welcome01";
  const customer01AuthFile = ".auth/customer01.json";

  await page.goto("https://practicesoftwaretesting.com/auth/login")
  //Fill email using const above
  await page.getByTestId("email").fill(email);
  //Fill password using const above
  await page.getByTestId("password").fill(password);
  //Click sumbit
  await page.getByTestId("login-submit").click();
  //Confirm login, display user's name in navbar
  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  //This should create the folder and file
  await context.storageState({ path: customer01AuthFile });
});