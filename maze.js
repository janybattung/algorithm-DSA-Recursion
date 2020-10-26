let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]; 


const solveMaze = function(row, column, directions, maze){

 if (maze[row][column] == 'e'){
  return directions
}


if (column < maze[0].length - 1 && maze[row][column + 1] != ('*')){
  maze[row][column] = '*'
  let newColumn = column + 1
  let newRow = row
  return directions = 'R' + solveMaze(newRow, newColumn, directions, maze)

}  
  
if (row < maze.length - 1 && maze[row  + 1][column] != ('*')){
  maze[row][column] = '*'
  let newColumn = column
  let newRow = row + 1
  return directions = 'D' + solveMaze(newRow, newColumn, directions, maze)
}  
  
if (column > 0 && maze[row][column - 1] != ('*')){
  maze[row][column] = '*'
  let newColumn = column - 1
  let newRow = row
  return directions = 'L' + solveMaze(newRow, newColumn, directions, maze)

}
  
 if (row > 0 && maze[row - 1][column] != ('*')){
  maze[row][column] = '*'
  let newColumn = column
  let newRow = row - 1
  return directions = 'U' + solveMaze(newRow, newColumn, directions, maze)
}    
}
