import gameboardFactory, { updateCell, cellHit } from "../gameboardFactory.js";


let gb, cell;
beforeAll(() => {
    gb = gameboardFactory();
    cell = {};
})

describe("Testing updateCell", () => {
    beforeAll(() => {
        cell = {};
        cell.state = 0;
        cell.hit = () => true;
        cell.isSunk = () => false;
    });
    test("Cell = -1 (miss)", ()=>{
        cell.state = -1;
        expect(updateCell(cell).state).toBe(-1);
    });
    test("Cell = 0 (default)", () => {
        cell.state = 0;
        expect(updateCell(cell).state).toBe(0);
    })
    test("Cell = 1 (Ship hit, not sunk)", () => {
        cell.state = 1;
        expect(updateCell(cell).state).toBe(1);
    })
    test("Cell = 0 (Ship hit, sunk but not updated)", () => {
        cell.state = 1;
        cell.isSunk = () => true;
        expect(updateCell(cell).state).toBe(2);
    })
    test("Cell = 2 (Ship sunk)", () => {
        cell.state = 2;
        cell.isSunk = () => true;
        expect(updateCell(cell).state).toBe(2);
    })
})

describe("Testing receiveDamage", () => {
    beforeAll(() => {
        cell = {};
        cell.state = 0;
    })
    test("Receive damage without a ship", () => {
        expect(cellHit(cell).state).toBe(-1);
    })
    test("Receive damage when already missed", () => {
        expect(cellHit(cell).state).toBe(-1);
    })
    test("Receive damage with a ship", () => {
        cell.hit = () => 1;
        cell.state = 0;
        expect(cellHit(cell).state).toBe(1);
    })
    test("Receive damage with a ship already hit", () => {
        expect(cellHit(cell).state).toBe(1);
    })
})

describe("Testing placeShip", () => {
    test("Place ship length=3, axis x", () => {
        let ship = gb.placeShip(1, 1, "x", 3);
        expect(gb.update()[1][1].hit).not.toBe(undefined);
        expect(gb.update()[2][1].hit).not.toBe(undefined);
        expect(gb.update()[3][1].hit).not.toBe(undefined);
        expect(gb.update()[4][1].hit).toBe(undefined)
    })
    test("Place ship length=4, axis y", () => {
        gb.placeShip(1, 2, "y", 4);
        expect(gb.update()[1][2].hit).not.toBe(undefined);
        expect(gb.update()[1][3].hit).not.toBe(undefined);
        expect(gb.update()[1][4].hit).not.toBe(undefined);
        expect(gb.update()[1][5].hit).not.toBe(undefined);
        expect(gb.update()[1][6].hit).toBe(undefined);
    })
    test("Place ship length=3, axis x, collision", () => {
        gb.placeShip(0, 1, "x", 2);
        expect(gb.update()[0][1].hit).toBe(undefined);
        expect(gb.update()[1][1].hit).not.toBe(undefined);
    })
    test("Place ship length=1, axys y, at the corner, NOT outOfBound", () => {
        gb.placeShip(9, 9, "y", 1);
        expect(gb.update()[9][9].hit).not.toBe(undefined);
    })
    test("Place ship length=3, axis y, outOfBound", () => {
        gb.placeShip(8, 9, "y", 2);
        expect(gb.update()[8][9].hit).toBe(undefined);
    })

})