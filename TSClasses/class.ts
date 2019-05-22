//類的創建
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   print(){
//       return this.name + " : " + this.age;
//   }
// }

// var p = new Person('abel', 20);
// p.print();
// alert(p.print());

//類的繼承
// class Person {
//   name: string;
//   age: number;
//   //構造方法
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   tell() {
//     return this.name + " - " + this.age;
//   }
// }

// class Student extends Person {
//   school: string;
//   //調用父類的構造方法的調用
//     constructor(school:string){
//         //必须在派生类的构造函数中访问'this'之前调用'super'
//         super("abel",20);
//         this.school = school;
//     }
//   tell() {
//     return this.name + " : " + this.age + " : " + this.school;
//   }
// }
// var s = new Student("東莞");

// //使用構造函數后不需要賦值操作
// // s.name = 'abel';
// // s.age = 20;
// // s.school = '東莞'
// alert(s.tell());

//訪問修飾符
// class People {
//   //默認時是public  //在頭部聲明private也是訪問不到的
//   name: string;
//   age: number;
//   //構造函數内 加入private 就無法訪問
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   print() {
//     return this.name + " - " + this.age;
//   }
// }
// class Teacher extends People {
//   school: string;
//   constructor(school: string) {
//     super("abel", 22);
//     this.school = school;
//   }
//   print() {
//     return this.name + " - " + this.age + " - " + this.school;
//   }
// }
// var t = new Teacher("東莞");
// // t.name = '';
// // t.age = 22;
// // t.school = '東莞'
// alert(t.print());

//封裝的實現
// class Hello {
//     private _name: string;
//     // age: number;
//     tell(){
//         return this.name;
//     }
//     get name():string{
//         return this._name;
//     }
//     set name(newName:string){
//         // this._name = newName;
//         if(newName.length>30 || newName.length<0){
//             alert('非法操作');
//         }else{
//             this._name = newName;
//         }
//     }
// }
// var h = new Hello();
// h.name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
// // alert(h.tell());

//static和使用技巧
// class Person {
//     //使用靜態要通過類名來調用
//     //属性“name”是“Person”类型的静态成员
//     //静态属性'name'与构造函数'Person'的内置属性'Function.name'冲突
//     //待解決
//     static name: string;
//     tell(){
//         alert('姓名' + Person.name);
//     }
// }
// var p = new Person();
// Person.name = 'abel';
// p.tell();

//當前類的一個類型 創建了一個類 也代表創建了一個聲明 
//當前數據類型聲明為當前類的一個類型 我們稱他們為  “引用數據類型”
class Greeter{
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(){
        return " Hello, " + this.greeting;
    }
}
var green: Greeter;
green = new Greeter('abel');
alert(green.greet());