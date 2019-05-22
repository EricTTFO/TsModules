//創建接口
//通过关键字Interface创建一个接口，同时对接口进行使用。达到规范类型的目的
// function printLabel(labelObj:{label:string}){
//     console.log(labelObj.label);
// }
// var myObj = {label: 'Hello'};
// printLabel(myObj);

// interface LabelValue{
//     label: string;
// }
// function printLabel(labelObj:LabelValue){
//     console.log(labelObj.label);
// }
// var myObj = {label:"Hello"};
// printLabel(myObj);

//可選屬性
//不一定每個聲明的接口都能被用到
//可能接口中的属性不能全部用到，这个时候需要进行可选择那么通过标识符“？”进行匹配可以达到这个目的。更多的满足开发需求
// interface USB {
//     name?: string;
//     age?: number;
// }
// function printUSB(pu:USB){
//     console.log(pu.name);
//     // console.log(pu.age);
// }
// // var my = {name:"abel",age: 25};
// var my = {name:"abel"};
// printUSB(my);

//函數類型
//規範函數的參數的統一性 避免參數轉換問題
// interface SearchFunc{
//     (source:string,subString:string): boolean;
// }
// var mySearch:SearchFunc;
// mySearch = function(source:string,subString:string){
//     var result = source.search(subString);
//     if(result != -1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//數組類型
//通过接口来规范数组的类型问题。规避掉类型转换异常问题
// interface StringArray{
//     [index:number]:string;
// }
// var myArray: StringArray;
// myArray = ["Abel"]
// alert(myArray[0]);

//class類型
//通过class来实现接口，同时复写接口的属性和函数来完成开发中的需求
// interface ClockInterface{
//     currentTime: Date;
//     setTime(d:Date);
// }
// class Clock implements ClockInterface{
//     currentTime: Date;
//     setTime(d:Date){
//         this.currentTime = d;
//     }
//     constructor(h:number,m:number,s:number){
//         // this.currentTime = currentTime;
//     }
// }

//接口繼承與混合類型
//接口也是可以继承的如 class，接口中也可以存在混合类型
// interface Shape {
//   color: string;
// }
// interface PenStroke {
//   penWidth: number;
// }
// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }
// var s = <Square>{};
// s.color = "blue";
// s.penWidth = 10;
// s.sideLength = 20;

// //混合類型
// interface Counter {
//   interval: number;
//   reset(): void;
//   (start: number): string;
// }
// var c:Counter;
// c.(10);
// c.reset();
