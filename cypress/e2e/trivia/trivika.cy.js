describe("Trivia App", () => {
  beforeEach(() => {
    cy.intercept(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
      { fixture: "trivia.json" }
    ).as("trivias");
    cy.visit("http://localhost:3000/");
  });

  it("App initialization", () => {
    cy.get('[data-cy="begin-btn"]').click();
    cy.get('[data-cy="confirm-btn"]').should("have.html", "Confirm Answer");
    cy.get('[data-cy="back-btn"]').should("have.html", "Back");
    cy.get('[data-cy="label-question-true"]').should("contain", "True");
    cy.get('[data-cy="label-question-false"]').should("contain", "False");
    cy.get('[data-cy="label-question-false"]').should("contain", "False");
    cy.get('[data-cy="confirm-btn"]').should("be.disabled");
    cy.get('[data-cy="back-btn"]').should("be.disabled");
  });

  it("Confirm answer to next page", () => {
    cy.get('[data-cy="begin-btn"]').click();
    cy.get('[data-cy="label-question-true"]').click();
    cy.get('[data-cy="confirm-btn"]').click();
    cy.get('[data-cy="trivia-page-no"]').should("have.html", "2 of 10");
    cy.get('[data-cy="back-btn"]').should("not.be.disabled");
    cy.get('[data-cy="confirm-btn"]').should("be.disabled");
  });

  it("Get to results page", () => {
    cy.get('[data-cy="begin-btn"]').click();
    cy.wait("@trivias").then((intercept) => {
      const data = intercept.response.body;

      data.results.forEach((trivia, index) => {
        cy.get('[data-cy="trivia-page-no"]').should(
          "have.html",
          `${index + 1} of 10`
        );
        cy.get('[data-cy="label-question-true"]').click();
        cy.get(`[data-cy="question-${index}-true-option"]`).should(
          "be.checked"
        );
        cy.get('[data-cy="confirm-btn"]').click();
      });
    });
  });

  it("Restart trivia app", () => {
    cy.get('[data-cy="begin-btn"]').click();
    cy.wait("@trivias").then((intercept) => {
      const data = intercept.response.body;

      data.results.forEach((trivia, index) => {
        cy.get('[data-cy="trivia-page-no"]').should(
          "have.html",
          `${index + 1} of 10`
        );
        cy.get('[data-cy="label-question-true"]').click();
        cy.get(`[data-cy="question-${index}-true-option"]`).should(
          "be.checked"
        );
        cy.get('[data-cy="confirm-btn"]').click();
      });

      cy.get('[data-cy="try-again-btn"').click();
      cy.get('[data-cy="begin-btn"]').click();
      cy.get('[data-cy="trivia-page-no"]').should("have.html", "1 of 10");

      cy.get('[data-cy="confirm-btn"]').should("have.html", "Confirm Answer");
      cy.get('[data-cy="back-btn"]').should("have.html", "Back");
      cy.get('[data-cy="label-question-true"]').should("contain", "True");
      cy.get('[data-cy="label-question-false"]').should("contain", "False");
      cy.get('[data-cy="label-question-false"]').should("contain", "False");
      cy.get('[data-cy="confirm-btn"]').should("be.disabled");
      cy.get('[data-cy="back-btn"]').should("be.disabled");
    });
  });
});
