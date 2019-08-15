  
  Array.prototype.uniq = function() {
    let newArray = [];
  
    this.forEach(function(el) {
      if (!newArray.includes(el)){
        newArray.push(el); 
      }
    });

    return newArray;
  };

  let uniqTestArray = [1,2,2,3,3,4,5,5];
  uniqTestArray.uniq();





  Array.prototype.twoSum = function() {
    let newArray = [];
    this.forEach( el1 =>{
        this.forEach( el2 => {
          if ((el1 + el2 === 0) && ( this.indexOf(el2) > this.indexOf(el1))) {
            newArray.push( [this.indexOf(el1), this.indexOf(el2) ] );
          }
          }
        );
      }
    );

    return newArray;
  };

  let twoSumTestArray = [-4, 3, 7, 1, 2, 4, -1];  //[ [0,5] [3,6] ]
  // console.log(twoSumTestArray.twoSum());



    // 2D = [ [2,4,5],[6,8,7],[5,6,2]]

Array.prototype.transpose = function () {
  let transposed = [];
  
  for (let i = 0; i < this.length; i++) { 
    let subarr = [];
    for (let ii = 0; ii < this.length; ii++) {
      subarr.push(this[ii][i]);
    }
    transposed.push(subarr);
  }
  return transposed;
};

let arr2 = [[2, 4, 5], [6, 8, 7], [5, 6, 2]];
arr2.transpose();

// arrray = Array(3).fill(Array(3).fill(0));
