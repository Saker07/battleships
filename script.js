/* ship {
    length: ;
    hitpoints: [0, 0, 0];
    hit: function hit;
    isSunk: function return sunk true or false;
} */

function shipFactory(length){
        let hitpoints = [];
        for(i=0; i<length; i++){
            hitpoints.push(0);
        }
        const hit = (n) => {
            hipoints[n] = 1;
            return hitpoints;
        }
        const isSunk = () => {
            return hitpoints.every(point => point == 1);
        }
        return {
            length,
            hitpoints,
            hit,
            isSunk
        }
}

module.exports = {
    shipFactory
}