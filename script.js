const fs = require('fs');
//https://adventofcode.com/2015/day/2
//read puzzle input 
//findFloor answer: 74
//findBasement answer: 1795
fs.readFile('./puzzle1.txt', (err, data) => {
    
    if(err){
        console.log('error reading directions: ', err);
    }else{
        let directions = data.toString();
         findFloor1(directions);
         findFloor(directions);
         findBasement2(directions);
         findBasement(directions);
    }
})


function findFloor(directions){
    console.time('directions');
    var whereAmI = 0;
    for (i=0; i< directions.length; i++){
        if(directions[i] === '('){
            whereAmI ++;
            
        }else if(directions[i] === ')'){
            whereAmI --;
        }
   }
   console.log('C: Problem Solved, whereAmI: ',whereAmI);
   console.timeEnd('directions');
}

function findFloor1(directions){
    console.time('directions1');
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === '('){
            return acc += 1
        }else if (currentValue === ')'){
            return acc -= 1
        }
    }, 0)
    console.log('A: floor:', answer);
    console.timeEnd('directions1');
}

function findBasement(directions){
    console.time('findBasement');
    let whereAmI = 0;
    let i = 0;
    do {
        if(directions[i] === '('){
            whereAmI ++;
        }else if(directions[i] === ')'){
            whereAmI --;
        }
        i++
    } 
    while (whereAmI >= 0);

    console.log('C: I just entered the basement: ', i);                
   console.timeEnd('findBasement');
}

function findBasement2(directions){
    console.time('findBasement1');
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
        if (currentItem === '('){
            accumulator += 1
        }else if (currentItem === ')'){
            accumulator -= 1
        }
        counter ++;
        return accumulator < 0;
    })

    console.log('A: I just entered the basement: ', counter);                
   console.timeEnd('findBasement1');
}