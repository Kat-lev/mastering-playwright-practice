import { test, expect } from "@playwright/test"

//Not passing page but rather REQUEST
test("GET /products test", async ({ request }) => {
  //Define your API
  const apiUrl = "https://api.practicesoftwaretesting.com";
  //Use you basic URL plus the specific info required
  const response = await request.get(apiUrl + "/products");
  //Expect should reflect expected response - we expect 200 success
  expect(response.status()).toBe(200);
  //Create a variable which is this repsonse
  const body = await response.json();
});
