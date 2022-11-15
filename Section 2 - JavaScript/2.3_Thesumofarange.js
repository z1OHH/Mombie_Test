function range(start,end){
let rangenum = []
if(start < end){
    for(let i = start; i <= end;i++){
        rangenum.push(i)
    }
}
else{
    for(let i = start; i >= end;i--){
        rangenum.push(i)
    }
}
return rangenum
}

function sum(num){
    
}
console.log(range(1,10))
console.log(range(5,2))
console.log(sum(1,10))