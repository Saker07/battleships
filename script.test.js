const toTest = require("./script.js");


beforeAll(() => {
    testShip = toTest.shipFactory(3);
})

test("Basic ship factory length:3", () => {
    expect(JSON.stringify(toTest.shipFactory(3))).toBe(
        JSON.stringify({
            length: 3,
            hitpoints: [0, 0, 0],
            hit: (n)=>{
                hipoints[n] = 1;
                return hitpoints;
            },
            isSunk: () => {
                return hitpoints.every(point => point == 1);
            }
        })
    )
})

test("Hit function works? try hitting second position of 3 length ship (input = 1)", () => {
    expect(testShip.hit(1)).toEqual([0, 1, 0]);
} )