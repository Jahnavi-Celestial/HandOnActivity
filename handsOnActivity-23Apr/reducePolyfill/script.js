const arr = [10,20,30,40,50]

Array.prototype.myReduce = function(callback, initialVal){
    if (typeof callback !== "function") {
        throw new Error(callback + " is not a function");
    }

    let acc = initialVal
    let index = 0

    if(initialVal == undefined){
        acc = this[0]
        index = 1
    }

    for(let i = index; i < this.length; i++){
        acc = callback(acc, arr[i], i, this)
    }

    return acc;
}

let ans = arr.myReduce((total, item)=>{
    return item+total 
})
console.log(ans)
console.log(arr)