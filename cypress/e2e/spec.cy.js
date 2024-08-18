describe('API Test for Reqres Users', () => {  // Corrected arrow function syntax
  it('should return status code 201 for POST /api/users', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: 'SirawitTop',
        job: 'Full Stack Developer'
      },
      headers: {  // 'Headers' should be lowercase 'headers'
        'content-type': 'application/json'
      }
    }).then((response) => {
      // Assert that the response status code is 201
      expect(response.status).to.eq(201);

      // Assert that the response body is not null
      expect(response.body).to.not.be.null;

      // Assert that the response body has the expected keys
      expect(response.body).to.have.keys('name', 'job', 'id', 'createdAt');

      // Assert that the response body has the expected values
      expect(response.body.name).to.eq('SirawitTop');
      expect(response.body.job).to.eq('Full Stack Developer');
    });
  });
});
