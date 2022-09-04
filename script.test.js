const toTest = require("./script.js");

test("Basic ship factory length:3", () => {
    expect(JSON.stringify(toTest.shipFactory(3))).toBe(
        JSON.stringify({
            length: 3,
            hitpoints: [0, 0, 0],
            hit: (n)=>{
                hipoints[n] = 1;
            },
            isSunk: () => {
                return hitpoints.every(point => point == 1);
            }
        })
    )
})