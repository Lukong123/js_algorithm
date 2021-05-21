
function convertFahrToCelsius(fahrenheit) 
{ 
    if(Array.isArray(fahrenheit)){
        return `${JSON.stringify(fahrenheit)} is not a valid number but a/an array`;
      }
    if (isNaN(parseInt(fahrenheit))) { 
    return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${typeof fahrenheit}`;
    }
  var convFormula = (fahrenheit - 32) * 5 / 9;  return parseFloat(convFormula.toFixed(4))
}
console.log(convertFahrToCelsius({temp: 0}))



// Exercise 2
const checkYuGiOh = (n) => {
  let result = []
  if(isNaN(parseInt(n))){
      return `Invalid Parameter: ${JSON.stringify(n)}`
  }
 for (let i = 1; i <= n; i++){
    if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      result.push("yu-gi-oh")
      continue;
    }else if(i % 2 === 0 && i % 3 === 0){
      result.push("yu-gi")
      continue;
    }else if(i % 2 === 0 && i % 5 === 0){
      result.push("yu-oh")
      continue;
    }else if(i % 3 === 0 && i % 5 === 0){
      result.push("gi-oh")
      continue;
    }else if(i % 2 === 0){
      result.push("yu")
      continue;
    }else if(i % 3 === 0){
      result.push("gi")
      continue;
    }else if(i % 5 === 0){
      result.push("oh")
      continue;
    }else{
        result.push(i)
    }
 }
 console.log(result)
 return result
}
console.log(checkYuGiOh(10))
