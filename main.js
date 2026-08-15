const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// smaple prompt to pass to direction
//const name = prompt('What is your name?');

class Field {
  constructor(initialGrid) {
    this.grid = initialGrid;    // grid is now PART OF the object's identity/state
    this.playerPosition = { row: 0, col: 0 }; // you'd likely track this too
  }
 
  stringField(){
   return this.grid.map(row => row.join(' ')).join('\n');
  }
  
  move(direction) {
    //temporary variable, check if the move is valid, and only then actually commit it to
    let newRow = this.playerPosition.row;   // start as a COPY of current row
    let newCol = this.playerPosition.col;   // start as a COPY of current col
    // modifies this.grid or this.playerPosition DIRECTLY
    if (direction === 'up') {
      //this.playerPosition.row -= 1;
    }
    if (direction === 'down') {
      //this.playerPosition.row += 1;
    }
    if (direction === 'right') {
      //this.playerPosition.column += 1;
    }
    if (direction === 'left') {
      //this.playerPosition -= 1;
    }
    // ... etc
  }

  print() {
     console.log(this.stringField()); // always prints the CURRENT, up-to-date grid
  
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.print();
const direction = prompt('Which way? ');
myField.move(direction);
myField.print();



/*
const game = new Game([[...]]); // grid set up ONCE, when the game starts
game.move('up');    // internally updates this.grid / this.playerPosition
game.print();       // shows the updated state
game.move('left');  // updates again
game.print();       // shows the newly updated state
// */






