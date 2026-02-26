import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  })

  test("Check sign-in is displayed", async ({ page }) => {
    //Test from video
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("Validate page title", async ({ page }) => {
    //Test from video
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0",);
  });

  test("Check count of items displayed", async ({ page }) => {
    //Test from video
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
  })

  test("Home page test challenge - find and check Thor Hammer", async ({ page }) => {
    //Challenge: Search for Thor Hammer and check result
    //Locate search bar & fill Thor
    await page.getByTestId("search-query").fill("Thor");
    //Submit search
    await page.getByTestId("search-submit").click();
    //Find result - one product card visible
    await expect(page.locator(".card-img-top")).toHaveCount(1);
    //Assertion: Thor amongst results
    await expect(page.getByTestId("product-name")).toHaveText("Thor Hammer");
  });
});
