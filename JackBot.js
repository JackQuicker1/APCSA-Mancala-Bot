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
  function getMove(wells, store1, store2){
    let move = -1;
    let directMove = false;
    
    // Perfect move: if the number of beads in the well equals the index of the well plus 1
    for(let i = 5; i >= 0; i--){
        if(wells[i] === 6 - i){
            move = i;
            directMove = true;
            break;
        }
    }

    // Check for captures: if a move ends in an empty well on your side
    if(!directMove){
        for(let i = 5; i >= 0; i--){
            let endIndex = (i + wells[i]) % 12;
            if(wells[i] > 0 && endIndex < 6 && wells[endIndex] === 0){
                move = i;
                directMove = true;
                break;
            }
        }
    }

    // Avoid moves that give the opponent a turn
    if(!directMove){
        for(let i = 5; i >= 0; i--){
            let endIndex = (i + wells[i]) % 12;
            if(wells[i] > 0 && endIndex !== 6){
                move = i;
                directMove = true;
                break;
            }
        }
    }

    // If no direct move, pick the first available move
    if(!directMove){
        for(let i = 5; i >= 0; i--){
            if(wells[i] >= 1){
                move = i;
                break;
            }
        }
    }
    
    return move;
}
 
  getName(){
    return this.name
  }
 
 
}
