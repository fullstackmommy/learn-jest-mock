import rockPaperScissors from "../src/rockPaperScissors";
import * as utilsMock from "../src/utils";

jest.mock("../src/utils");

describe("Rock Paper Scissors", () => {
  it("should return a winner", () => {
    const winner = rockPaperScissors("Sabrina", "Nicole");
    expect(winner).toBe("Sabrina");
    expect(utilsMock.getWinner).toHaveBeenCalledTimes(2);
    utilsMock.getWinner.mock.calls.forEach(args => {
      expect(args).toEqual(["Sabrina", "Nicole"]);
    });
  });
});
