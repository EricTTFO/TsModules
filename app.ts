// var x =10;
// var y = 33;
// function add(x,y){
//     // alert('hello')
//     return x+y;
// }
// var myAdd = function(){
//     return x+y;
// }

// function add(x: number, y: number): String {
//   return "Hello typescript";
// }
// // console.log(add)
// var myAdd = function(x: number, y: string): string {
//   return "hello ts";
// };
// // console.log(myAdd);

// var myAddts: (name: string, age: number) => number = function(
//   n: string,
//   a: number
// ): number {
//   return a;
// };

// //可選參數的書寫格式
// function buildName(firstName?:string,lastName?:string){
//     // return firstName+ "" + lastName;
//     if(lastName){
//         return firstName + " " + lastName;
//     }else{
//         return firstName;
//     }
// }


// var resualt1 = buildName("iwen","ime");
// var resualt2 = buildName("iwen");
// // var resualt3 = buildName("iwen","ime","if")
// var resualt4 = buildName()

// function buildName(firstName:string,lastName="Abel"){
//     return firstName + " and "+ lastName;
// }
// var resualt1 = buildName("Abel");
// var resualt2 = buildName('thin','fat'); 
// document.getElementById('app').innerHTML = resualt2;

//可變參數的使用
// function peopleName(...restOfname:string[]){
//     return restOfname.join("-");
// }
// var pn = peopleName("abel","fat","if","else","?");
// document.getElementById("app").innerHTML = pn;

var people = {
    name: ["A","B","C","D","E"],
    getName: function(){
        return ()=>{
            var i = Math.floor(Math.random()*4);
            return {
                n: this.name[i]
            }
        }
    }
}
var MyName = people.getName();
// alert('name:' + MyName().n);
document.write(MyName().n);