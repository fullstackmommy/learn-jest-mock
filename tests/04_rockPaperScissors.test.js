import rockPaperScissors from "../src/rockPaperScissors";
import * as utils from "../src/utils";

describe("Rock Paper Scissors", () => {
  it("should return a winner", () => {
    jest.spyOn(utils, "getWinner");
    utils.getWinner.mockImplementation((p1, p2) => p1);

    const winner = rockPaperScissors("Sabrina", "Nicole");
    expect(winner).toBe("Sabrina");
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    utils.getWinner.mock.calls.forEach(args => {
      expect(args).toEqual(["Sabrina", "Nicole"]);
    });

    utils.getWinner.mockRestore();
  });
});
