import rockPaperScissors from "../src/rockPaperScissors";
import * as utils from "../src/utils";

describe("Rock Paper Scissors", () => {
  it("should return a winner", () => {
    const originalGetWinner = utils.getWinner;
    utils.getWinner = (...args) => {
      utils.getWinner.mock.calls.push(args);
      return args[0];
    };
    utils.getWinner.mock = {
      calls: []
    };

    const winner = rockPaperScissors("Sabrina", "Nicole");
    expect(winner).toBe("Sabrina");
    expect(utils.getWinner.mock.calls).toHaveLength(2);
    utils.getWinner.mock.calls.forEach(args => {
      expect(args).toEqual(["Sabrina", "Nicole"]);
    });

    utils.getWinner = originalGetWinner;
  });
});
