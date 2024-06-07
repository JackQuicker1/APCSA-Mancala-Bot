class JackBot{
  constructor(name){
    this.name = name;
  }
  setPlayer1(player1){
    this.isPlayer1 = player1;
  }
  /*wells is a 12 element int array of the number of pieces in each space (shown below)
  S1 and S2 are the player's stores, which decides the score for each player.
 
                      ||  Opponent
                      \/      
           +====================================+
           |    | 11 | 10 | 9  | 8 | 7 | 6 |    |
           | S2 |==========================| S1 |
           |    | 0  | 1  | 2  | 3 | 4 | 5 |    |
           +====================================+
                                /\
                        Player  ||
  */
  // getMove(wells, store1, store2){
  //   let move;
  //   let directMove = false;
  //   for(let i=5; i>=0; i--){
  //     if(wells[i] == 6-i){
  //       move = i;
  //       directMove = true;
  //      break;
  //     }
  //   }
  //   //picks after perfect move
  //   if(directMove == false){
  //     for(let i=5; i>=0; i--){
  //       if(wells[i] >=1){
  //         move = i;
  //         break;
  //       }
  //     }
  //   }
        
    
  //   return move;
  // }
 getMove(wells, store1, store2) {
    let move = -1;
    let maxGain = -1;

    // Helper function to simulate a move and return the resulting number of beads in the player's store
    function simulateMove(wells, move) {
        let newWells = wells.slice();
        let beads = newWells[move];
        newWells[move] = 0;
        let index = move;

        while (beads > 0) {
            index = (index + 1) % 12;
            newWells[index]++;
            beads--;
        }

        let gain = 0;
        if (index < 6 && newWells[index] === 1) {
            gain += newWells[11 - index] + 1; // Capture opponent's beads
            newWells[11 - index] = 0;
            newWells[index] = 0;
        }
        if (index == 6) {
            gain += 1; // Extra turn
        }

        return gain;
    }

    // Check for perfect move (move that ends in the store)
    for (let i = 5; i >= 0; i--) {
        if (wells[i] === 6 - i) {
            return i;  // Return immediately if a perfect move is found
        }
    }

    // Check for captures (ending in an empty well on player's side)
    for (let i = 5; i >= 0; i--) {
        let endIndex = (i + wells[i]) % 12;
        if (wells[i] > 0 && endIndex < 6 && wells[endIndex] === 0) {
            return i;  // Return immediately if a capture move is found
        }
    }

    // Evaluate all moves and choose the one with the maximum gain
    for (let i = 5; i >= 0; i--) {
        if (wells[i] > 0) {
            let gain = simulateMove(wells, i);
            if (gain > maxGain) {
                maxGain = gain;
                move = i;
            }
        }
    }

    // If no strategic move is found, pick the first available move
    if (move === -1) {
        for (let i = 5; i >= 0; i--) {
            if (wells[i] > 0) {
                return i;  // Return immediately if any move is found
            }
        }
    }

    return move;
}
  getName(){
    return this.name
  }
 
 
}
