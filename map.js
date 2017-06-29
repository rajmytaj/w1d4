var words = ["ground", "control", "to", "major", "tom"];

function map(array, fcn){
  var finalArr =[]; 
  for(var i =0; i < array.length; i++){
     finalArr.push(fcn(array[i])); 
   }
  return finalArr; 
}

var output = map(words, function(word) {
  return word.length;
});

console.log(output);
// map(words);