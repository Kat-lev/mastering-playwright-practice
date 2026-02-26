import { test, expect } from "@playwright/test";

test("Home page tests from video", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  //Test from video: Ensure sign-in link is displayed
  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");

  //Test from video: Check page title
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

  //Test from video: Check the count of the items displayed
  const productGrid = page.locator(".col-md-9");
  await expect(productGrid.getByRole("link")).toHaveCount(9);
});

test("Home page test challenge - find and check Thor Hammer", async ({ page }) => {
  //Challenge: Search for Thor Hammer and check result
  await page.goto("https://practicesoftwaretesting.com/");
  //Locate search bar & fill Thor
  await page.getByTestId("search-query").fill("Thor");
  //Submit search
  await page.getByTestId("search-submit").click();
  //Find result - one product card visible
  await expect(page.locator(".card-img-top")).toHaveCount(1);
  //Assertion: Thor amongst results
  await expect (page.getByTestId("product-name")).toHaveText("Thor Hammer");
  });
