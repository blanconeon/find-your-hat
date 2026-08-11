const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(initialGrid) {
    this.grid = initialGrid;    // grid is now PART OF the object's identity/state
    this.playerPosition = { row: 0, col: 0 }; // you'd likely track this too
  }
 
  stringField(){
   return this.grid.map(row => row.join(' ')).join('\n');
  }
  
  move(direction) {
    // modifies this.grid or this.playerPosition DIRECTLY
    if (direction === 'up') {
      this.playerPosition.row -= 1;
    }
    // ... etc
  }

  print() {
     this.stringField();
    console.log(this.grid); // always prints the CURRENT, up-to-date grid
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();

/*
const game = new Game([[...]]); // grid set up ONCE, when the game starts
game.move('up');    // internally updates this.grid / this.playerPosition
game.print();       // shows the updated state
game.move('left');  // updates again
game.print();       // shows the newly updated state
// */




