var arr = [1,2,3,4,5,6];

// arr.map(function (a,b,c) {
//     console.log((a*a),b,c);
// });



Array.prototype.myMap = function (callback) {
    if (typeof callback !== 'function' ){
        //抛出类型错误
        throw new TypeError(callback + ' is not a function')
    }

    for (var  i = 0; i < this.length; i++){
        //Object.prototype.hasOwnProperty.call(this,i):返回true和false
        //this指的是当前的调用，i指的是下标，存在返回true，不存在返回false
        if (Object.prototype.hasOwnProperty.call(this,i)){
            callback(this[i],i,this);
        }

    }
}

arr.myMap(function (a,b,c) {
    console.log((a*a),b,c);
})