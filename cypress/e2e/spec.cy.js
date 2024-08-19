describe("API Test for Reqres Users", () => {
  it("should return status code 201", () => {
    cy.request({
      method: "POST",

      url: "https://reqres.in/api/users",

      body: {
        name: "SirawitTop",

        job: "Full Stack Developer",
      },

      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Assert that the status code is 201
      expect(response.status).to.eq(201);

      // Optionally, you can also assert the response body if needed
      expect(response.body).to.have.property("name", "SirawitTop");
      expect(response.body).to.have.property("job", "Full Stack Developer");
    });
  });
});
