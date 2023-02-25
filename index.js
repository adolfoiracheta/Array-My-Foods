let myFood = ['Burritos', 'Tacos', 'Eggs', 'Bacon', 'Rice', 'Chicken'];

for (let i = 0; i < myFood.length; i++) {
//  console.log(myFood[i])
}

//let myFood = ['Burritos', 'Tacos', 'Eggs', 'Bacon', 'Rice', 'Chicken'];
myFood.forEach(myFunction)

function myFunction(element) {
//  console.log(element)
}

// This is the While Loop
let i = 0;
while (i < myFood.length) {
  console.log(myFood[i])
  i++
}

// This is the Do While Loop
i = 0
do {
  console.log(myFood[i])
  i++
}

while (i < myFood.length)