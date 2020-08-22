grid = [];
let gameOfLife = false;
const n = 50;
function setup()
{
  createCanvas(500, 500);
  for (let i = 0; i < n; i++)
  {
    grid.push([]);
    for (let j = 0; j < n; j++)
    {
      grid[i][j] = 0;
    }
  }

  frameRate(2);

}

function draw()
{
  
  for (let i = 0; i < n; i++)
  {
    for (let j = 0; j < n; j++)
    {
      if (grid[i][j] == 1)
      {
        fill(0);
      }
      else
      {
        fill(255);
      }
      rect(j * width / n, i * height / n, width / n, height / n);
    }
  }

  

  if (gameOfLife)
  {

    let newGrid = [];

    for (let i = 0; i < n; i++)
    {
      newGrid.push([]);
      for (let j = 0; j < n; j++)
      {
        newGrid[i][j] = grid[i][j];
      }
    }

    for (let x = 0; x < n; x++)
    {
      for (let y = 0; y < n; y++)
      {
        let numOfNeighbors = 0;
        for (let dx = -1; dx < 2; dx++)
        {
          for (let dy = -1; dy < 2; dy++)
          {
            if ((dx != 0 || dy != 0) && x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && grid[y + dy][x + dx] == 1)
            {
              numOfNeighbors ++;
            }
          }
        }
        if ((numOfNeighbors == 2 || numOfNeighbors == 3) && grid[y][x] == 1)
        {
          newGrid[y][x] = 1;
        }
        else if (numOfNeighbors < 2)
        {
          newGrid[y][x] = 0;
        }
        else if (numOfNeighbors == 3)
        {
          newGrid[y][x] = 1;
        }
        else if (numOfNeighbors > 3)
        {
          newGrid[y][x] = 0;
        }
      }
    }

    grid = newGrid;
  }
}

function mousePressed()
{
  x = int(map(mouseX, 0, width, 0, n));
  y = int(map(mouseY, 0, width, 0, n));

  grid[y][x] = 1;
}

function keyPressed()
{
  if (key == ' ')
  {
    gameOfLife = !gameOfLife;
  }
}