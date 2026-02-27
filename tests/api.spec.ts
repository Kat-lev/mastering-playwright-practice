import { test, expect } from "@playwright/test"

const apiUrl = "https://api.practicesoftwaretesting.com";
test.describe("API testing", () => {

  //Not passing page but rather REQUEST
  test("GET /products test", async ({ request }) => {
    //Define your API
    //Moved above
    //Use you basic URL plus the specific info required
    const response = await request.get(apiUrl + "/products");
    //Expect should reflect expected response - we expect 200 success
    expect(response.status()).toBe(200);
    //Create a variable which is this repsonse
    const body = await response.json();
    //Add some assertions
    //We see 9 products on product page
    expect(body.data.length).toBe(9);
    //There are 50 total products
    expect(body.total).toBe(50);
  });

  //New test: user login POST req to users/login
  test("check POST /users/login", async ({ request }) => {
    const response = await request.post(apiUrl + "/users/login", {
      //Data is entered here - it's the payload
      data: {
        email: "customer@practicesoftwaretesting.com",
        password: "welcome01",
      },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    //console.log(body);
    //This console long (viewed in debugger) shows us the auth, access token and type
    expect(body.access_token).toBeTruthy();
  });
});
