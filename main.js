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
    const validDirections = ['up', 'down', 'right', 'left'];

    if (!validDirections.includes(direction)) {
      console.log(`${direction} is not a valid instruction`);
    }
    //temporary variable, check if the move is valid, and only then actually commit it to
    let newRow = this.playerPosition.row;   // start as a COPY of current row
    let newCol = this.playerPosition.col;   // start as a COPY of current col

    if (direction === 'up') {
      newRow -= 1;   // just adjusts the TEMPORARY copy
       }
    if (direction === 'down') {
      newRow += 1;   // just adjusts the TEMPORARY copy
       }
    if (direction === 'left') {
      newCol -= 1;   // just adjusts the TEMPORARY copy
       }
    if (direction === 'right') {
      newCol += 1;   // just adjusts the TEMPORARY copy
       }

     //check if new positioning is out of bounds
     if (newRow < 0 || newRow > this.grid.length - 1) {
      console.log('row is out of bounds')
      return;   // this stops the WHOLE move() function immediately
     }

    if (newCol < 0 || newCol > this.grid[0].length - 1) {
       console.log('col is out of bounds')
      return;   // this stops the WHOLE move() function immediately 
      }
    
    // Updates the actual: this.playerPosition using the values checked above. 
    
    this.playerPosition.row = newRow;   // playerPosition is updated with the already-calculated value over
    this.playerPosition.col = newCol;

    // checks whats value exists in te new position and responds accordingly

    if (this.grid[newRow][newCol] === fieldCharacter) {
      this.grid[newRow][newCol] = pathCharacter;
      return;
    }
    
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
const direction = prompt('Which way? (up/down/left/right): ');
myField.move(direction);
myField.print();



/*
const game = new Game([[...]]); // grid set up ONCE, when the game starts
game.move('up');    // internally updates this.grid / this.playerPosition
game.print();       // shows the updated state
game.move('left');  // updates again
game.print();       // shows the newly updated state
// */






