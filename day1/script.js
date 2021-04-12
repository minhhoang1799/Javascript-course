var a = "Dinh Long"
var b = 18
var c = true
var d = undefined
var e = null
var g = function(){}
var h = {}
var j = []

console.log(a,typeof a)
console.log(b,typeof b)
console.log(c,typeof c)
console.log(d,typeof d)
console.log(e,typeof e)
console.log(g,typeof g)
console.log(h,typeof h)
console.log(j,typeof j)



// console.log(pha)
var mi = "Javascript"
let re = "Typescript"
re = "Typescriptss"
console.log(re)
const pha = "Angular"

const son = {
    name: "Long"
}

son.name = "Toan"
console.log(son)

var name = "Long"
// var la = "My name's " + name
// Template string
var la = `My name's ${name}`

var age = 17

// if(age >= 18){
//     console.log("Duoc co bo");
// }
// else{
//     console.log("Chua duoc co bo")
// }

function checkAge(){
    // if(age >= 18){
    //     return "Duoc co bo"
    // }
    // return "Chua duoc co bo"
    

    return age >= 18 ? "duoc co bo" : "chua co bo"

}

console.log(checkAge())




// Function

// Exression function

var checkAge1 = function(age){
    return `Minh ${age} tuoi`
}


// Declation function

function fullInformation(name){
    var longAge = checkAge1(18)
    return `Minh ten ${name}. ${longAge}`
}
var information = fullInformation('Long')
console.log(information)


// Arrow function

var checkAge3 = () =>{
    return {

    }
}

var Person = {
    name: "Long",
    age: "18",
    info: () => {
        var e = 1
        console.log(this)
    },
    info1: function(){
        var e = 1
        console.log(this)
    }
}
Person.info()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var newArray = [1,2,3,4,5]

// newArray.splice(1, 2)
// splice(postion, length)
// console.log(newArray[1])

for(var i = 0; i < newArray.length; i++){
    console.log(newArray[i])
}
for(var i in newArray){
    console.log(newArray[i])
}
for (const item of newArray) {
    console.log(item)
}
newArray.forEach(element => {
    console.log(element)
});

var newPerson = {
    lastName: "Long",
    firstName: "truong",
    age: 18
}

for (const key in newPerson) {
    console.log(newPerson[key])
}

    
var lastNameKey = 'last'
var firstNameKey = 'first'
newPerson[lastNameKey + "Name"]
newPerson["firstName"]

var fullName = "http://127.0.0.1:5500/day1/"
console.log(fullName.split("127.0.0.1:5500/")[1])

var newObj = {
    name: "Long",
    age: 18
}
var newObjj = {
    ...newObj
}

newObjj.name = "Toan"
console.log(newObj)
console.log(newObjj)

// Scope
console.log(window)
// Function scope
function test(){
    var b = "Long"
    console.log(b)
    function tesss(){
        // Scope chain   
    }
}

// Block scope

// if(){

// }
// else{
    
// }


// Global Scope

// Local Scope

function Persion{
    
}

// This, call, apply, bind

if(newObjj){
    
}