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
  getMove(wells, store1, store2){
    let move = 2;
    let directMove = false;
    for(let i=5; i>=0; i--){
      if(wells[i] == 6-i){
        move = i;
        directMove = true;
       break;
      }
    }
    if(directMove == false){
      for(let i=5; i>=0; i--){
        if(wells[i] >=1){
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
