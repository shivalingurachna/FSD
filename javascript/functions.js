
function hello(){
     console.log("hello")
  }
  hello()


 function hello(username){
    console.log("my is "+username)
 }
     var uname="rachana"
     hello(uname)


    function hello(username){
         console.log("my name is "+username)
 }
var uname="rachana"
 hello(uname)

function hello(username){
    return "my name is "+username;
}
var uname="rachana"
console.log(hello(uname))

function hello(username){
         return "my name is "+username;
  }
 var uname="rachana"
var res=hello(uname);
console.log(res)


var hello=function(){
    return "hi! my name is rachana shivalingu"
}
console.log(hello())

function hello(){
    return "my name is rachana"
}
console.log(hello())

var hello=function(){
     return "hi! my name is rachana shivalingu"
}
console.log(hello())

arr=[35,46,35,35,36,]
for(let a of arr){
    if(a%2==0){
        console.log(a)
    }
}