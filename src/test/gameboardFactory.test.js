import gameboardFactory, { updateCell, cellHit } from "../gameboardFactory.js";


let gm, cell;
beforeAll(() => {
    gm = gameboardFactory();
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

descrive("Testing endOfGame")