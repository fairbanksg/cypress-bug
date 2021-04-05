describe("Cypress bug", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("should fail", function () {
    cy.focused().blur();
    cy.findByText("Testing 123").as("TheSpan").should("be.visible");

    cy.get("@TheSpan").should("contain.text", "Testing 123");

    cy.findByText("Increment key").click();

    cy.get("@TheSpan").should("contain.text", "Testing 123");
  });
});
