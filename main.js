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
    let gameStatus;
    if (!validDirections.includes(direction)) {
      this.print();
      console.log(`${direction} is not a valid instruction`);
      gameStatus = 'reprompt';
      return gameStatus;
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
      this.print();
      console.log('row is out of bounds');
      gameStatus = 'reprompt';
      return gameStatus; // since move is out of bounds it reprompts the user
     }

    if (newCol < 0 || newCol > this.grid[0].length - 1) {
       this.print();
       console.log('col is out of bounds');
        gameStatus = 'reprompt';
      return gameStatus; // since move is out of bounds it reprompts the user
      }
    
    // Updates the actual: this.playerPosition using the values checked above. 
    
    this.playerPosition.row = newRow;   // playerPosition is updated with the already-calculated value over
    this.playerPosition.col = newCol;

    // checks whats value exists in te new position and responds accordingly

    if ([fieldCharacter, pathCharacter].includes(this.grid[newRow][newCol])) {
      this.grid[newRow][newCol] = pathCharacter;
      gameStatus = 'ok';
      this.print();
      return gameStatus;// replaces position with pathCharacter
    } else if (this.grid[newRow][newCol] === hole) {
      this.grid[newRow][newCol] = pathCharacter;
      gameStatus = 'lose';
      this.print();
      console.log('you`ve fallen into a hole!');
      return gameStatus; // replaces position with path charact ad logs
    } else if (this.grid[newRow][newCol] === hat) {
      this.grid[newRow][newCol] = pathCharacter;
      gameStatus = 'win';
      this.print();
      console.log('Congratulations you`ve found the hat!');
      return gameStatus;// replaces position with path charact ad logs
    } 
    
  }

  print() {
    console.clear(); 
     console.log(this.stringField()); // always prints the CURRENT, up-to-date grid
  
  }
}

// function to create a loop using a condition// 

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '░', 'O'],
  ['O', '░', '^'],
]);



function loopFunction (field) {
 field.print(); // 1st prints
 const direction = prompt('Which way? (up/down/left/right): ')//2 prompts the user
 let statusGame = field.move(direction);// 3 updtaes position and replaces characters as needed, move() prints.
 
 while (statusGame === 'ok' || statusGame === 'reprompt'){ // makes continuation of prompt, update and print until condition is met. 
  let renewedDirection = prompt('good work, Which way now? (up/down/left/right): ')
  statusGame = field.move(renewedDirection);
  //move() prints.
 }
}

loopFunction(myField);









