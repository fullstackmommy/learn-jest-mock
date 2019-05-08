import rockPaperScissors from "../src/rockPaperScissors";
import * as utils from "../src/utils";

describe("Rock Paper Scissors", () => {
  it("should return a winner", () => {
    // arrange
    const originalgetWinner = utils.getWinner;
    utils.getWinner = (p1, p2) => p1;
    // act
    const winner = rockPaperScissors("Sabrina", "Nicole");

    // assert
    expect(winner).toBe("Sabrina");
    utils.getWinner = originalgetWinner;
  });
});
