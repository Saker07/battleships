import {shipFactory} from "../shipFactory.js"

let testShip;

beforeEach(() => {
    testShip = shipFactory(3);
})
afterEach(() => {
    testShip = shipFactory(3);
})

test("Basic ship factory length:3", () => {
    expect(JSON.stringify(shipFactory(3))).toBe(
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
    expect(testShip.hit(1)).toBe(true);
    expect(testShip.hitpoints).toEqual([0, 1, 0])
})

describe("Does isSunk() work?", () => {
    test("Is sunk function works? Try using it on a partially hit ship", () => {
        testShip.hit(0);
        testShip.hit(1);
        expect(testShip.isSunk()).toBe(false);
    })
    test("Is sunk function works? Try using it on a sunk ship", () => {
        testShip.hit(0);
        testShip.hit(1);
        testShip.hit(2);
        expect(testShip.isSunk()).toBe(true);
    })
})