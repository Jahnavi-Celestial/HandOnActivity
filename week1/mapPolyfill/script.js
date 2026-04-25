const arr = [10,20,30,40,50]

Array.prototype.myMap = function(callback){
    const newArr = []
    if (typeof callback !== "function") {
        throw new Error(callback + " is not a function");
    }

    for(let i = 0; i < this.length; i++){
        let newEle = callback(arr[i], i, arr)
        newArr.push(newEle);
    }

   return newArr 
}

let ans = arr.myMap((item)=>{
    return item * 2
})

console.log(ans)