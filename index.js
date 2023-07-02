// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
// beforeEach(function () {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   });
  function  destructivelyAppendCat(name){
    cats.push(name);
  }
  function destructivelyPrependCat(name){
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat(){
    cats.pop();
  }
  function   destructivelyRemoveFirstCat(){
    cats.shift();
  }
  function   appendCat(name){
    cats.push(name);
  }