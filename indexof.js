var arr = [1,2,3,4,5,6,7];

// console.log(arr.indexOf(1))

// Array.prototype.myIndexOf = function (callback) {
//     if (typeof callback !== 'function' ){
//         //抛出类型错误
//         throw new TypeError(callback + ' is not a function')
//     }
//
//     for (var  i = 0; i < this.length; i++){
//         //Object.prototype.hasOwnProperty.call(this,i):返回true和false
//         //this指的是当前的调用，i指的是下标，存在返回true，不存在返回false
//         if (Object.prototype.hasOwnProperty.call(this,i)){
//             callback(i);
//         }
//
//     }
// }
//
// arr.myIndexOf(function (d) {
//     console.log(d);
// })

    Array.prototype.myIndexOf = function (a) {
        for(var i = 0; i < this.length; i++){
            if (arr[i] == a){
                return i;

            }else {
                return -1;
            }

        }

    }

    console.log(arr.myIndexOf(8));
