Array.prototype.myEach = function (callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }

 
};


Array.prototype.myMap1 = function(callback) {
  let finalArray = [];
  
  for ( let i = 0; i < this.length; i++ ) {
    finalArray.push(callback(this[i]));
  }

  return finalArray;
};


function square(num){
  return num * num;
};

// arr1.myMap1(square);



// -------------
Array.prototype.myMap = function(callback) {
  let finalArray = []
  this.myEach(el => finalArray.push(callback(el)) ); 

  return finalArray
};



function plusOne(num) {
  return num + 1;
};

// arr1.myMap(plusOne);


// -------------

Array.prototype.myReduce = function(callback, acc=this[0]) {
  
  this.myEach(el => callback(el,acc));

};


function summing(el,acc){
  acc += el;
  return acc;
};

let arr1 = [4, 3, 4, 3];

arr1.myReduce(summing);







// function firstt(arr, b=arr[0]) {
//   return b;
// }

// firstt([2,4,3],7);







