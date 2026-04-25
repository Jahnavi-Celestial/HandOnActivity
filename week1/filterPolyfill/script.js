const arr = [10,20,30,40,50]

Array.prototype.myFilter = function(callback){
    const newArr = []
    if (typeof callback !== "function") {
        throw new Error(callback + " is not a function");
    }

    for(let i = 0; i < this.length; i++){
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }

   return newArr 
}

let ans = arr.myFilter((item)=>{
    return item > 30
})
console.log(ans)