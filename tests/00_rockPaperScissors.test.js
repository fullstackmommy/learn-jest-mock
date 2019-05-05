import rockPaperScissors from "../src/rockPaperScissors";

describe("Rock Paper Scissors", () => {
    it("should return a winner", () => {
        const winner = rockPaperScissors("Sabrina", "Nicole");
        //expect(winner).toBe('Sabrina')
        expect(['Sabrina', 'Nicole'].includes(winner)).toBe(true)
    });
});
