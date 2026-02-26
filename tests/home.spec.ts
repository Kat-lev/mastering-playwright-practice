import { test, expect } from "@playwright/test";

test.describe("Home page with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("Check screenshot - no auth", async ({ page }) => {
    await expect(page).toHaveScreenshot("home-no-auth.png");
  }) 

  test("Check sign in", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("Validate page title", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });

  test("Grid loads with 9 items", async ({ page }) => {
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
    expect(await productGrid.getByRole("link").count()).toBe(9);
  });

  test("Search for Thor Hammer", async ({ page }) => {
    const productGrid = page.locator(".col-md-9");
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});

test.describe("Home page cusotmer 01 auth", () => {
  test.use({ storageState: ".auth/customer01.json"});
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  })

  test("Check screenshot - customer01 auth", async ({ page }) => {
    await expect(page).toHaveScreenshot("home-cust01-auth.png");
  }); 

  test("Check customer01 is signed in correctly", async ({ page }) => {
    //Sign-in text should be visible as user should already be signed in. Use ".not" syntax.
    await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    await expect(page.locator('[data-test="nav-menu"]')).toContainText("Jane Doe");
  })
})
