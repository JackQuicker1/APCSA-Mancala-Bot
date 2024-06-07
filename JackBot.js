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
 function getMove(wells, store1, store2) {
    let move = -1;

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

    // Avoid giving the opponent an extra turn (avoid moves ending in opponent's store)
    for (let i = 5; i >= 0; i--) {
        let endIndex = (i + wells[i]) % 13;
        if (wells[i] > 0 && endIndex !== 6) {
            return i;  // Return immediately if a valid move is found
        }
    }

    // If no strategic move is found, pick the first available move
    for (let i = 5; i >= 0; i--) {
        if (wells[i] > 0) {
            return i;  // Return immediately if any move is found
        }
    }

    // If no move is possible, return -1 (should not happen in a normal game)
    return move;
}
  getName(){
    return this.name
  }
 
 
}
