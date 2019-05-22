//基本數據類型
// var isBoon: boolean = false;
// function tell(){
//     alert(isBoon);
// }
// tell();
// var num : number = 10;
// function tell(){
//     num++;
//     alert(num);
// }
// tell();
//數據類型Array enum
// var list1: number[]=[1,2,3,4];
// function tell(){
//     alert(list1[0]);
//     alert(list1[1]);
//     alert(list1[2]);
//     alert(list1[3]);
// }
// tell();
//Array
// var list2 : Array<string> = ["abel","blues"];
// function tell(){
//     alert(list2[0]);
//     alert(list2[1]);
//     alert(list2[2]);
//     alert(list2[3]);
// }
// tell();
//枚舉類型 取值被限制在一個有限的範圍内 一周/7天 。。。
//下標可以賦值操作
// enum Color {Red = 1,Green=5,Orange=10};
// enum Color {Red,Green,Orange};
// var c:Color = Color.Green;
// var colorName:string = Color[10];
// function tell(){
//     alert(c);
// }
// tell();
//any void
// var is : number = 123;
var notSure = 10;
// notSure = 'Hello';
// notSure = false;
//可以指定數組
var list = [1, "hello", false];
function tell() {
    // alert(notSure);
    alert(list[2]);
}
tell();
