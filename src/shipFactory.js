/* ship {
    length: ;
    hitpoints: [0, 0, 0];
    hit: function hit;
    isSunk: function return sunk true or false;
} */



export default function shipFactory(length){
    let hitpoints = [];
    for(let i=0; i<length; i++){
        hitpoints.push(0);
    }
    const hit = (n) => {
        //registers the hit in hitpoints and returns 1.
        hitpoints[n] = 1;
        return 1;
    }
    const isSunk = () => {
        //returns true if the ship is sunk
        return hitpoints.every(point => point == 1);
    }
    return {
        length,
        hitpoints,
        hit,
        isSunk
    }
}

export { shipFactory }

/* module.exports = {
shipFactory
} */