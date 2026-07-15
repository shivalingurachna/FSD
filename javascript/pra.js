// var a=8;
// var b=9;
// var c=10;
// var d=34;
// var result = a > b ? (a > c ? (a > d ? a : d) : (c > d ? c : d)) : (b > c ? (b > d ? b : d) : (c > d ? c : d));
// var result1 = a < b ? (a < c ? (a < d ? a : d) : (c < d ? c : d)) : (b < c ? (b < d ? b : d) : (c < d ? c : d));
// console.log(result);
// console.log(result1);

// sum of numbers

// var num = 3435;
// var sum = 0;
// while(num != 0){
//     var res = num % 10;
//     sum=sum+res;
//     num=Math.floor (num /=10); //math.floor used to convert the float numbers into int .
// }
// console.log(parseInt(sum)) // then we use write parseInt and not.


// left angled triangle

// let row=5;
//   for(let i=1; i <= row; i++){
//          let res=" ";
//          for(let j=1; j<=i; j++){
//               res += "* ";

// }

//     console.log(res);
//  }


//   for(let i=row; i>0; i--){
//          let res=" ";
//          for(let j=i; j>0; j--){
//               res += "* ";

// }

//     console.log(res);
//  }

// let rows=5;
//  for(let i=1;i<=rows;i++){
//     let res=" ";
//     for(let j=1;j<=rows-i;j++){    
//              res +=" ";
//     }         for(let k=1;k<=i;k++){
//             res += "*";
//         }     console.log(res); }


//         for(let i=rows;i>0;i--){
//     let res=" ";
//     for(let j=1;j<=rows-i;j++){   
//             res +=" ";
//     }         for(let k=1;k<=i;k++){
//             res += "*";
//         }     console.log(res); }

//         var a=100;
//         var b=24;
//         console.log(a+b)

// var a=12;
// var b=
// var c=6;

// var res=a>b ? a:b
// console.log(res)

// console.log(a+b)

// console.log(a-b)

// console.log(a/b)

// console.log(parseInt(a/b))

// console.log(a*b)

// console.log(a%b)

// var res=a>b && a>c
// console.log(res)

// var res=a>b || a>c
// console.log(res)

// var a="rachana"
// var b="shivalingu"

// var res= a>b ? a:b
// console.log(res)

// var res=a>b && a>c
// console.log(res)

// var res=a>b || a>c
// console.log(res)

// var ress= a && b
// console.log(ress)

// var ress= a || b
// console.log(ress)

// var arr=[10,34,35,56,34,34 ];
// var max=arr[0];
// var min=arr[0];
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(max)
// console.log(min)

// sum of the numbers 

// var num=1234;
// var digits=0;
// var sum=0;
// while(num!=0){
//     digits=num % 10;
//     sum+=digits;
//     num=parseInt(num/10);
// }
// console.log(sum);


var arr=[10,20,30,40,50]
arr.push(60)
arr.pop()
arr.unshift(2)
arr.shift()
arr.splice(1)
arr.splice(3,4,23,34)
arr.slice(3,4,30,40)
console.log(arr)

var arr=[10,20,30,40,50]
delete arr[2]
console.log(arr)