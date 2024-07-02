// consonats
function vowcount(){
var vow="aeiou"
var str="hello world"
var count=0
for(var i=0;i<str.length;i++){
    if(vow.indexOf(str[i])==-1){
        return false
}
else{
    count++
    }
}
console.log(count)
}
// factors
function factors(num){
    var count=0
    for(var i=1;i<=num;i++){
        if(num%i==0){
            count++
            console.log(i)
            }   
    }
console.log(count)
}        
factors(12)


const numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}